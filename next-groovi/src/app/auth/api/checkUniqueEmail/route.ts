import { NextRequest, NextResponse } from "next/server";
import { createRouteSupabase } from "@/database/superbase";
import { cookies } from "next/headers"

/**
 * Checks if an email already exists in the user database
 * request body: {email: string}
 */
export async function POST(request: NextRequest) {
    const { email } = await request.json();
    const cookieStore = cookies();
    const routeSupabase = createRouteSupabase(cookieStore);

    let errors: string[] = []

    const { data, error } = await routeSupabase
        .from("user_info")
        .select("email")
        .eq("email", email)

    if (data !== undefined && data !== null && data.length > 0) {
        errors = [...errors, "Email is taken"]
    }

    if (error) {
        errors = [...errors, error.message]
    }

    const result = { errors: errors }
    return NextResponse.json(result)
}