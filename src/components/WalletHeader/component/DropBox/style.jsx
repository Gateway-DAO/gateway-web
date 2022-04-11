import styled from 'styled-components';

export const DropDownContainer = styled.div`
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    display: flex;
    z-index: 10;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    width: 100%;
    position: absolute;
    border: double 1px transparent;

    background-image: linear-gradient(#170627, #170627),
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    &:hover {
        cursor: pointer;
    }

    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    top: 50px !important;
`;

export const ItemsContainer = styled.div`
    margin: 10px 0;

    position: relative;
    display: inline-block;
`;

export const ItemTextContainer = styled.h3`
    font-family: Be Vietnam;
    margin: 0 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.6);
`;
export const BorderLine = styled.p`
    margin: 0 20px;
    margin-top: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
