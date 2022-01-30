import styled from 'styled-components'

export const KeyContainer = styled.div`
    background: #ffffff;
    border: 1px solid rgba(229, 229, 229, 0.5);
    box-sizing: border-box;
    border-radius: 20px;
    padding: 34px;
    width: 100%;
    margin-top: 20px;
`

export const KeyTitle = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #170627;
`

export const Description = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    /* or 144% */

    color: #170627;
`

export const videoContainer = styled.div`
    margin-top: 37px;
    margin-bottom: 59px;
    width: 200px;
`

export const ActivityContainer = styled.div`
    display: flex;
`

export const StartQuizButton = styled.div`
    display: flex;
    min-width: 150px;
    margin-top: 10px;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: center;
    background: linear-gradient(
        88.53deg,
        #ee787b 2.77%,
        #e153f2 51.87%,
        #495be0 98.96%
    );
    box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
    border-radius: 20px;
    &:hover {
        cursor: pointer;
    }
`

export const ButtonText = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    line-height: 19px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;

    padding: 8px 30px 8px 30px;
    font-size: 14px;
`

export const HideButton = styled.div`
    display: flex;
    align-center: center;
    justify-content: center;
    min-width: 150px;
    margin-top: 10px;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: center;
    border: 1px solid #a5a5a5;
    box-sizing: border-box;
    border-radius: 20px;
    margin-left: 10px;

    &:hover {
        cursor: pointer;
    }
`

export const HideButtonText = styled(ButtonText)`
    padding: 4px 30px 8px 30px;
    color: #a5a5a5;
`
