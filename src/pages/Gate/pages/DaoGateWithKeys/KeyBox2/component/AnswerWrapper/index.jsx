import * as Styled from './style'
import { useState } from 'react'

const AnswerWrapper = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    return (
        <Styled.Wrapper>
            <Styled.QuestionNOText>Question 1 </Styled.QuestionNOText>
            <Styled.QuestionText>What is our token name?</Styled.QuestionText>
            <Styled.Container>
                <Styled.Answers
                    onClick={() => setSelectedAnswer('A')}
                    active={selectedAnswer === 'A'}
                >
                    <Styled.Option active={selectedAnswer === 'A'}>
                        A
                    </Styled.Option>
                    <Styled.OptionAnswer active={selectedAnswer === 'A'}>
                        $GTW
                    </Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers
                    onClick={() => setSelectedAnswer('B')}
                    active={selectedAnswer === 'B'}
                >
                    <Styled.Option active={selectedAnswer === 'B'}>
                        B
                    </Styled.Option>
                    <Styled.OptionAnswer active={selectedAnswer === 'B'}>
                        $GTW
                    </Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers
                    onClick={() => setSelectedAnswer('C')}
                    active={selectedAnswer === 'C'}
                >
                    <Styled.Option active={selectedAnswer === 'C'}>
                        C
                    </Styled.Option>
                    <Styled.OptionAnswer active={selectedAnswer === 'C'}>
                        $GTW
                    </Styled.OptionAnswer>
                </Styled.Answers>
                <Styled.Answers
                    onClick={() => setSelectedAnswer('D')}
                    active={selectedAnswer === 'D'}
                >
                    <Styled.Option active={selectedAnswer === 'D'}>
                        D
                    </Styled.Option>
                    <Styled.OptionAnswer active={selectedAnswer === 'D'}>
                        $GTW
                    </Styled.OptionAnswer>
                </Styled.Answers>
            </Styled.Container>
        </Styled.Wrapper>
    )
}

export default AnswerWrapper
