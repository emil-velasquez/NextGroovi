import styles from "./_styles/Home.module.scss"

import NavigationBar from "./_components/navigation-bar/navigation-bar";
import TopBar from "./_components/top-bar/top-bar";

interface HomeLayoutProps {
    children: React.ReactNode
}

export default function HomeLayout(props: HomeLayoutProps) {
    const { children } = props;

    return (
        <div>
            <TopBar />
            <NavigationBar />
            <section className={styles.home}>
                {children}
            </section>
        </div>
    )
}