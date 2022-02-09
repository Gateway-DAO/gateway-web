import { useState } from 'react'

// Styling
import * as Styled from './style'
import { FormStyled } from '../../../../components/Form'

// Components
import Loader from '../../../../components/Loader'

const Percentage = ({ percentage, setPercentage, loading }) => {
    return (
        <>
            <FormStyled.Fieldset>
                <FormStyled.Label>
                    Percentage necessary to pass the Quiz?
                </FormStyled.Label>
                <Styled.Array>
                    <Styled.Block
                        onClick={() => setPercentage(0)}
                        checked={percentage === 0}
                    >
                        0%
                    </Styled.Block>
                    <Styled.Block
                        onClick={() => setPercentage(0.25)}
                        checked={percentage === 0.25}
                    >
                        25%
                    </Styled.Block>
                    <Styled.Block
                        onClick={() => setPercentage(0.50)}
                        checked={percentage === 0.50}
                    >
                        50%
                    </Styled.Block>
                    <Styled.Block
                        onClick={() => setPercentage(0.75)}
                        checked={percentage === 0.75}
                    >
                        75%
                    </Styled.Block>
                    <Styled.Block
                        onClick={() => setPercentage(1.00)}
                        checked={percentage === 1.00}
                    >
                        100%
                    </Styled.Block>
                </Styled.Array>
            </FormStyled.Fieldset>

            <FormStyled.Button type="submit">
                {loading && <Loader color="white" />}
                Submit
            </FormStyled.Button>
        </>
    )
}

export default Percentage
