import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    // height: 310px;
    border: 1px solid #a5a5a5;
    border-radius: 20px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-bottom:0;

    & * {
        width: 100%;
    }

    cursor: pointer;
`;
export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`;
export const Left = styled.div`
    display: flex;
    align-items: center;
`;
export const Logo = styled.div`
    width: 36px;
    height: 36px;
    background: url(${(props) => props.image});
    margin-right: 15px;
`;
export const Name = styled.div`
    // width: 243px;
    // height: 30px;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 34px;

    color: #170627;
`;
export const Right = styled.div`
    width: 90px;
    height: 40px;

    background: ${(props) => (props.state ? `#27D5A2` : `#8164F4`)};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    color: #ffffff;
`;

export const SnapshotTitle = styled.div`
    // width: 433px;
    // height: 30px;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    /* or 142% */

    color: #170627;

    margin-bottom: 10px;
`;
export const SnapshotDescription = styled.div`
    width: 100%;

    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 34px;
    /* or 212% */

    color: #170627;
`;
