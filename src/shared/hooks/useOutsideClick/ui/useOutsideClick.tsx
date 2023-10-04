import {RefObject, useEffect} from "react";


const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {

    const handle = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handle)
        return () => {
            document.removeEventListener('click', handle)
        }
    }, [ref, callback])
}

export default useOutsideClick
