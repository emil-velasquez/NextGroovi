import type { Metadata } from 'next'
import styles from "./styles/Home.module.scss"

import NavigationBar from './components/navigation-bar/navigation-bar'

export const metadata: Metadata = {
    title: 'Groovi',
    description: 'Dance Tutorials',
}

interface LayoutProps {
    children: React.ReactNode
}

export default function RootLayout(props: LayoutProps) {
    const { children } = props;

    return (
        <html lang="en">
            <body className={styles.body}>
                <NavigationBar />
                {children}
            </body>
        </html>
    )
}
