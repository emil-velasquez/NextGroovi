"use client"

import NavLink from "@/sdk/NavLink/navlink"
import styles from "../../_styles/navigation-bar/ActionBar.module.scss"

import { BsHouseDoorFill, BsSuitHeartFill, BsFire } from "react-icons/bs"
import Card from "@/sdk/Card/card"
import Gap from "@/sdk/Gap/gap"

interface MainActionOptionProps {
    children: React.ReactNode,
    address: string,
    hoverText: string
}

function MainActionOption(props: MainActionOptionProps) {
    const { children, address, hoverText } = props;

    return (
        <NavLink className={styles.optionContainer} address={address} hoverText={hoverText} hoverDirection="right">
            <div className={styles.buttonContainer}>
                {children}
            </div>
        </NavLink>
    )
}

export default function MainActionBar() {
    return (
        <Card>
            <div className={styles.mainActionBar}>
                <Gap gapSize={0.3} />
                <MainActionOption address="/" hoverText="Home">
                    <BsHouseDoorFill className={styles.mainActionButton} />
                </MainActionOption>
                <MainActionOption address="/playlist/1" hoverText="Trending">
                    <BsFire className={styles.mainActionButton} />
                </MainActionOption>
                <MainActionOption address="/playlist/2" hoverText="Favorites">
                    <BsSuitHeartFill className={styles.mainActionButton} />
                </MainActionOption>
                <Gap gapSize={0.3} />
            </div>
        </Card>
    )
}