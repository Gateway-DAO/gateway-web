import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    margin: 20px 0;
    
`;

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled.h2`
font-family: Be Vietnam;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  align-items: center;

  color: #170627;
  
`;

const Body = styled.div`
    margin-top: 10px;
    display: flex;
`;

const Collapsible = props => {
    const [isOpen, setOpen] = useState(props.open);

    return (
        <Container>
            <Header onClick={() => setOpen(!isOpen)}>
                <Title>{props.title}</Title>
                { isOpen ? <FaChevronUp /> : <FaChevronDown /> }
            </Header>
            {isOpen && 
                <Body>
                    {props.children}
                </Body>
            }
        </Container>
    )
}

export default Collapsible;