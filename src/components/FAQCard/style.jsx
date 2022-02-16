import styled from 'styled-components';

export const Container = styled.div`
    background: #180b27;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 6px;
    margin: 10px 0;
    padding: 25px;
`;

export const FAQStep = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`;

export const FAQInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-size: 16px;
    line-height: 34px;
    /* or 212% */
    color: #e5e5e5;
`;

export const BoldText = styled(Text)`
    font-weight: bold;
`;
