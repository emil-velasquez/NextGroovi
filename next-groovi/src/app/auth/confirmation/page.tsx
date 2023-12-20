"use client"

import Logo from "@/sdk/Logo/logo";
import authStyles from "../_styles/Auth.module.scss"
import confirmationStyles from "./ConfirmationPage.module.scss"

import { useSearchParams } from "next/navigation"

export default function ConfirmationPage() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email")

    function resendConfirmationEmail() {
        console.log("tried to resend email")
    }

    return (
        <div className={authStyles.authPageContainer}>
            <div className={authStyles.authFormContainer}>
                <h2 className={confirmationStyles.text}>
                    A confirmation email has been sent to <br />
                    {email}. <br />
                    Please click the link in the email to confirm your account.
                </h2>
                <Logo size={5} />
                <h4 className={confirmationStyles.text}>
                    If you cannot find the confirmation email, <br />
                    click <a className={confirmationStyles.resendLink} onClick={resendConfirmationEmail}>here</a> to resend it.
                </h4>
            </div>
        </div>
    )
}