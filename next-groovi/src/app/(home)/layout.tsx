import type { Metadata } from 'next'

import { Nunito } from "next/font/google"
import styles from "./styles/Home.module.scss"
import "./styles/Home.scss"

import NavigationBar from './components/navigation-bar/navigation-bar'

export const metadata: Metadata = {
    title: 'Groovi',
    description: 'Dance Tutorials',
}

const nunito = Nunito({
    subsets: ["latin"],
    display: "swap"
})

interface LayoutProps {
    children: React.ReactNode
}

export default function RootLayout(props: LayoutProps) {
    const { children } = props;

    return (
        <html lang="en" className={nunito.className}>
            <body className={styles.body}>
                <NavigationBar />
                {children}
            </body>
        </html>
    )
}
