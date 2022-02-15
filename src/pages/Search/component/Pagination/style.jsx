import styled from 'styled-components';

export const StyledPaginateContainer = styled.div`
    .pageactive {
        background-image: linear-gradient(#170627, #170627),
            linear-gradient(90deg, #ff00b8 0%, #7e3bdc 50.52%, #0075ff 100%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        box-shadow: 0px 6px 15px rgba(255, 0, 184, 0.3);
        border: double 1px transparent !important;
    }

    .paginationBttns {
        width: 100%;
        height: 40px;
        list-style: none;
        display: flex;
        justify-content: center;
    }

    .paginationBttns a {
        margin: 10px;
        border: 1px solid rgba(229, 229, 229, 0.5);
        box-sizing: border-box;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        cursor: pointer;

        //transform: rotate(-180deg);
        font-family: Be Vietnam;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.05em;
        text-transform: capitalize;
    }

    .paginationActive a {
        background: rgba(229, 229, 229, 0.2);
        border: none;
    }

    .paginationDisabled a {
        border: 1px solid rgba(229, 229, 229, 0.5) !important;
        background-image: none;
        box-shadow: none;
    }
`;

export const PaginationContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
