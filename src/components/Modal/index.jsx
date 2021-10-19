import { useState } from "react"
import * as Styled from "./style"

const Modal = props => {
    const [isShowing, setShowing] = useState(props.show);
    const toggle = props.toggle;

    return (
        <Styled.Container>
            {props.children}
        </Styled.Container>
    )
}

export default Modal