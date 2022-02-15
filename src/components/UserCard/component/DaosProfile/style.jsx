import styled from 'styled-components';

export const DaoPfpContainer = styled.div`
    width: 41px;
    height: 41px;
    background: url(${(props) => props.src || ''});
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    margin-right: 4px;
`;
