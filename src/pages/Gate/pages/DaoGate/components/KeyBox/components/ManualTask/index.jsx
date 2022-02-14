import React, { useState } from 'react';
import * as Styled from './style';

const ManualTask = (props)=>{
    const [metualTaskData, setMetualTaskEntry] = useState([]);
    const data = props.data;
    return (
        <Styled.Container>
            {data.map(val=>{
                <Styled.Wrapper>
                    <Styled.Title>{val.title}</Styled.Title>
                    <Styled.Description>{val.descttiption}</Styled.Description>
                </Styled.Wrapper>
            })}
        </Styled.Container>
    )
}

export default ManualTask;