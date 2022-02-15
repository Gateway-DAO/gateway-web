import styled from 'styled-components';
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ImageOverlapDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
`;
export const ImageOverLap = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    left: ${(props) => props.left};
    background-image: url('${(props) => props.src}');
    background-position: center;
    background-size: cover;
    z-index: ${(props) => props.zind};
`;

export const PfpText = styled.div`
    width: 107px;
    height: 24px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    /* or 100% */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #170627;
`;
