import styled from 'styled-components';
import logo from '../../assets/Gateway.svg';

export const Container = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #170627;
`;

const Logo = () => <img src={logo} alt='Gateway logo' />;

export const StyledLogo = styled(Logo)``;
