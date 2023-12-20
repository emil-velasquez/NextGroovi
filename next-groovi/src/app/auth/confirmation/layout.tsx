interface ConfirmationLayoutProps {
    children: React.ReactNode
}

export default function ConfirmationLayout(props: ConfirmationLayoutProps) {
    const { children } = props;

    return (
        <section>
            {children}
        </section>
    )
}