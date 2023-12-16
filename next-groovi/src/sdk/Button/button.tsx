"use client"

import Hover from "../Hover/hover";
import styles from "./Button.module.scss"

interface ButtonProps {
    onClick: () => any,
    priority: "primary" | "secondary",
    hoverText?: string,
    children: React.ReactNode,
    className?: string
}

export default function Button(props: ButtonProps) {
    const { onClick, priority, children, hoverText, className } = props;
    const buttonStyle = priority == "primary" ? styles.primaryButton : styles.secondaryButton;

    return (
        <div className={className}>
            <Hover hoverText={hoverText} hoverDirection="right">
                <button onClick={onClick} className={buttonStyle}>
                    {children}
                </button>
            </Hover>
        </div>
    )
}