import Gap from "@/sdk/Gap/gap";
import styles from "../../_styles/navigation-bar/ActionBar.module.scss";

import Card from "@/sdk/Card/card";
import Hover from "@/sdk/Hover/hover";
import NavLink from "@/sdk/NavLink/navlink";
import { BsCollectionPlayFill, BsFillPlusSquareFill } from "react-icons/bs";

export default function PlaylistBar() {
    return (
        <Card>
            <div className={styles.mainActionBar}>
                <Gap gapSize={0.3} />
                <Hover hoverText="Playlists" hoverDirection="right">
                    <div className={styles.buttonContainer}>
                        <BsCollectionPlayFill className={styles.mainActionButton} />
                    </div>
                </Hover>
                <NavLink className={styles.optionContainer} address="/playlist" hoverText="Create new playlist" hoverDirection="right">
                    <div className={styles.buttonContainer}>
                        <BsFillPlusSquareFill className={styles.mainActionButton} />
                    </div>
                </NavLink>
            </div>
        </Card>
    )
}