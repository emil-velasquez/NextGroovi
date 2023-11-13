interface RegisterLayoutProps {
    children: React.ReactNode
}

export default function SearchLayout(props: RegisterLayoutProps) {
    const { children } = props;

    return (
        <section>
            {children}
        </section>
    )
}