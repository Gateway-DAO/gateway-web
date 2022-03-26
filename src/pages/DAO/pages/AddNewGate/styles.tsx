import styled from 'styled-components';
import { FormStyled } from '../../../../components/Form';
import { components } from 'react-select';

const { Option } = components;

export const Page = styled.div`
    // background-color: #170627;
    min-height: 100vh;
    // overflow-x: hidden;
    width: 100%;
    // display: flex;
    // justify-content: space-between;
    // flex-direction: column;
    background-color: transparent;
    height: 100%;
    position: relative;

    overflow: hidden;

    /* &:before {
        position: absolute;
        content: '';
        z-index: -2;
        background-color: #170627;
        height: 100%;
        width: 100%;
    } */
`;

export const FormContainer = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
    margin: 50px 0;
`;

export const CentralizedLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    margin: 10px 0;
`;
export const description = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #ffffff;
`;
export const Header = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 86px;
    line-height: 90px;
    margin-bottom: 40px;
    /* identical to box height, or 94% */
    text-align: center;
    letter-spacing: -0.05em;
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
export const Label = styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #ffffff;
`;

export const Button = styled.button`
    background: #170627;
    border: 1px solid #a5a5a5;
    box-sizing: border-box;
    border-radius: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 9px 65px;
    color: #e5e5e5;
    margin-top: 15px;

    cursor: pointer;
`;

export const IconButton = styled(Button)`
    display: flex;
    padding: 10px;
`;

export const InputSmall = styled(FormStyled.Input)`
    width: 108px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #e5e5e5;
    margin: 12px 0;
`;
export const AllowedFileType = styled.div`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: rgba(229, 229, 229, 0.6);
`;

export const Text = styled.p`
    margin: 50px auto;
    color: white;
    font-family: Poppins;
    font-style: normal;
`;
export const Span = styled.span`
    color: #fe02b9;
`;
export const Background = styled.div<{ image: string }>`
    position: relative;
    width: 337px;
    height: 256px;
    margin-top: 10px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #7e3bdc;
    box-sizing: border-box;
    border-radius: 4px;
`;
export const Cross = styled.div`
    cursor: pointer;
    position: absolute;
    left: 96%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -4%;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: #7e3bdc;
    border: 1px solid #ffffff;
    transform: rotate(45deg);
    z-index: 10;
    font-weight: 500;
    color: #ffffff;
`;
export const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #7e3bdc;
    box-sizing: border-box;
    border-radius: 4px;
    left: 0;
    right: 0;
    z-index: -1;
`;
export const CategoryList = styled.div`
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
`;

export const SearchIconTop = styled.div`
    width: 17px;
    height: 17px;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
`;
export const StyledIconBottom = styled.div`
    position: absolute;
    width: 6.79px;
    height: 0px;

    border: 2px solid #e5e5e5;
    transform: rotate(136.63deg);
`;

export const SearchBox = styled.div`
    position: relative;
    z-index: 5;
    background: #220a38;
    border: 1px solid #7e3bdc;
    box-sizing: border-box;
    border-radius: 5px;
`;

interface IIconBoxProps {
    color?: string;
    border?: string;
    mr?: string | number;
    ml?: string | number;
}

export const IconBox = styled.div<IIconBoxProps>`
    color: ${(props) => (props.color ? props.color : `white`)};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    min-width: 40px;
    background: #170627;
    border: 1px solid
        ${(props) => (props.border ? props.border : `rgba(255, 255, 255, 0.2)`)};
    border-radius: 5px;
    margin: 0 auto;
    margin-right: ${(props) => props.mr};
    margin-left: ${(props) => props.ml};
    cursor: pointer;
`;

export const FlexOption = styled(Option)`
    display: flex !important;
    flex-direction: row;
    align-items: center;
`