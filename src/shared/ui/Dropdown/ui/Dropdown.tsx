import {FC, HTMLAttributes, useRef, useState} from "react";
import {useOutsideClick} from "shared/hooks";
import {icons} from "shared/assets";
import styles from './Dropdown.module.scss'

interface IDropdownProps extends HTMLAttributes<HTMLDivElement> {
    options: any[]
    onSelect: (country) => void
    placeholder: string
    type: 'primary' | 'toggle'
}

const Dropdown: FC<IDropdownProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)
    const [currentSelect, setCurrentSelect] = useState(props.type === 'toggle' && props.placeholder)

    function handle() {
        setIsOpen(!isOpen)
    }

    function handleSelectOption(option) {
        props.onSelect(option)
        setIsOpen(false)
        setCurrentSelect(option)
    }

    function handlePlaceholder() {
        if (props.type === 'primary') {
            return props.placeholder
        }
        if (props.type === 'toggle') {
            return currentSelect
        }
    }

    useOutsideClick(dropdownRef, () => {
        setIsOpen(false)
    })
    // props.placeholder || props.type === 'toggle' ? props.placeholder: currentSelect
    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <div className={styles.title} onClick={handle}>
                <span {...props}>{handlePlaceholder()}</span>
                <img src={icons.arrow_down} alt=""/>
            </div>
            {isOpen && <div className={styles.options}>
                {props.options.map((option, idx) => (
                    <div onClick={() => handleSelectOption(option)} key={idx}>
                        {option}
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Dropdown
