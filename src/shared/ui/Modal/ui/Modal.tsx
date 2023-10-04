import styles from './Modal.module.scss'
import {FC, ReactNode} from "react";
import {createPortal} from "react-dom";

interface IModalProps {
    children: ReactNode
    onClose: () => void
    type: 'center' | 'right'
}

const Modal: FC<IModalProps> = ({children, onClose, type}) => {

    return createPortal(
        <div className={type === 'center' ? styles.modalCenter : styles.modalRight} onClick={onClose}>
            <div className={type === 'center' ? styles.contentCenter : styles.contentRight} onClick={e => e.stopPropagation()}>
                {children}
                <div className={styles.close} onClick={onClose}></div>

            </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Modal
