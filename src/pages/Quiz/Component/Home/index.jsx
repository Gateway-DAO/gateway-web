import React, { useState } from 'react';

// Styling
import { FormStyled } from '../../../../components/Form';

const Home = (props) => {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);

    const saveContent = () => {
        props.setTitle(title);
        props.setDescription(description);
        props.setActiveModal('CREATE_QUIZ');
    };
    return (
        <>
            <FormStyled.Fieldset>
                <FormStyled.Label htmlFor='name'>QUIZ TITLE</FormStyled.Label>
                <FormStyled.Input
                    onChange={(e) => setTitle(e.target.value)}
                    type='text'
                    id='title'
                    name='title'
                    placeholder='This will be the title of your Gate '
                    value={title}
                    required
                />
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label htmlFor='description'>
                    QUIZ Description
                </FormStyled.Label>
                <FormStyled.Textarea
                    height='100px'
                    id='description'
                    onChange={(e) => setDescription(e.target.value)}
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
