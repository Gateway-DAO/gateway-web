import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import * as Styled from './style'

const Collapsible = (props) => {
    const [isOpen, setOpen] = useState(props.open)

    return (
        <Styled.Container>
            <Styled.Header onClick={() => setOpen(!isOpen)}>
                <Styled.Title active={isOpen}>{props.title}</Styled.Title>
                {isOpen ? (
                    <FaChevronUp style={{ color: '#E265B8' }} />
                ) : (
                    <FaChevronDown />
                )}
            </Styled.Header>
            {isOpen && <Styled.Body>{props.children}</Styled.Body>}
        </Styled.Container>
    )
}

export default Collapsible
