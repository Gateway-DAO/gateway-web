import styled from 'styled-components';

export const Wrapper = styled.div`
    font-family: Be Vietnam;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;
export const Categories = styled.div`
    display: flex;
`;
export const Category = styled.div`
    cursor: pointer;
    color: ${(props) =>
        props.active ? 'rgba(254, 2, 185, 1)' : 'rgba(229, 229, 229, 0.6)'};
    font-size: 14px;
    font-style: normal;
    font-weight: ${(props) => (props.active ? 'bold' : '400')};
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
    margin-right: 20px;
`;

export const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #e5e5e5;
    margin-right: 10px;
`;

export const BoldText2 = styled.span`
    margin-left: 5px;
    margin-right: 10px;
    font-weight: bold;
    font-family: Be Vietnam;
    font-style: normal;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #e5e5e5;
`;

export const WhitelistButtonDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const WhitelistButton = styled.div`
    color: white;
    border-radius: 20px;
    border: solid 1px transparent;
    background-image: linear-gradient(#170627, #170627),
        linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    &:hover {
        cursor: pointer;
    }
`;
export const ButtonText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #e5e5e5;
    padding: 10px 15px;
`;
