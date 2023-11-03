import styles from "./Card.module.scss"

interface CardProps {
    children: React.ReactNode
}

export default function Card(props: CardProps) {
    const { children } = props;
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}