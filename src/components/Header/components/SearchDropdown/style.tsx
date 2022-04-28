import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    right: 0;
    top: 50px;
    background: #FFFFFF;
    width: 100%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0);
    border-radius: 20px;
    z-index: 99;
`;

export const DropdownList = styled.div`
    padding: 14px 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const DropdownItem = styled.div`
    display: inline-flex;
    align-items: center;
    margin: 10px 0;
    width: 100%;

    cursor: pointer;
`;

export const Name = styled.span`
    font-family: 'Be Vietnam';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #170627;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Category = styled.span`
    font-family: 'Be Vietnam';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #A5A5A5;

    min-width: fit-content;
`;

export const Username = styled.span`
    font-family: 'Be Vietnam';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #A5A5A5;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Img = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
    object-position: center;

    border-radius: 50%;
`;

export const DropdownFooter = styled.div`
    padding: 10px;

    border-top: solid 1px #e5e5e5;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ShowAll = styled.span`
    font-family: 'Be Vietnam';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;

    color: #170627;
    cursor: pointer;
`;

export const LoadingBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex: 1;
    width: 100%;
`;

export const Text = styled.p`
    font-family: 'Be Vietnam';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: center;

    color: #170627;
`;
