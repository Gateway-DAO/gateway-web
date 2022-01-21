import React, { useRef, useState } from 'react'
import * as Styled from './styles'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'

import Header from '../../components/Header'
import SearchedItem from './Components/SearhedItem'
import { FormStyled } from '../../components/Form'
import * as yup from 'yup'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'

const validationSchema = yup.object({
    gateTitle: yup
        .string()
        .min(3, 'Too Short')
        .max(12, 'Too Long')
        .required('Gate Title is Required!'),
    gateDescription: yup
        .string()
        .min(75, 'Too short Description')
        .required('Gate Description is Required.'),
    noOfKeys: yup
        .number()
        .min(1, 'keys required for Gate')
        .max(10, 'please mention less than 10')
        .required('keys required for Gate!'),
    category: yup
        .array()
        .of(
            yup
                .string('String is Required!')
                .min(3, 'Too Short')
                .max(12, 'Too Long')
                .required('Required')
        )
        .min(1, 'Atleast One Category is Required!')
        .required('Required'),
    
})

const AddGateForm = () => {
    return (
        <Styled.Page>
            <Header />
        </Styled.Page>
    )
}
