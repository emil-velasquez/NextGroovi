"use client"
import styles from "../_styles/Auth.module.scss";

import React, { useState } from "react"

import Button from "@/sdk/Button/button";
import GoogleLoginButton from "../_components/GoogleLogin";
import ErrorBox from "../_components/ErrorBox";

interface FormInputProps {
    children: React.ReactNode
}

function FormInput(props: FormInputProps) {
    const { children } = props;
    return (
        <div className={styles.authTextInputContainer}>
            {children}
        </div>
    )
}

export default function RegisterPage() {
    const [emailText, setEmailText] = useState("")
    const [nameText, setNameText] = useState("")
    const [usernameText, setUsernameText] = useState("")
    const [passwordText, setPasswordText] = useState("")
    const [verifyPasswordText, setVerifyPasswordText] = useState("")

    const [errorText, setErrorText] = useState<string[]>([])

    function onSubmit() {
        let newErrorText: string[] = []

        //check email and username is unique

        //check that password is between 6 and 72 characters
        if (passwordText.length < 6 || passwordText.length > 72) {
            newErrorText = [...newErrorText, "Password must be between 6 and 72 characters"]
        }

        //check that password matches verification password
        if (passwordText !== verifyPasswordText) {
            newErrorText = [...newErrorText, "Passwords must match"]
        }

        //check that we have no errors
        if (newErrorText.length == 0) {
            //attempt to sign up the new user 

            //if sign up was successful, redirect to confirmation page

            //if sign up was not successful, display error message
        } else {
            setErrorText(newErrorText)
        }
    }

    return (
        <div className={styles.authPageContainer}>
            <div className={styles.authFormContainer}>
                <h1 className={styles.authHeader}>Sign Up</h1>
                <FormInput>
                    <input type="text" className={styles.authTextInput} placeholder="Email"
                        onChange={e => setEmailText(e.target.value)} />
                </FormInput>
                <FormInput>
                    <input type="text" className={styles.authTextInput} placeholder="Full Name"
                        onChange={e => setNameText(e.target.value)} />
                </FormInput>
                <FormInput>
                    <input type="text" className={styles.authTextInput} placeholder="Username"
                        onChange={e => setUsernameText(e.target.value)} />
                </FormInput>
                <FormInput>
                    <input type="password" className={styles.authTextInput} placeholder="Password"
                        onChange={e => setPasswordText(e.target.value)} minLength={6} />
                </FormInput>
                <FormInput>
                    <input type="password" className={styles.authTextInput} placeholder="Verify Password"
                        onChange={e => setVerifyPasswordText(e.target.value)} />
                </FormInput>
                <Button className={styles.authButton} onClick={onSubmit} priority="primary">
                    <h3 className={styles.buttonText}>Sign Up</h3>
                </Button>
                {errorText.length > 0 &&
                    <ErrorBox errorText={errorText} />
                }
                <h4 className={styles.orSplit}>
                    <span>
                        or
                    </span>
                </h4>
                <GoogleLoginButton />
            </div>
        </div>
    )
}