import React from 'react'
import { FormStyled } from '../../../../../../components/Form'

const AddHoldToken = (props) => {
    return (
        <FormStyled.FormBox>
            <FormStyled.H1>Add Hold A Token</FormStyled.H1>
            <FormStyled.Fieldset>
                <FormStyled.Label>Token Address</FormStyled.Label>
                <FormStyled.Input title="Token" placeholder="Token Address" />
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label>Amount Required</FormStyled.Label>
                <FormStyled.Input placeholder="Minimum amount to hold" />
            </FormStyled.Fieldset>
            <FormStyled.Button>Next</FormStyled.Button>
        </FormStyled.FormBox>
    )
}

export default AddHoldToken
