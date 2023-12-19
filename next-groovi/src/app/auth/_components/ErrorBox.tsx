import styles from "../_styles/ErrorBox.module.scss"

interface ErrorBoxProps {
    errorText: string[]
}

export default function ErrorBox(props: ErrorBoxProps) {
    const { errorText } = props;
    return (
        <div className={styles.errorBoxContainer}>
            <ul className={styles.errorBoxList}>
                {errorText.map((text) => <li key={text}>{text}</li>)}
            </ul>
        </div>
    )
}