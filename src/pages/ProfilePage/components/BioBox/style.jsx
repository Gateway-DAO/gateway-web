import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 20px;

    padding: 20px 30px;
`

export const NameBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 10px;
`

export const Name = styled.h2`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 31px;
    display: flex;
    align-items: center;
    margin-right: 5px;

    color: #FFFFFF;
`

export const Username = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: lowercase;

    color: #E400FF;
`

export const BioText = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: rgba(255, 255, 255, 0.6);

    margin: 10px 0;
`

export const Socials = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0;
`

export const SocialLink = styled.a`
    color: white;
    margin-right: 15px;
`

export const SmallHeading = styled.h4`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #FFFFFF;
`

export const MembershipBox = styled.div`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
`

export const MembershipImg = styled.img`
    width: 40px;
    border-radius: 100%;
    margin-right: 12px;
`