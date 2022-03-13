import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import DDIcon from '../../../../theme/icons/DDIcon';

export const DropdownContainer = styled.div`
    position: relative;
    margin: 0 10px;
`;

export const DropdownButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &:hover {
        cursor: pointer;
    }
`;

export const Title = styled.p`
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;

    color: #a29ba9;
`;

export const Icon = styled(DDIcon)`
    position: relative;
    margin-left: 10px;
`;

export const DropdownContent = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    z-index: 99;

    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 10px;

    display: ${(props) => (props.visible ? `block` : `none`)};

    padding: 15px 10px;
`;

export const DropdownItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 9px 0;
`;

export const FilterAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const CancelButton = styled.button`
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 200px;

    background: #ffffff;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #a5a5a5;

    width: 95px;
    padding: 8px 13px;

    &:hover {
        cursor: pointer;
    }
`;

export const SearchButton = styled.button`
    background: linear-gradient(
        88.53deg,
        #ee787b 2.77%,
        #e153f2 51.87%,
        #495be0 98.96%
    );
    border-radius: 200px;
    border-width: 0px;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #ffffff;

    width: 110px;
    padding: 8px 13px;
    margin-left: 10px;

    &:hover {
        cursor: pointer;
    }
`;

export const FilterBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 12px;
`;

export const FilterItem = styled.input`
    flex: 1;
    border: none;
    outline: none;
    padding: 8px 0;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;

    color: #170627;
`;

export const WrappedFiSearch = styled(FiSearch)`
    font-size: 20px;
    padding-right: 12px;
    color: #e5e5e5;
`;
