import type { Metadata } from 'next'
import styles from "./styles/Home.module.scss"

export const metadata: Metadata = {
    title: 'Groovi',
    description: 'Dance Tutorials',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={styles.body}>{children}</body>
        </html>
    )
}
