import styled from 'styled-components';

export const BoxContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 14px;
    float: left;
    width: 25%;

    @media only screen and (max-width: 1200px) {
        width: 50%;
    }

    @media only screen and (max-width: 992px) {
        width: 50%;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const UserImage = styled.div`
    background: ${(props) =>
        props.background ? `url(${props.background})` : 'transparent'};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #170627;

    width: 100%;
    height: 400px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);

    position: relative;
    overflow: hidden;

    &::before {
        position: absolute;
        top: 0;
        left: -80%;
        z-index: 2;
        display: block;
        content: '';
        width: 50%;
        height: 100%;
        background: -webkit-linear-gradient(
            left,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
        );
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 100%
        );
        -webkit-transform: skewX(200deg);
        transform: skewX(200deg);
    }

    &:hover {
        cursor: pointer;

        &::before {
            -webkit-animation: shine 0.75s;
            animation: shine 0.75s;
        }
    }

    @-webkit-keyframes shine {
        100% {
            left: 120%;
        }
    }
    @keyframes shine {
        100% {
            left: 125%;
        }
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
`;

export const UserLogo = styled.img`
    width: 41px;
    height: 41px;
    border-radius: 50%;
`;

export const UserData = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 1rem;
`;

export const CompanyName = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #a5a5a5;
`;

export const UserName = styled.h6`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 31px;
    display: flex;
    align-items: center;

    color: #ffffff;
`;

export const UserId = styled.span`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: lowercase;

    color: #e400ff;
`;

export const UserCardBox = styled.img`
    width: 22vw;
    height: 400px;
    border-radius: 20px;
    justify-content: end;
    object-fit: cover;
    overflow: hidden;
    //box-shadow: rgba(0, 0, 0, 0.95) 0px -120px 36px -28px inset;
    cursor: pointer;
`;

// export const UserInfo = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin-left: 36px;
//     position: absolute;
//     bottom: 30px;
//     width: 15vw;
// `;

export const Name = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 31px;
    display: flex;
    align-items: center;

    color: #ffffff;
`;

// export const UserName = styled.p`
//     font-family: Be Vietnam;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 14px;
//     line-height: 20px;
//     letter-spacing: 0.05em;
//     text-transform: lowercase;
//     color: #e400ff;
//     cursor: pointer;
// `;

export const DaosProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 17px;
`;
