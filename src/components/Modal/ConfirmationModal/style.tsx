import styled from 'styled-components';
import { FormStyled } from '../../Form';

export const Container = styled.div`
    margin: 40px 50px;
    color: white;
    font-family: Poppins sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h3`
    font-family: Poppins;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
    text-transform: uppercase;
`;

export const Body = styled.p`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.05em;
    text-align: center;
    margin-top: 25px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin-top: 30px;

    & button {
        margin: initial 10px;
        margin: 0 10px;
    }
`;

export const Button = styled(FormStyled.Button)`
    padding: 9px 0;

    flex: 1;

    cursor: pointer;
`;
