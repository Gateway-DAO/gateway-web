import React from 'react'
import * as Styled from './style'
import TokenForm from '../../components/SelectTask/TaskComponents/HoldToken/TokenForm'
import { FormStyled } from '../../../../../../components/Form'

const AddHoldToken = (props) => {
    return (
        <Styled.Container>
            <Styled.MarginWrapper>
                <FormStyled.H1>Add Hold A Token</FormStyled.H1>
                <Styled.MarginWrapperSecondary>
                    <TokenForm />
                </Styled.MarginWrapperSecondary>
            </Styled.MarginWrapper>
        </Styled.Container>
    )
}

export default AddHoldToken
