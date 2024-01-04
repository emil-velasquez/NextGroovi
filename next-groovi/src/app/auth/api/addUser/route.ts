import { NextRequest, NextResponse } from "next/server";
import { createRouteSupabase } from "@/database/superbase";
import { cookies } from "next/headers";

/**
 * Adds a user to the user_info after they have confirmed their email
 */
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)

    const code = searchParams.get("code")

    if (code) {
        const cookieStore = cookies();
        const supabase = createRouteSupabase(cookieStore);
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        const { data: { user } } = await supabase.auth.getUser()

        if (!error && user) {
            const userData = {
                username: user.user_metadata.username,
                full_name: user.user_metadata.full_name,
                profile_pic_url: "",
                bio: "",
                email: user.email
            }

            const { error: addUserError } = await supabase
                .from("user_info")
                .upsert(userData, {
                    onConflict: "user_id",
                    ignoreDuplicates: false
                })

            if (!addUserError) {
                return NextResponse.redirect("http://test.groo.vi:3000/")
            }
        }
    }
    return NextResponse.redirect("http://test.groo.vi:3000/auth/error")
}