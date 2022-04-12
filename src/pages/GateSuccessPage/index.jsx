import * as Styled from './style';
import * as ThemeStyled from '../../theme/style';

// Hooks
import { useLocation, useOutletContext, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const GateSuccessPage = (props) => {
    const { state } = useLocation();
    const { gateData } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        const clear = setTimeout(() => {
            window.location.href = `/profile`;
        }, 3000);

        return () => clearTimeout(clear);
    }, []);

    return (
        <Styled.Container>
            <Styled.BoxContainer>
                <ThemeStyled.MainText>Congratulations!</ThemeStyled.MainText>
                <Styled.Text>
                    You have earned the{' '}
                    <Styled.PurpleText>
                        {state.usr?.gateData.badge.name}
                    </Styled.PurpleText>{' '}
                    Badge from {state.usr.gateData.dao.name}
                </Styled.Text>
                <Styled.NFT
                    src={`https://gateway.pinata.cloud/ipfs/${state.usr?.gateData.badge.ipfsURL}`}
                />
                <Styled.SmallTextContainer>
                    Redirecting...
                </Styled.SmallTextContainer>
            </Styled.BoxContainer>
        </Styled.Container>
    );
};

export default GateSuccessPage;
