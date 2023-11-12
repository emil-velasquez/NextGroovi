"use client"

import Gap from "@/sdk/Gap/gap"
import styles from "../../_styles/top-bar/ProfileButtons.module.scss"
import Button from "@/sdk/Button/button"

import { useRouter } from "next/navigation";

export default function ProfileButtons() {
    const router = useRouter();

    function redirectToLoginPage() {
        router.push("/auth/login");
    }

    function redirectToRegisterPage() {
        router.push("/auth/register")
    }

    function redirectToProfilePage() {
        console.log('heading to profile page')
    }

    return (
        <div className={styles.profileButtonContainer}>
            <Button onClick={redirectToLoginPage} priority="primary">
                <p className={styles.profileButtonsText}>{"Log In"}</p>
            </Button>
            <Gap gapSize={0.5} />
            <Button onClick={redirectToRegisterPage} priority="primary">
                <p className={styles.profileButtonsText}>{"Sign Up"}</p>
            </Button>
        </div>
    )
}