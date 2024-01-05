"use client"

import { createClientSupabase } from "@/database/superbase"
import { UserResponse } from "@supabase/supabase-js";

import { useEffect, useState } from "react";

export default function Home() {
    const supabase = createClientSupabase();

    const [curUser, setUser] = useState<UserResponse>();

    useEffect(() => {
        supabase.auth.getUser().then((response) => { setUser(response) });
    }, [])


    useEffect(() => {
        console.log(curUser);
    }, [curUser])

    return (
        <main>
            test
        </main>
    )
}
