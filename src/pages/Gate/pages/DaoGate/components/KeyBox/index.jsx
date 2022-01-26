import { useState } from 'react'
import * as Styled from './style'

const KeyBox = (props) => {
    const [detailsBox, setDetailsBox] = useState(false)
    const data = props.data

    const detailsBoxHandler = () => {
        setDetailsBox((prev) => !prev)
    }

    return (
        <Styled.ThirdDiv>
            <Styled.Box details={detailsBox}>
                <Styled.TextContainer>
                    <Styled.BoxTitle>
                        {data.information[0].title}
                    </Styled.BoxTitle>
                    <Styled.BoxSubtitle details={detailsBox}>
                        {data.information[0].description}
                    </Styled.BoxSubtitle>
                </Styled.TextContainer>
                    {detailsBox &&
                        data.information.slice(1).map((key) => (
                            <Styled.TextContainer>
                                <Styled.BoxTitle>{key.title}</Styled.BoxTitle>
                                <Styled.BoxSubtitle details={detailsBox}>
                                    {key.description}
                                </Styled.BoxSubtitle>
                            </Styled.TextContainer>
                        ))}

                <Styled.BottonBox>
                    <Styled.StartButton details={detailsBox}>
                        <Styled.ButtonText>Start</Styled.ButtonText>
                    </Styled.StartButton>
                    {data.information.length > 1 && (
                        <Styled.StartButtonTwo>
                            <Styled.ButtonText onClick={detailsBoxHandler}>
                                {detailsBox ? 'Hide' : 'Details'}
                            </Styled.ButtonText>
                        </Styled.StartButtonTwo>
                    )}
                </Styled.BottonBox>
            </Styled.Box>
        </Styled.ThirdDiv>
    )
}

export default KeyBox
