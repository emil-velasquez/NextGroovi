"use client"

import Hover from "../Hover/hover";
import styles from "./Button.module.scss"

interface ButtonProps {
    onClick: () => any,
    priority: "primary" | "secondary",
    hoverText?: string,
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const { onClick, priority, children, hoverText } = props;
    const buttonStyle = priority == "primary" ? styles.primaryButton : styles.secondaryButton;

    return (
        <Hover hoverText={hoverText} hoverDirection="right">
            <button onClick={onClick} className={buttonStyle}>
                {children}
            </button>
        </Hover>
    )
}