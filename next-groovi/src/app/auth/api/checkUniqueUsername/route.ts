import { NextRequest, NextResponse } from "next/server";
import { createRouteSupabase } from "@/database/superbase";
import { cookies } from "next/headers"

/**
 * Checks if a username already exists in the user database
 * request body: {username: string}
 */
export async function POST(request: NextRequest) {
    const { username } = await request.json();
    const cookieStore = cookies();
    const routeSupabase = createRouteSupabase(cookieStore);

    let errors: string[] = []

    const { data, error } = await routeSupabase
        .from("user_info")
        .select("username")
        .eq("username", username)

    if (data !== undefined && data !== null && data.length > 0) {
        errors = [...errors, "Username is taken"]
    }

    if (error) {
        errors = [...errors, error.message]
    }

    const result = { errors: errors }
    return NextResponse.json(result)
}