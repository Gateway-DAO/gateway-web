import React, {useState} from 'react';
import * as Styled from './style';

const Snapshot = (props)=>{
    return(
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.Left>
                        <Styled.Logo></Styled.Logo>
                        <Styled.Name>BanklessDAO by find4dao.eth</Styled.Name> 
                    </Styled.Left>
                    <Styled.Right>Active</Styled.Right>
                </Styled.Header>
                <Styled.SnapshotTitle>First Timer Joiner</Styled.SnapshotTitle>
                <Styled.SnapshotDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nulla, vestibulum eu ultrices eget, iaculis in mauris. Suspendisse fringilla turpis ultrices viverra fermentum. In vehicula neque sed pulvinar suscipit. Donec in enim in nulla scelerisque fermentum. Phasellus bibendum, nunc at congue pharetra.
                </Styled.SnapshotDescription>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

const SnapshotMemo = React.memo(Snapshot)
export default SnapshotMemo