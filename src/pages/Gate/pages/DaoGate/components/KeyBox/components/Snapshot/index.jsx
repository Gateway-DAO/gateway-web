import React, { useState } from 'react'
import * as Styled from './style'
const axios = require('axios')

const Snapshot = (props) => {
    console.log(props.data)
    axios({
        url: 'https://1jzxrj179.lp.gql.zone/graphql',
        method: 'post',
        data: {
            query: `
          query SingleProposal {
            proposal(id:"0xbfeb7f3c4a3f1d4979b59129f9a78ee217183b0656a480612d261233fb3f8c62") {
              id
              title
              body
              choices
              start
              end
              snapshot
              state
              author
              created
              plugins
              network
              strategies {
                name
                params
              }
              space {
                id
                name
              }
            }
          }
            `,
        },
    }).then((result) => {
        console.log(result.data)
    })

    return (
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus dui nulla, vestibulum eu ultrices eget, iaculis in
                    mauris. Suspendisse fringilla turpis ultrices viverra
                    fermentum. In vehicula neque sed pulvinar suscipit. Donec in
                    enim in nulla scelerisque fermentum. Phasellus bibendum,
                    nunc at congue pharetra.
                </Styled.SnapshotDescription>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

const SnapshotMemo = React.memo(Snapshot)
export default SnapshotMemo
