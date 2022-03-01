import styled from 'styled-components';

export const Content = styled.div`
    margin-left: -14px;
    margin-right: -14px;
    padding: 0 0.7rem;
    display: flow-root;
`;

export const Col = styled.div`
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

export const InvestorCard = styled.div`
    background: ${(props) =>
        props.background ? `url(${props.background})` : 'transparent'};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;

    width: 100%;
    height: 400px;
    border-radius: 20px;
    border: 1px solid rgba(229, 229, 229, 0.5);

    &:hover {
        cursor: pointer;
    }
`;

export const InvestorInfo = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 2rem;
`;

export const InvestorLogo = styled.img`
    width: 41px;
    height: 41px;
    border-radius: 50%;
`;

export const InvestorData = styled.div`
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

export const InvestorName = styled.h6`
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

export const MoreText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    width: 100%;
    height: 100%;

    color: #e5e5e5;
`;
