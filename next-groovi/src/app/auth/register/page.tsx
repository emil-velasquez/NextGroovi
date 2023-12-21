"use client"
import styles from "../_styles/Auth.module.scss";

import React, { useState } from "react"
import { useRouter } from "next/navigation";

import Button from "@/sdk/Button/button";
import GoogleLoginButton from "../_components/GoogleLogin";
import ErrorBox from "../_components/ErrorBox";

import FormInput from "../_components/FormInput";
import { sha256 } from "@/api/crypto";

export default function RegisterPage() {
    const router = useRouter();

    const [emailText, setEmailText] = useState("")
    const [nameText, setNameText] = useState("")
    const [usernameText, setUsernameText] = useState("")
    const [passwordText, setPasswordText] = useState("")
    const [verifyPasswordText, setVerifyPasswordText] = useState("")

    const [errorText, setErrorText] = useState<string[]>([])

    async function onSubmit() {
        let newErrorText: string[] = []

        //check that email and username have at least one character
        let validEmail = true
        if (emailText.length === 0 || emailText.indexOf("@") === -1) {
            newErrorText = [...newErrorText, "Enter a valid email"]
            validEmail = false
        }

        //check email and username is unique
        if (validEmail) {
            const data = { email: emailText }
            const response = await fetch("http://localhost:3000/auth/api/checkUniqueEmail", {
                method: "POST",
                body: JSON.stringify(data)
            })
            let result = await response.json();
            result = result.errors;
            for (const error of result) {
                newErrorText = [...newErrorText, error]
            }
        }

        //checking that they submitted a name
        if (nameText.length === 0) {
            newErrorText = [...newErrorText, "Enter a name"]
        }

        let validUsername = true
        if (usernameText.length === 0) {
            newErrorText = [...newErrorText, "Enter a valid username"]
            validUsername = false
        }

        //check email and username is unique
        if (validEmail && validUsername) {
            const data = { username: usernameText }
            const response = await fetch("http://localhost:3000/auth/api/checkUniqueUsername", {
                method: "POST",
                body: JSON.stringify(data)
            })
            let result = await response.json();
            result = result.errors;
            for (const error of result) {
                newErrorText = [...newErrorText, error]
            }
        }

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
            const data = {
                email: emailText,
                password: await sha256(passwordText),
                username: usernameText,
                full_name: nameText
            }
            let result = await fetch("http://localhost:3000/auth/api/signUp", {
                method: "POST",
                body: JSON.stringify(data)
            })
            const { success, error } = await result.json();
            if (success) {
                router.push(`/auth/confirmation?email=${emailText}`)
            } else {
                newErrorText = [...newErrorText, error]
                setErrorText(newErrorText)
            }
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