import styles from "../../styles/navigation-bar/Logo.module.scss"
import Card from "@/sdk/Card/card"

import { BsDiscFill } from "react-icons/bs"

export default function Logo() {
    return (
        <Card>
            <div className={styles.logoContainer}>
                <BsDiscFill className={styles.logo} />
            </div>
        </Card>
    )
}