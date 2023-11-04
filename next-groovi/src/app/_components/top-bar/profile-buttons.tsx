"use client"

import Gap from "@/sdk/Gap/gap"
import styles from "../../_styles/top-bar/ProfileButtons.module.scss"
import Button from "@/sdk/Button/button"

export default function ProfileButtons() {
    function redirectToLoginPage() {
        console.log("heading to login page")
    }

    function redirectToRegisterPage() {
        console.log("heading to register page")
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