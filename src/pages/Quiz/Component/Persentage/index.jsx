// Styling
import { FormStyled } from '../../../../components/Form';

// Components
import Loader from '../../../../components/Loader';

const Percentage = ({ percentage, setPercentage, loading }) => {
    return (
        <>
            <FormStyled.Fieldset>
                <FormStyled.Label>
                    Percentage necessary to pass the Quiz?
                </FormStyled.Label>
                <FormStyled.GridBox
                    cols={5}
                    onChange={(e) => setPercentage(e.target.value)}
                >
                    <FormStyled.Radio
                        id='percentage-1'
                        name='percentage'
                        value={0}
                        label='0%'
                        checked={percentage === 0}
                    />
                    <FormStyled.Radio
                        id='percentage-1'
                        name='percentage'
                        value={0.25}
                        label='25%'
                        checked={percentage === 0.25}
                    />
                    <FormStyled.Radio
                        id='percentage-1'
                        name='percentage'
                        value={0.5}
                        label='50%'
                        checked={percentage === 0.5}
                    />
                    <FormStyled.Radio
                        id='percentage-1'
                        name='percentage'
                        value={0.75}
                        label='75%'
                        checked={percentage === 0.75}
                    />
                    <FormStyled.Radio
                        id='percentage-1'
                        name='percentage'
                        value={1}
                        label='100%'
                        checked={percentage === 1}
                    />
                </FormStyled.GridBox>
            </FormStyled.Fieldset>

            <FormStyled.Button type='submit'>
                {loading && <Loader color='white' />}
                Submit
            </FormStyled.Button>
        </>
    );
};

export default Percentage;
