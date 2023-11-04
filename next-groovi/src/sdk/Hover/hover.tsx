"use client"

import useMousePosition from "@/hooks/useMousePostion";
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
    const mousePosition = useMousePosition();

    if (showHover == undefined) showHover = true;
    if (hoverText == undefined) hoverText = "";
    if (hoverDirection == undefined) hoverDirection = "left";

    const shift = hoverDirection === "left" ? " - 1rem" : " + 1rem";

    const left = `calc(${mousePosition.x}px` + shift;
    const top = `calc(${mousePosition.y}px - 2rem)`
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            className={styles.hoverContainer}>
            {children}
            {showHover && isHovering &&
                <div className={styles.hoverText} style={{ left, top }}>
                    <text>{hoverText}</text>
                </div>}
        </div>
    )
}