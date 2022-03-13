import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 30px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
    padding-left: 1rem;

    @media only screen and (max-width: 768px) {
        padding: 0;
        margin-top: 1rem;
        width: 100%;
    }
`;

export const Title = styled.h5`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    /* identical to box height, or 0% */

    text-align: center;
    letter-spacing: 0.2em;

    color: #e5e5e5;

    margin-bottom: 3rem;

    @media only screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

export const BigText = styled.h3`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    /* identical to box height, or 50% */

    letter-spacing: -0.015em;
    line-height: 55px;

    /* Background */
    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;

export const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 42px;
    /* identical to box height, or 200% */

    letter-spacing: -0.015em;

    color: #e5e5e5;

    margin-top: 10px;

    &:hover {
        cursor: pointer;
        font-weight: bold;
    }
`;

export const VideoContainer = styled.div`
    max-width: 675px;
    width: 100%;
    height: 380px;

    background: #28133c;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
`;

export const PlayIcon = styled.img`
    width: 52px;
    height: 52px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
        width: 55px;
        height: 55px;
        cursor: pointer;
    }
`;
