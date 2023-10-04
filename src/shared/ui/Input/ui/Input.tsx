import {FC, InputHTMLAttributes} from "react";
import styles from './input.module.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
}

const Input: FC<IInputProps> = (props) => {
    return (
        <div className={styles.input}>
            <span>{props.title}</span>
            <input {...props}/>
        </div>
    )
}

export default Input
