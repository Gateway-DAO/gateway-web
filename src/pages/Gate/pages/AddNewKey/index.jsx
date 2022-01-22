import React, { useState, useEffect } from 'react'
import BackButton from '../../../../components/BackButton'
import { Outlet, useOutletContext } from 'react-router-dom'
import * as Styled from './style'

const AddNewKey = (props) => {
    const { gateData } = useOutletContext()

    return (
        <Styled.Container>
            <BackButton>Go back</BackButton>
            <Outlet context={{
                gateData
            }} />
        </Styled.Container>
    )
}

export default AddNewKey
