import type { Metadata } from 'next'

import { Nunito } from "next/font/google"
import "./_styles/globals.scss"

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
            <body>
                {children}
            </body>
        </html>
    )
}
