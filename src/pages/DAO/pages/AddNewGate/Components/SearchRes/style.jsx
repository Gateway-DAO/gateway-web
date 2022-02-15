import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 15px;
    cursor: pointer;
`;

export const ProfilePicture = styled.div`
    width: 30px;
    height: 30px;
    background: url(${(props) => props.src || ''});
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    margin-right: 10px;
`;

export const Name = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: #e5e5e5;
`;

export const Username = styled(Name)`
    color: purple;
`;
