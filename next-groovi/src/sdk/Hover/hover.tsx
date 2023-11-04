"use client"

import styles from "./Hover.module.scss"
import React, { useState } from "react";

interface HoverProps {
    showHover?: boolean,
    hoverText?: string,
    hoverDirection?: "left" | "right"
    children: React.ReactNode
}

export default function Hover(props: HoverProps) {
    let { showHover, hoverText, hoverDirection, children } = props;
    if (showHover == undefined) showHover = true;
    if (hoverText == undefined) hoverText = "";
    if (hoverDirection == undefined) hoverDirection = "left";

    const hoverStyle = hoverDirection == "left" ? styles.hoverTextLeft : styles.hoverTextRight;
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className={styles.hoverContainer}>
            {children}
            {showHover && isHovering &&
                <div className={hoverStyle}>
                    <text>{hoverText}</text>
                </div>}
        </div>
    )
}