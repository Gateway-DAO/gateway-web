import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
`;

export const Title = styled.h2`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    align-items: center;
    ${(props) => (props.active ? 'color: #ff00b8' : 'color :#e5e5e5')};
`;

export const Body = styled.div`
    margin-top: 10px;
    display: flex;
`;
