import type { Metadata } from 'next'

import { Nunito } from "next/font/google"
import styles from "./_styles/Home.module.scss"
import "./_styles/globals.scss"

import NavigationBar from './_components/navigation-bar/navigation-bar'
import TopBar from './_components/top-bar/top-bar'

export const metadata: Metadata = {
    title: 'Groovi',
    description: 'Dance Tutorials',
}

const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
    display: "swap"
})

interface LayoutProps {
    children: React.ReactNode
}

export default function RootLayout(props: LayoutProps) {
    const { children } = props;

    return (
        <html lang="en" className={nunito.variable}>
            <body className={styles.body}>
                <TopBar />
                <NavigationBar />
                <div className={styles.home}>
                    {children}
                </div>
            </body>
        </html>
    )
}
