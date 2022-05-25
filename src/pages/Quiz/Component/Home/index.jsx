import React, { useState } from 'react';

import { useFormContext } from 'react-hook-form';

// Styling
import { FormStyled } from '../../../../components/Form';

const Home = (props) => {
    const { register, watch, formState: { errors }, setValue } = useFormContext();

    const saveContent = () => {
        props.setActiveModal('CREATE_QUIZ');
        props.setShowMessage(false);
    };

    return (
        <>
            <FormStyled.Fieldset>
                <FormStyled.Label htmlFor='quiz.title'>
                    QUIZ TITLE*
                </FormStyled.Label>
                <FormStyled.Input
                    {...register('quiz.title')}
                    placeholder='This will be the title of your quiz'
                />
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label htmlFor='description'>
                    QUIZ Description*
                </FormStyled.Label>
                <FormStyled.Textarea
                    height='100px'
                    placeholder='This will be the description of your quiz. We reccommend a maximum of 2 lines.'
                    {...register('quiz.description')}
                ></FormStyled.Textarea>
            </FormStyled.Fieldset>

            <FormStyled.Button
                id='submit_msg'
                type='button'
                onClick={saveContent}
            >
                Next
            </FormStyled.Button>
        </>
    );
};

export default Home;
