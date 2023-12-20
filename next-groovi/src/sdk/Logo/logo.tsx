import styles from "./Logo.module.scss"
import Card from "@/sdk/Card/card"

import { BsDiscFill } from "react-icons/bs"

interface LogoProps {
    size: number
}

export default function Logo(props: LogoProps) {
    const { size } = props;
    const logoStyle = { width: size + "rem", height: size + "rem" }

    const containerSize = size + 1;
    const containerSizeStyle = { width: containerSize + "rem", height: containerSize + "rem" }

    return (
        <div className={styles.logoContainer} style={containerSizeStyle}>
            <BsDiscFill className={styles.logo} style={logoStyle} />
        </div>
    )
}