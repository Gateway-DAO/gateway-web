import React from 'react';

// Styling
import * as Styled from './style';

const Question = ({
    idx,
    question,
    nrQuestions,
    selectedAnswer,
    setSelectedAnswer,
}) => {
    return (
        <div>
            <Styled.QuestionNOText>
                Question {idx + 1}/{nrQuestions}
            </Styled.QuestionNOText>
            <Styled.QuestionText>{question.question}</Styled.QuestionText>
            <Styled.AnswerContainer>
                {question.options.map((option, opt_idx) => (
                    <Styled.Answer
                        onClick={() => setSelectedAnswer(opt_idx)}
                        active={selectedAnswer === opt_idx}
                    >
                        <Styled.Option active={selectedAnswer === opt_idx}>
                            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[opt_idx]}
                        </Styled.Option>
                        <Styled.OptionAnswer
                            active={selectedAnswer === opt_idx}
                        >
                            {option.answer}
                        </Styled.OptionAnswer>
                    </Styled.Answer>
                ))}
            </Styled.AnswerContainer>
        </div>
    );
};

export default Question;
