import { NextRequest, NextResponse } from "next/server";
import { createRouteSupabase } from "@/database/superbase";
import { cookies } from "next/headers"

/**
 * Checks if a username or email already exists in the user database
 * request body: {email: string, username: string}
 */
export async function POST(request: NextRequest) {
    const { email, username } = await request.json();
    const cookieStore = cookies();
    const routeSupabase = createRouteSupabase(cookieStore);

    let errors: string[] = []

    const { data: emailData, error: emailError } = await routeSupabase
        .from("user_info")
        .select("email")
        .eq("email", email)

    if (emailData !== undefined && emailData !== null && emailData.length > 0) {
        errors = [...errors, "Email is taken"]
    }

    const { data: usernameData, error: usernameError } = await routeSupabase
        .from("user_info")
        .select("username")
        .eq("username", username)

    if (usernameData !== undefined && usernameData !== null && usernameData.length > 0) {
        errors = [...errors, "Username is taken"]
    }

    if (emailError) {
        errors = [...errors, emailError.message]
    }

    if (usernameError) {
        errors = [...errors, usernameError.message]
    }

    const result = { errors: errors }
    return NextResponse.json(result)
}