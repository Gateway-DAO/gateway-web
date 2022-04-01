import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DaoWrapper = styled.div`
    width: 95%;
    margin: 20px auto;
    color: white;
`;

export const ProfileInfoWrapper = styled.div`
    height: 30vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// Dao Bio Information
export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ProfileImageContainer = styled.div`
    border-radius: 100%;
    width: 148px;
    height: 148px;
    background-color: #ffffff;
    background: url(${(props) => props.src || ''});
    background-size: cover;
    background-position: center;
`;

export const DaoBioInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
`;

export const EditContainer = styled.div`
    margin: 10px;
    font-size: 20px;
    display: flex;
    position: relative;
    cursor: pointer;
`;

export const DaoTagContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

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
`;

export const CategoryLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`;

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
`;
//  dao related social sharing

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`;

export const Button = styled.div`
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
`;

export const BackHomeButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    position: relative;
    @media only screen and (max-width: 350px) {
        width: 35px;
        height: 35px;
    }
`;

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
`;

export const Social = styled(BackHomeButton)`
    margin-right: 10px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    &[data-title]:hover:after {
        content: attr(data-title);
        position: absolute;
        padding: 2px 6px;

        top: 46px;

        font-family: Be Vietnam;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        // line-height: px;

        display: flex;
        align-items: center;

        background: #220a38;
        border: 1px solid #7e3bdc;
        color: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
    }
`;

export const TokenHolding = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 100px;
`;

export const TokenText = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    margin: 2px 15px;
    color: #ffffff;
`;

export const SocialLink = styled(BackHomeButtonText)`
    color: #ffffff;
    font-size: 20px;
`;

// sub Dao container

export const SubDaoContainer = styled.div`
    // margin-right: 275px;
    display: flex;
    flex-direction: column;
`;

export const TextName = styled.p`
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
`;

export const SubDAOImg = styled.img`
    width: 32.96px;
    height: 32.96px;
    margin-top: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 100px;
`;

// selection styling

export const ProfileAndFeedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ProfileDiv = styled.div`
    display: flex;
`;

const SelectionTabStyling = `
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
    font-weight: bold;
    font-size: 18px;

    border-bottom: 2px solid;
    border-image: linear-gradient(95.57deg, #EE787B 8.89%, #E153F2 34.15%, #495BE0 67.09%, #6A39F3 95.52%);
    border-image-slice: 1;  
`;

export const SelectedTab = styled.h2`
    font-size: 18px;
    ${(props) => (props.showActive ? SelectionTabStyling : '')}

    margin-right: 40px;
    font-family: Poppins;
    font-style: normal;
    line-height: 40px;
    cursor: pointer;
    letter-spacing: -0.015em;
`;

export const Text = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    /* or 233% */

    letter-spacing: 0.05em;

    color: ${(props) => props.color || '#170627'};

    @media only screen and (max-width: 1190px) {
        font-size: 11px;
    }

    @media only screen and (max-width: 300px) {
        font-size: 10px;
    }
`;

// Chains
export const Chain = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 100%;
    display: inline-block;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    &:hover {
        border: 1px solid rgba(255, 255, 255, 0.4);
    }
`;
export const ChainLink = styled(Link)`
    text-decoration: none;
    width: 22px;
    height: 22px;
`;
export const AdminAndMemberViewWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ChangeViewButton = styled.div`
    width: 184px;
    height: 40px;
    margin-bottom: 10px;
    border: 1px solid ${(props) => (props.active ? '#7e3bdc' : '#a5a5a5')};
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    cursor: pointer;
    background-color: ${(props) => props.active && '#220a38'};
`;
