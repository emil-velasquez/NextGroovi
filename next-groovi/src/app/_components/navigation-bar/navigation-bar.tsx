"use client"

import styles from "../../_styles/navigation-bar/NavigationBar.module.scss"
import React, { useState } from "react"

import Logo from "./logo"
import MainActionBar from "./main-action-bar"
import PlaylistBar from "./playlist-bar"
import Gap from "@/sdk/Gap/gap"

export default function NavigationBar() {
    const [isHovering, setIsHovering] = useState(false);

    const overflowY = isHovering ? "auto" : "hidden";

    return (
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            className={styles.navBar} style={{ overflowY }}>
            <Logo />
            <Gap gapSize={0.75} />
            <MainActionBar />
            <Gap gapSize={0.75} />
            <PlaylistBar />
            <Gap gapSize={0.75} />
        </div>
    )
}