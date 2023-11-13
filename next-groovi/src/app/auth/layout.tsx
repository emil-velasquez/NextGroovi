import "@/styles/globals.scss"

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function SearchLayout(props: AuthLayoutProps) {
    const { children } = props;

    return (
        <body>
            {children}
        </body>
    )
}