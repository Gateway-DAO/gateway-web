// Styling
import { useOutletContext } from 'react-router-dom';
import { FormStyled } from '../../../../components/Form';

// Components
import Loader from '../../../../components/Loader';

const Percentage = () => {
    const { formik } = useOutletContext();

    return (
        <>
            <FormStyled.Fieldset>
                <FormStyled.Label>
                    Percentage necessary to pass the Quiz?
                </FormStyled.Label>
                <FormStyled.GridBox
                    cols={5}
                    onChange={(e) =>
                        formik.setFieldValue(
                            'quiz.percentage',
                            parseFloat(e.target.value)
                        )
                    }
                >
                    <FormStyled.Radio
                        id='percentage-1'
                        name='quiz.percentage'
                        value={0}
                        label='0%'
                        checked={formik.values.quiz.percentage === 0}
                    />
                    <FormStyled.Radio
                        id='percentage-2'
                        name='quiz.percentage'
                        value={0.25}
                        label='25%'
                        checked={formik.values.quiz.percentage === 0.25}
                    />
                    <FormStyled.Radio
                        id='percentage-3'
                        name='quiz.percentage'
                        value={0.5}
                        label='50%'
                        checked={formik.values.quiz.percentage === 0.5}
                    />
                    <FormStyled.Radio
                        id='percentage-4'
                        name='quiz.percentage'
                        value={0.75}
                        label='75%'
                        checked={formik.values.quiz.percentage === 0.75}
                    />
                    <FormStyled.Radio
                        id='percentage-5'
                        name='quiz.percentage'
                        value={1}
                        label='100%'
                        checked={formik.values.quiz.percentage === 1}
                    />
                </FormStyled.GridBox>
            </FormStyled.Fieldset>

            <FormStyled.Button type='submit'>
                {formik.isSubmitting && <Loader color='white' />}
                Submit
            </FormStyled.Button>
        </>
    );
};

export default Percentage;
