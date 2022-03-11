import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

// Styling
import { FormStyled } from '../../../../components/Form';

const Home = (props) => {
    const { formik } = useOutletContext();

    const [title, setTitle] = useState(formik.values.quiz.title || '');
    const [description, setDescription] = useState(
        formik.values.quiz.description || ''
    );

    const saveContent = () => {
        formik.setFieldValue('quiz.title', title);
        formik.setFieldValue('quiz.description', description);
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
                    onChange={(e) => setTitle(e.target.value)}
                    type='text'
                    id='title'
                    name='quiz.title'
                    placeholder='This will be the title of your Gate'
                    value={title}
                    required
                />
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label htmlFor='description'>
                    QUIZ Description*
                </FormStyled.Label>
                <FormStyled.Textarea
                    height='100px'
                    id='description'
                    onChange={(e) => setDescription(e.target.value)}
                    name='quiz.description'
                    placeholder='This will be the description of your Gate. We reccommend maximum of 2 lines.'
                    value={description}
                    required
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
