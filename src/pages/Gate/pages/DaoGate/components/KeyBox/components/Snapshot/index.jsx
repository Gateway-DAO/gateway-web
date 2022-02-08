import React, { useState } from 'react'
import { useEffect } from 'react'
import { shortenAddress } from '../../../../../../../../utils/web3'
import * as Styled from './style'
import axios from 'axios'

const Snapshot = (props) => {
    const [result, setResult] = useState(null)
    console.log(props.data)
    const API_URL = 'https://hub.snapshot.org/graphql'

    let id =
        '0xbfeb7f3c4a3f1d4979b59129f9a78ee217183b0656a480612d261233fb3f8c62'
    let body = {
        query: `
                query SingleProposal {
                    proposal(id: "${id}") {
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
        variables: {},
    }
    let options = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    useEffect(() => {
        // Update the document title using the browser API
        axios.post(API_URL, body, options).then((response) => {
            setResult(response?.data.data.proposal)
        })
    }, [])

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.Left>
                        {console.log(result)}
                        <Styled.Logo></Styled.Logo>
                        <Styled.Name>{`${
                            result?.space.name
                        } by ${shortenAddress(
                            result?.author,
                            6,
                            6
                        )}`}</Styled.Name>
                    </Styled.Left>
                    <Styled.Right state={result?.state == 'active'}>
                        {result?.state}
                    </Styled.Right>
                </Styled.Header>
                <Styled.SnapshotTitle>{result?.title}</Styled.SnapshotTitle>
                <Styled.SnapshotDescription>
                    {result?.body}
                </Styled.SnapshotDescription>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

const SnapshotMemo = React.memo(Snapshot)
export default SnapshotMemo
