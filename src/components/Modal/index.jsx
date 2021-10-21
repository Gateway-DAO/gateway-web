import { useState } from "react"
import * as Styled from "./style"

const Modal = props => {
    const toggle = props.toggle;

    console.log(props);

    if (!props.show) {
        return null;
    }

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.CloseBtn size={24} color="white" onClick={toggle} />
                {props.children}
            </Styled.Container>
        </Styled.Wrapper>
    )
}

export default Modal