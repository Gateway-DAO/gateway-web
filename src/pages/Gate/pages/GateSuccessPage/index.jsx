import * as Styled from './style';
import * as ThemeStyled from '../../../../theme/style';

// Hooks
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';

// Components

// Utils
import space from '../../../../utils/canvas';
import Loader from '../../../../components/Loader';

const GateSuccessPage = (props) => {
    const { gateData, loaded } = useOutletContext();

    useEffect(() => {
        if (gateData === undefined) {
            window.location.href = `/gate/${gateData.id}/`;
        }

        const clear = setTimeout(() => {
            window.location.href = `/gate/${gateData.id}/`;
        }, 3000);

        return () => clearTimeout(clear);
    }, []);

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

    return (
        <Styled.Container>
            <ThemeStyled.SpaceBox id='space-canvas' />
            <ThemeStyled.MainText>
                        Congratulations!
                    </ThemeStyled.MainText>
                    <Styled.Text>
                        You have earned the{' '}
                        <Styled.PurpleText>
                            {gateData.badge.name}
                        </Styled.PurpleText>{' '}
                        Badge from {gateData.dao.name}
                    </Styled.Text>
                    <Styled.NFT
                        src={`https://gateway.pinata.cloud/ipfs/${gateData.badge.ipfsURL}`}
                    />
                    <Styled.SmallTextContainer>
                        Redirecting...
                    </Styled.SmallTextContainer>
        </Styled.Container>
    );
};

export default GateSuccessPage;
