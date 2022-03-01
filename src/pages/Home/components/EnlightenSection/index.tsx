import React from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';
import EMS_IMG from '../../../../assets/Group_26.png';

export default function EnlightenSection() {
    return (
        <Styled.EMSBox>
            <Styled.EMSImageContainer>
                <img src={`${EMS_IMG}`} alt='' />
            </Styled.EMSImageContainer>
            <Styled.EMSContentContainer>
                <Styled.EMSMediumText>
                    Don't know what a DAO is?
                </Styled.EMSMediumText>
                <Styled.EMSButton to='/what-are-DAOs'>
                    <MainStyled.CTAButtonText>
                        ENLIGHTEN ME
                    </MainStyled.CTAButtonText>
                </Styled.EMSButton>
            </Styled.EMSContentContainer>
        </Styled.EMSBox>
    );
}
