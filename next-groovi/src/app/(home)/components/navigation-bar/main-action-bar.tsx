"use client"

import NavLink from "@/sdk/NavLink/navlink"
import styles from "../../styles/navigation-bar/MainActionBar.module.scss"

import { BsFillHouseFill, BsSuitHeartFill, BsFire } from "react-icons/bs"
import Card from "@/sdk/Card/card"

interface MainActionOptionProps {
    children: React.ReactNode,
    address: string,
    hoverText: string
}

function MainActionOption(props: MainActionOptionProps) {
    const { children, address, hoverText } = props;

    return (
        <div className={styles.optionContainer}>
            <NavLink address={address} hoverText={hoverText} hoverDirection="right">
                <div className={styles.buttonContainer}>
                    {children}
                </div>
            </NavLink>
        </div>
    )
}

export default function MainActionBar() {
    return (
        <Card>
            <div className={styles.mainActionBar}>
                <div className={styles.gap} />
                <MainActionOption address="/" hoverText="Home">
                    <BsFillHouseFill className={styles.mainActionButton} />
                </MainActionOption>
                <MainActionOption address="/playlist/1" hoverText="Trending">
                    <BsFire className={styles.mainActionButton} />
                </MainActionOption>
                <MainActionOption address="/playlist/2" hoverText="Favorites">
                    <BsSuitHeartFill className={styles.mainActionButton} />
                </MainActionOption>
                <div className={styles.gap} />
            </div>
        </Card>
    )
}