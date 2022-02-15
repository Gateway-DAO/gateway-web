/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { shortenAddress } from '../../../../../../../../utils/web3';
import * as Styled from './style';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Loader from '../../../../../../../../components/Loader';

const Snapshot = (props) => {
    const [result, setResult] = useState(null);

    const API_URL = 'https://hub.snapshot.org/graphql';
    let id = props.data.task.proposal;

    let body = {
        query: `
                query SingleProposal($id: String) {
                    proposal(id: $id) {
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
        variables: {
            id: id,
        },
    };

    let options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    useEffect(() => {
        // Update the document title using the browser API
        axios.post(API_URL, body, options).then((response) => {
            setResult(response?.data.data.proposal);
        });
    }, []);

    return (
        <Styled.Container
            onClick={
                result
                    ? () =>
                          window.open(
                              `https://snapshot.org/#/${props.data.task.spaceID}/proposal/${props.data.task.proposal}`,
                              `_blank`
                          )
                    : () => {}
            }
        >
            {!result ? (
                <Loader color='black' size={32} />
            ) : (
                <Styled.Wrapper>
                    <Styled.Header>
                        <Styled.Left>
                            {/* <Styled.Logo></Styled.Logo> */}
                            <Styled.Name>{`${
                                result?.space.name
                            } by ${shortenAddress(
                                result?.author,
                                6,
                                6
                            )}`}</Styled.Name>
                        </Styled.Left>
                        <Styled.Right state={result?.state === 'active'}>
                            {result?.state}
                        </Styled.Right>
                    </Styled.Header>
                    <Styled.SnapshotTitle>{result?.title}</Styled.SnapshotTitle>
                    <Styled.SnapshotDescription>
                        <ReactMarkdown linkTarget='_blank'>
                            {result?.body.slice(0, 300)}
                        </ReactMarkdown>
                        <span>...</span>
                    </Styled.SnapshotDescription>
                </Styled.Wrapper>
            )}
        </Styled.Container>
    );
};

export default Snapshot;
