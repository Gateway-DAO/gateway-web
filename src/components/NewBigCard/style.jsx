import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DaoWrapper = styled.div`
    width: 95vw;
    margin: 20px auto;
    background-color: #180b27;
    color: white;
`

export const ProfileInfoWrapper = styled.div`
    height: 30vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

// Dao Bio Information
export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ProfileImageContainer = styled.img`
    border-radius: 100%;
    width: 148px;
    height: 148px;
    background-color: #ffffff;
`

export const DaoBioInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
`

export const DaoTagContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const Category = styled.li`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 20px;
    display: inline-block;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: 0.05em;
    padding: 2px 6px;
    margin-right: 10px;

    @media only screen and (max-width: 380px) {
        margin: 5px;
    }
`

export const CategoryLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`

// name and basic information related styling

export const Title = styled.h1`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 53px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #ffffff;
`
//  dao related social sharing

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`

export const Button = styled.a`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 20px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #ffffff;

    text-decoration: none;
    padding: 10px;
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`

export const BackHomeButton = styled(Button)`
    width: 36px;
    height: 36px;
    position: relative;
    @media only screen and (max-width: 350px) {
        width: 35px;
        height: 35px;
    }
`

export const BackHomeButtonText = styled.a`
    font-size: 30px;
    position: absolute;
    top: 6px;
    left: 6px;
    @media only screen and (max-width: 350px) {
        top: 4px;
        left: 7.5px;
        font-size: 15px;
    }
`

export const Social = styled(BackHomeButton)`
    margin-right: 10px;
`

export const SocialLink = styled(BackHomeButtonText)`
    color: #ffffff;
    font-size: 20px;
`

// sub Dao container

export const SubDaoContainer = styled.div`
    margin-right: 275px;
    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    /* or 87% */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #e5e5e5;
`

export const SubDAOImg = styled.img`
    width: 32.96px;
    height: 32.96px;
    margin-top: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 100px;
`
