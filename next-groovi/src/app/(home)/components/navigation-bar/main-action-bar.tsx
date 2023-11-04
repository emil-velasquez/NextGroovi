"use client"

import styles from "../../styles/navigation-bar/MainActionBar.module.scss"
import Button from "@/sdk/Button/button"

export default function MainActionBar() {
    function test() {
        console.log("here");
    }

    return (
        <div>
            <Button onClick={test} priority="secondary" showHover={true} hoverText="test" hoverDirection="right">
                <div className={styles.test}>
                    test
                </div>
            </Button>
        </div>
    )
}