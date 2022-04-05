import * as Styled from './style';
import * as ThemeStyled from '../../../../theme/style';
import * as CTAStyled from '../../../../pages/Home/components/CTASection/style';


// Hooks
import { useOutletContext, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Components

// Utils
import space from '../../../../utils/canvas';
import Loader from '../../../../components/Loader';

const GateSuccessPage = (props) => {
  const { gateData, loaded } = useOutletContext();
  const navigate = useNavigate();

  useEffect(
    () => space(window.innerHeight, window.innerWidth),
    [window.innerHeight, window.innerWidth]
  );

  return (
    <Styled.Container>
      <Styled.MainBox>
        <Styled.SpaceBox id='space-canvas' />
        <CTAStyled.Sparkles />
        <CTAStyled.Dots />
        <CTAStyled.Stars />
        <CTAStyled.LbOne />
        <CTAStyled.LbTwo />
        <CTAStyled.LbThree />
        <CTAStyled.RbOne />
        <CTAStyled.RbTwo />
      </Styled.MainBox>
      <ThemeStyled.MainText>
        Congratulations!
      </ThemeStyled.MainText>
      <Styled.Text>
        You have earned the{' '}
        <Styled.PurpleText>
          {gateData.badge.name}
        </Styled.PurpleText>
        {' '}Badge from{' '}
        <Styled.DaoIcon
          src={gateData.dao.logoURL}
        />
        {' '}{gateData.dao.name}
      </Styled.Text>
      <Styled.BoxContainer>
        <Styled.NFT
          src={`https://gateway.pinata.cloud/ipfs/${gateData.badge.ipfsURL}`}
        />
        <Styled.BadgeBottomText>
          <Styled.BadgeText>
            Badge
          </Styled.BadgeText>
          <Styled.BadgeName>
            {gateData.badge.name}
          </Styled.BadgeName>
        </Styled.BadgeBottomText>
      </Styled.BoxContainer>
      <Styled.Buttons>
        <Styled.CheckProfileBtn
          href="/profile"
        >
          check your profile
        </Styled.CheckProfileBtn>
        <Styled.CloseBtn>
          close
        </Styled.CloseBtn>
      </Styled.Buttons>
    </Styled.Container >
  );
};

export default GateSuccessPage;
