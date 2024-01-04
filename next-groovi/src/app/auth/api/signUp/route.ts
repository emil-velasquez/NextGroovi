import { NextResponse, NextRequest } from "next/server";
import { createRouteSupabase } from "@/database/superbase";
import { cookies } from "next/headers"

/**
 * Attempts to sign up a user with the username and password provided
 * @param request body: {email: string, password: string, username: string, full_name: string}
 * @returns result: {success: bool, error: string}
 */
export async function POST(request: NextRequest) {
    const { email, password, username, full_name } = await request.json();
    const cookieStore = cookies();
    const routeSupabase = createRouteSupabase(cookieStore);

    const { data, error } = await routeSupabase.auth.signUp(
        {
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                    full_name: full_name
                },
                emailRedirectTo: "http://test.groo.vi:3000/auth/api/addUser"
            }
        }
    )

    const result = {
        success: !error,
        error: error?.message
    }
    return NextResponse.json(result);
}