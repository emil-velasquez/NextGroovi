interface ErrorLayoutProps {
    children: React.ReactNode
}

export default function ErrorLayout(props: ErrorLayoutProps) {
    const { children } = props;

    return (
        <section>
            {children}
        </section>
    )
}