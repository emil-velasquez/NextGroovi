import styles from "../../styles/navigation-bar/NavigationBar.module.scss"
import Logo from "./logo"
import MainActionBar from "./main-action-bar"
import PlaylistBar from "./playlist-bar"

export default function NavigationBar() {
    return (
        <div className={styles.navBar}>
            <Logo />
            <div className={styles.gap} />
            <MainActionBar />
            <div className={styles.gap} />
            <PlaylistBar />
        </div>
    )
}