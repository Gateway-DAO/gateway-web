import React from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';
import Investor1 from '../../../../assets/investors/investor1.png';
import Investor2 from '../../../../assets/investors/investor2.png';
import Investor3 from '../../../../assets/investors/investor3.png';
import Avatar1 from '../../../../assets/investors/user1.png';
import Avatar2 from '../../../../assets/investors/user2.png';

export default function InvestorSection() {
    return (
        <MainStyled.SectionContainer>
            <MainStyled.SectionTitle data-aos='fade-right'>
                INVESTORS
            </MainStyled.SectionTitle>
            <Styled.Content>
                <Styled.Col data-aos='fade-up' data-aos-delay='100'>
                    <Styled.InvestorCard
                        background={Investor1}
                    ></Styled.InvestorCard>
                    <Styled.InvestorInfo>
                        <Styled.InvestorLogo
                            src={Avatar1}
                        ></Styled.InvestorLogo>
                        <Styled.InvestorData>
                            <Styled.CompanyName>
                                Reciprocol Ventures
                            </Styled.CompanyName>
                            <Styled.InvestorName>
                                Craig Burel
                            </Styled.InvestorName>
                            <Styled.UserId>@craig_burel</Styled.UserId>
                        </Styled.InvestorData>
                    </Styled.InvestorInfo>
                </Styled.Col>
                <Styled.Col data-aos='fade-up' data-aos-delay='200'>
                    <Styled.InvestorCard
                        background={Investor2}
                    ></Styled.InvestorCard>
                    <Styled.InvestorInfo>
                        <Styled.InvestorLogo
                            src={Avatar1}
                        ></Styled.InvestorLogo>
                        <Styled.InvestorData>
                            <Styled.CompanyName>
                                Reciprocol Ventures
                            </Styled.CompanyName>
                            <Styled.InvestorName>
                                Michael Steinberg
                            </Styled.InvestorName>
                            <Styled.UserId>@mikesteinberg</Styled.UserId>
                        </Styled.InvestorData>
                    </Styled.InvestorInfo>
                </Styled.Col>
                <Styled.Col data-aos='fade-up' data-aos-delay='300'>
                    <Styled.InvestorCard
                        background={Investor3}
                    ></Styled.InvestorCard>
                    <Styled.InvestorInfo>
                        <Styled.InvestorLogo
                            src={Avatar2}
                        ></Styled.InvestorLogo>
                        <Styled.InvestorData>
                            <Styled.CompanyName>Hannah Grey</Styled.CompanyName>
                            <Styled.InvestorName>
                                Kate Beardsley
                            </Styled.InvestorName>
                            <Styled.UserId>@Kate_beardsley</Styled.UserId>
                        </Styled.InvestorData>
                    </Styled.InvestorInfo>
                </Styled.Col>
                <Styled.Col data-aos='fade-up' data-aos-delay='400'>
                    <Styled.InvestorCard>
                        <Styled.MoreText>+15 MORE</Styled.MoreText>
                    </Styled.InvestorCard>
                </Styled.Col>
            </Styled.Content>
        </MainStyled.SectionContainer>
    );
}
