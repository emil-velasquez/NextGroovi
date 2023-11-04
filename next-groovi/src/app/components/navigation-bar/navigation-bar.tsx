"use client"

import styles from "../../styles/navigation-bar/NavigationBar.module.scss"
import React, { useState } from "react"

import Logo from "./logo"
import MainActionBar from "./main-action-bar"
import PlaylistBar from "./playlist-bar"

export default function NavigationBar() {
    const [isHovering, setIsHovering] = useState(false);

    const overflowY = isHovering ? "auto" : "hidden";

    return (
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            className={styles.navBar} style={{ overflowY }}>
            <Logo />
            <div className={styles.gap} />
            <MainActionBar />
            <div className={styles.gap} />
            <PlaylistBar />
            <div className={styles.gap} />
        </div>
    )
}