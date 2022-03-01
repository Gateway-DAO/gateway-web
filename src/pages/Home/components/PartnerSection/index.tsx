import React from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';
import Bankless from '../../../../assets/partners/bankless.png';
import Olympus from '../../../../assets/partners/olympus.png';
import Yearn from '../../../../assets/partners/yearn-finance.png';
import JoinBeta from '../../../../assets/partners/Join BETA.png';

export default function PartnerSection() {
    return (
        <MainStyled.SectionContainer>
            <MainStyled.SectionTitle>ALPHA PARTNERS</MainStyled.SectionTitle>
            <Styled.Content>
                <Styled.Col>
                    <Styled.PartnerCard background='linear-gradient(32.46deg, #000000 71.39%, #4C4C4C 127.76%)'>
                        <Styled.PartnerLogo src={Bankless}></Styled.PartnerLogo>
                        <Styled.PartnerName>Bankless DAO</Styled.PartnerName>
                    </Styled.PartnerCard>
                </Styled.Col>
                <Styled.Col>
                    <Styled.PartnerCard background='linear-gradient(32.46deg, #5D6776 71.39%, #9AA7B9 127.76%)'>
                        <Styled.PartnerLogo src={Olympus}></Styled.PartnerLogo>
                        <Styled.PartnerName>Olympus DAO</Styled.PartnerName>
                    </Styled.PartnerCard>
                </Styled.Col>
                <Styled.Col>
                    <Styled.PartnerCard background='linear-gradient(32.46deg, #0E1E3D 71.39%, #243B68 127.76%)'>
                        <Styled.PartnerLogo src={Yearn}></Styled.PartnerLogo>
                        <Styled.PartnerName>Yearn Finance</Styled.PartnerName>
                    </Styled.PartnerCard>
                </Styled.Col>
                <Styled.Col>
                    <Styled.PartnerCard>
                        <Styled.PartnerLogo src={JoinBeta}></Styled.PartnerLogo>
                    </Styled.PartnerCard>
                </Styled.Col>
            </Styled.Content>
        </MainStyled.SectionContainer>
    );
}
