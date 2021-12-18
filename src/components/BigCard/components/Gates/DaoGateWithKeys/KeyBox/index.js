import { useState } from 'react'
import PfpBox from '../PfpBox'
import * as Styled from './style'

const KeyBox = (props) => {
    const data = {
        key: 'Key 1',
        KeyInfo:
            'Identify a UX problem in the staking process and, and present your thoughts on how would you fix it. Hand-drawn sketches or low fidelity designs are acceptable, we just want to evaluate your rationale on the solution.',
        deliverables: [
            'Current and New User flow on an organogram.',
            'Low fidelity designs, make sure to bring and much options as you can, so we can have a production discussion.',
            'Designs can be presented directly on Figma, Sketch or Adobe XD.',
        ],
        timeline:
            'The project should be delivered 2 days after the beginning of the KEY.',
        resources: 'All the files necessery to start the project can be found',
    }

    const [detailsBox, setDetailsBox] = useState(false)
    const detailsBoxHandler = () => {
        setDetailsBox((prev) => !prev)
    }
    return (
        <Styled.ThirdDiv>
            <Styled.Box color={detailsBox} bgColor={detailsBox}>
                <Styled.BoxTitle>{data.key}</Styled.BoxTitle>
                <Styled.BoxSubtitle>{data.KeyInfo}</Styled.BoxSubtitle>
                <br />
                {detailsBox && (
                    <div>
                        <Styled.BoxTitle>DELIVERABLES</Styled.BoxTitle>
                        <Styled.BoxSubtitle>
                            {data.deliverables.map((item) => (
                                <div>• {item}</div>
                            ))}
                        </Styled.BoxSubtitle>
                        <br />
                        <Styled.BoxTitle>TIMELINE</Styled.BoxTitle>
                        <Styled.BoxSubtitle>{data.timeline}</Styled.BoxSubtitle>
                        <br />
                        <Styled.BoxTitle>RESOURCES</Styled.BoxTitle>
                        <Styled.BoxSubtitle>
                            {data.resources}{' '}
                            <span
                                style={{
                                    color: '#FF00B8',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                }}
                            >
                                here
                            </span>
                        </Styled.BoxSubtitle>
                    </div>
                )}

                <Styled.BottonBox>
                    <Styled.StartButton>
                        <Styled.ButtonText>Finish Task</Styled.ButtonText>
                    </Styled.StartButton>
                    <Styled.StartButtonTwo>
                        <Styled.ButtonText onClick={detailsBoxHandler}>
                            {detailsBox ? 'Hide' : 'Details'}
                        </Styled.ButtonText>
                    </Styled.StartButtonTwo>
                    {/* <PfpBox text="10 people doing on it." /> */}
                </Styled.BottonBox>
            </Styled.Box>
        </Styled.ThirdDiv>
    )
}

export default KeyBox
