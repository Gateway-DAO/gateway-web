import React, { useRef, useState } from 'react'
import * as Styled from './styles'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'

import Header from '../../components/Header'
import SearchedItem from './Components/SearhedItem'
import { FormStyled } from '../../components/Form'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'

const AddGateForm = () => {
    return (
        <Styled.Page>
            <Header />
        </Styled.Page>
    )
}
