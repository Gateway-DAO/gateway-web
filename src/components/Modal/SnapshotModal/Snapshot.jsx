import React from "react";
import * as styled from "./styles";
const Snapshot = (props) => {
  let body = props.data.body;
  let discription = body.replace(/#/ig,'').slice(0, 200).concat("...");;
  // var theDate = new Date(props.data.end * 1000);
  // var dateString = theDate.toGMTString();
  let timeStamp = props.data.end;
let endDate = new Date(timeStamp*1000);
let todayDate = new Date();

const getDifferenceInDays=(date1, date2 )=> {
  const diffInMs = Math.abs(date2 - date1);
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
}
let daysLeft = getDifferenceInDays(todayDate, endDate );
  // body.replace("###", "").slice(0, 200).concat("...");
  let link = `https://snapshot.org/#/${props.id}/proposal/${props.data.id}/`;
  return (
    <styled.Card>
      {/* <styled.Top>
      </styled.Logo>
      <styled.Header>
      </styled.Header> <styled.Logo>
    </styled.Top>*/}
      <styled.Body href={link}>
        <styled.Title>{props.data.title}</styled.Title>
        <styled.Discription>{discription}</styled.Discription>
        <styled.Date>expires in {daysLeft} days</styled.Date>
      </styled.Body>
      {/* <styled.Bottom>{props.end}</styled.Bottom> */}
    </styled.Card>
  );
};

export default Snapshot;