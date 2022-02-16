import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import * as Styled from './style';

const Collapsible = (props) => {
    const [isOpen, setOpen] = useState(props.open);

    return (
        <Styled.Container>
            <Styled.Header onClick={() => setOpen(!isOpen)}>
                <Styled.Title active={isOpen}>{props.title}</Styled.Title>
                {isOpen ? (
                    <FaChevronUp
                        size={21}
                        style={{ color: '#ff00b8', alignSelf: 'flex-end' }}
                    />
                ) : (
                    <FaChevronDown
                        size={21}
                        style={{ alignSelf: 'flex-end' }}
                    />
                )}
            </Styled.Header>
            {isOpen && <Styled.Body>{props.children}</Styled.Body>}
        </Styled.Container>
    );
};

export default Collapsible;
