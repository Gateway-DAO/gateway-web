import * as Styled from './style'

const Modal = (props) => {
    const toggle = props.toggle

    if (!props.show) {
        return null
    }

    return (
        <Styled.Wrapper>
            <Styled.Container>
                    <Styled.CloseBtn size={24} color="white" onClick={toggle} />
                    <Styled.ChildrenWrapper>{props.children}</Styled.ChildrenWrapper>
            </Styled.Container>
        </Styled.Wrapper>
    )
}

export default Modal
