import './Button.scss'
import {ButtonHTMLAttributes, FC} from "react"
import styled from 'styled-components'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    typeBtn: 'primary' | 'outlined'
}

const PrimaryButton = styled.button`
  background: var(--primary-color);
  color: var(--white);
`

const OutlinedButton = styled.button`
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  background: var(--white);
`

const Button: FC<IButtonProps> = (props) => {
    if (props.typeBtn === 'primary') {
        return (
            <PrimaryButton {...props}></PrimaryButton>
        )
    }
    if (props.typeBtn === 'outlined') {
        return (
            <OutlinedButton {...props}></OutlinedButton>
        )
    }
}

export default Button
