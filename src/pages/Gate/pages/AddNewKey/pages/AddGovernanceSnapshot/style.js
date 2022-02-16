import styled from 'styled-components';

export const Container = styled.div`
    background: #170627;
`;
export const MarginWrapper = styled.div`
    margin: auto 20rem;
`;
export const MarginWrapperSecondary = styled.div`
    padding: 0 50px;
`;
export const TaskBox = styled.div`
    display: flex;
    height: 80px;
    width: 250px;
    color: #fff;
    border-radius: 5px;
    font-size: 150%;
    justify-content: center;
    border: ${(props) =>
        props.active
            ? '1px solid #7E3BDC'
            : '1px solid rgba(255, 255, 255, 0.1)'};
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    background: ${(props) => (props.active ? '#220A38' : 'none')};
`;

export const TasksBox = styled.div`
    display: flex;
    color: #444;
    align-self: center;
    justify-content: space-between;
    margin-bottom: 40px;
`;
export const TaskBoxText = styled.div`
    display: flex;
    align-items: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: rgba(165, 165, 165, 1);
    padding: 0px 20px;
`;
