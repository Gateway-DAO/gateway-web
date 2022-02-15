import * as Styled from './style';
import { useClickAway } from 'react-use';
import { useRef } from 'react';

const Modal = (props) => {
    const toggle = props.toggle;
    const ref = useRef(null);

    useClickAway(ref, () => {
        props.toggle();
    });

    if (!props.show) {
        return null;
    }

    return (
        <Styled.Wrapper>
            <Styled.Container ref={ref}>
                <Styled.CloseBtn size={24} color='white' onClick={toggle} />
                <Styled.ChildrenWrapper>
                    {props.children}
                </Styled.ChildrenWrapper>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Modal;
