import styles from "../_styles/Auth.module.scss";

interface FormInputProps {
    children: React.ReactNode
}

export default function FormInput(props: FormInputProps) {
    const { children } = props;
    return (
        <div className={styles.authTextInputContainer}>
            {children}
        </div>
    )
}
