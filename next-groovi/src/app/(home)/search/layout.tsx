interface SearchLayoutProps {
    children: React.ReactNode
}

export default function SearchLayout(props: SearchLayoutProps) {
    const { children } = props;

    return (
        <section>
            {children}
        </section>
    )
}