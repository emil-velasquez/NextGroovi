interface LearnLayoutProps {
    children: React.ReactNode
}

export default function LearnLayout(props: LearnLayoutProps) {
    const { children } = props;

    return (
        <section>
            {children}
        </section>
    )
}