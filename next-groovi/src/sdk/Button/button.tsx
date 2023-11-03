"use client"

import styles from "./Button.module.scss"
import React, { useState } from "react";

interface ButtonProps {
    onClick: () => any,
    priority: "primary" | "secondary",
    showHover: boolean,
    hoverText?: string,
    hoverDirection?: "left" | "right"
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const { onClick, priority, showHover, hoverText, hoverDirection, children } = props;
    const buttonStyle = priority == "primary" ? styles.primaryButton : styles.secondaryButton;
    const hoverStyle = hoverDirection == "left" ? styles.hoverTextLeft : styles.hoverTextRight;

    const [isHovering, setIsHovering] = useState(false);

    return (
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className={styles.buttonContainer}>
            <button onClick={onClick} className={buttonStyle}>
                {children}
            </button>
            {showHover && isHovering &&
                <div className={hoverStyle}>
                    <text>{hoverText}</text>
                </div>}
        </div>
    )
}