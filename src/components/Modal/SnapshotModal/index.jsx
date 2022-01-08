import React, { useState, useEffect } from "react";
import * as styled from "./styles";
import Snapshot from "./Snapshot";
const SnapshotModal = (props) => {
  const snapshot = SnapshotAPI({ name: props.props });
  console.log(snapshot);
  let link = `https://snapshot.org/#/${props.props}`;
  return (
    <div>
      {snapshot.map((data) => (
        // <h1 key={data.id}>{data.title}</h1>
        <Snapshot key={data.id} data={data} id={props.props} />
        
      ))}
      <styled.ButtonDiv>
      {snapshot.length>20 && <styled.Button href={link}>See All </styled.Button> }
      </styled.ButtonDiv>
    </div>
  );
};
const SnapshotAPI = (props) => {
  console.log(props);
  const Query = `
  query getProposels($name:String){
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
  const [data, setData] = useState([]);
  const size=data.length
  

  useEffect(() => {
    fetch("https://hub.snapshot.org/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: Query,
        variables: props
      })
    })
      .then((responce) => responce.json())
      .then((data) => setData(data.data.proposals));
  }, []);

  return data;
};
  export default SnapshotModal;
  
  