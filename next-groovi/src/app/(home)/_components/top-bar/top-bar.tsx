import styles from "../../_styles/top-bar/TopBar.module.scss"

import ProfileButtons from "./profile-buttons"
import SearchBar from "./search-bar"

export default function TopBar() {
    return (
        <div className={styles.topBarContainer}>
            <SearchBar />
            <ProfileButtons />
        </div>
    )
}