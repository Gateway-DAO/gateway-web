import * as Styled from './style'
import AnswerWrapper from '../AnswerWrapper'

const QuestionAndAns = (props) => {
    return (
        <Styled.Container>
            <Styled.QuestionNOText>Question 1 </Styled.QuestionNOText>
            <Styled.QuestionText>What is our token name?</Styled.QuestionText>
            <AnswerWrapper />
        </Styled.Container>
    )
}

export default QuestionAndAns
