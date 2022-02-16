import * as Styled from './style';

const FAQCard = (props) => {
    return (
        <Styled.Container>
            {props.faq.map((step, idx) => {
                return (
                    <Styled.FAQStep>
                        <Styled.BoldText>Q: {step.question}</Styled.BoldText>
                        <Styled.Text>A: {step.answer}</Styled.Text>
                    </Styled.FAQStep>
                );
            })}
        </Styled.Container>
    );
};

export default FAQCard;
