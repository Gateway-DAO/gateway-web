import React from 'react';
import * as Styled from './style';
import SubmissionModal from './components/Input';
// import Success from './components/Success';
const ManualTask = (props) => {
    const data = props.data;

    return (
        <Styled.Container>
            {props.start ? (
                <SubmissionModal
                    setStart={props.setStart}
                    setOpened={props.setOpened}
                    keyValidation={props.keyValidation}
                    data={data}
                />
            ) : props.opened ? (
                data.map((val) => (
                    <Styled.Wrapper>
                        <Styled.Title>{val.title}</Styled.Title>
                        <Styled.Description>
                            {val.description}
                        </Styled.Description>
                    </Styled.Wrapper>
                ))
            ) : null}
        </Styled.Container>
    );
};

export default ManualTask;
