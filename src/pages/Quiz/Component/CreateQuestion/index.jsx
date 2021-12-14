import * as Styled from './style'

const CreateQuestion = () => {
    return (
        <>
            <Styled.Fieldset>
                <Styled.Label for="name">QUIZ QUESTION (1/1)</Styled.Label>
                <Styled.Input
                    // onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="i.e. What is our token name?"
                    // value={}
                />
            </Styled.Fieldset>
        </>
    )
}

export default CreateQuestion
