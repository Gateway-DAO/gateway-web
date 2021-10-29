import * as Styled from "./style";

const HTJCard = props => {
    return (
        <Styled.Container>
            {props.steps.map((step, idx) => {
                return (
                    <Styled.HTJStep>
                        <Styled.BoldText>Step {idx + 1}</Styled.BoldText>
                        <Styled.Text>{step.description}</Styled.Text>
                    </Styled.HTJStep>
                )
            })}
        </Styled.Container>
    )
}

export default HTJCard;