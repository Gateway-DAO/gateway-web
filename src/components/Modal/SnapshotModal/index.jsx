import React, { useEffect, useState } from 'react';
import * as styled from './styles';
import Snapshot from './Snapshot';

const SnapshotModal = ({ id }) => {
    const [snapshot, setSnapshot] = useState([]);
    let link = `https://snapshot.org/#/${id}`;

    useEffect(() => {
        const handler = async () => setSnapshot(await SnapshotAPI(id));

        handler();
    }, []);

    return (
        <div>
            {snapshot.map((data) => (
                // <h1 key={data.id}>{data.title}</h1>
                <Snapshot key={data.id} data={data} id={id} />
            ))}
            <styled.ButtonDiv>
                {snapshot.length > 20 && (
                    <styled.Button href={link}>See All </styled.Button>
                )}
            </styled.ButtonDiv>
        </div>
    );
};

const SnapshotAPI = async (id) => {
    const Query = `
      query getProposals($name: String){
        proposals (
          first: 21,
          skip: 0,
          where: {
            space_in: [$name],
            state: "active"
          },
          orderBy: "created",
          orderDirection: desc
        ) {
          id
          title
          body
          end
          author
        }
      }
    `;

    const res = await fetch('https://hub.snapshot.org/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: Query,
            variables: { name: id },
        }),
    });

    const json = await res.json();

    const data = json.data.proposals;

    return data;
};

export default SnapshotModal;
