interface LoginLayoutProps {
    children: React.ReactNode
}

export default function SearchLayout(props: LoginLayoutProps) {
    const { children } = props;

    return (
        <section>
            {children}
        </section>
    )
}