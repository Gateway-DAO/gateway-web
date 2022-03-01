import styled from 'styled-components';

export const CategoriesContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Category = styled.div`
    background: linear-gradient(
        180deg,
        rgb(126 59 220 / 11%) 0.57%,
        rgb(255 255 255 / 15%) 34.95%,
        #ffffff40 100%
    );
    /* opacity: 0.2; */
    border-radius: 20px;
    padding: 2.4rem;
    flex-basis: 33.3333%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 33.3333%;
    float: left;
    position: relative;
    margin: 0 0.7rem;

    @media only screen and (max-width: 768px) {
        max-width: 80%;
        margin: 1rem 0;
        padding: 1.6rem;
    }
`;

export const CategoryImg = styled.img`
    height: 200px;
`;

export const CategoryName = styled.h6`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.2em;
    color: ${(props) => (props.color ? props.color : `#ff00b8`)};

    @media only screen and (max-width: 940px) {
        font-size: 13px;
    }

    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const CategoryDescription = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 46px;
    /* or 110% */

    letter-spacing: -0.015em;

    color: #ffffff;
    margin-top: 20px;

    @media only screen and (max-width: 1190px) {
        font-size: 32px;
        line-height: 36px;
    }

    @media only screen and (max-width: 940px) {
        font-size: 23px;
        line-height: 27px;
    }

    @media only screen and (max-width: 768px) {
        font-size: 34px;
        line-height: 38px;
    }
`;
