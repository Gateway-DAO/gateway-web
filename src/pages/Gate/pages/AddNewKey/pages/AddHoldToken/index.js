import React from 'react'
import * as Styled from './style'
import BackButton from '../../../../../../components/BackButton'
import TokenForm from '../../components/SelectTask/TaskComponents/HoldToken/TokenForm'
import { FormStyled } from '../../../../../../components/Form'

const AddHoldToken = (props) => {
    return (
        <Styled.Container>
            <BackButton>Go Back</BackButton>
            <Styled.MarginWrapper>
                <FormStyled.Header>Add Hold A Token</FormStyled.Header>
                <Styled.MarginWrapperSecondary>
                    <TokenForm />
                </Styled.MarginWrapperSecondary>
            </Styled.MarginWrapper>
        </Styled.Container>
    )
}

export default AddHoldToken
