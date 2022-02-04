import BackButton from '../../../../../../../../../components/BackButton'
import * as Styled from './style'
import Page from '../../../../../../../../../components/Page'
import { useState } from 'react'
import QuestionAndAnswer from './QuestionAndAnswer'

const NewQuiz = (props) => {

    const [selectedAnswer, setSelectedAnswer] = useState([])
    return (
        <Styled.Container>
            <BackButton>Go back</BackButton>
            <Styled.Box>
                <Styled.DaosContainer>
                    <Styled.ImageConstainer />
                    <Styled.DaoTextBox>BanklessDAO</Styled.DaoTextBox>
                </Styled.DaosContainer>
                <Styled.HeadingContainer>
                    Introduction Quiz
                </Styled.HeadingContainer>
                <QuestionAndAnswer />
            </Styled.Box>
        </Styled.Container>
    )
}

export default NewQuiz
