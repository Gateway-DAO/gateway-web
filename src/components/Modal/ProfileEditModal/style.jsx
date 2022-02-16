import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const Container = styled.div`
    margin: 40px 140px;
    color: white;
    font-family: Poppins sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
`;

export const Underline = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 20px;
`;

export const MembershipBox = styled.div`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
`;

export const MembershipIcon = styled.div`
    position: relative;
    margin-right: 16px;
    margin-top: 10px;
`;

export const MembershipImg = styled.div`
    position: relative;
    width: 54px;
    height: 54px;
    background: url(${(props) => props.src || ''});
    background-position: center;
    background-size: cover;
    border-radius: 100%;
    background-color: white;
`;

export const MembershipRemove = styled(FaTimes)`
    position: absolute;
    background: #7e3bdc;
    color: #e5e5e5;
    border-radius: 100%;
    padding: 2px;
    cursor: pointer;
    right: 1px;
    top: -2px;
`;

export const SearchBox = styled.ul`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 10px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    flex-direction: column;
    letter-spacing: 0.05em;
    background: #170627;
    color: #e5e5e5;
    margin: 12px 0;
    width: 100%;
`;

export const SearchItem = styled.li`
    padding: 15px 0;
    ${(props) =>
        props.divider && 'border-top: 1px solid rgba(255, 255, 255, 0.2);'}
    cursor: pointer;
`;
