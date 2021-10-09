import { useHistory } from "react-router";
import styled from "styled-components";

const CardBox = styled.div`
  background-color: white;
  border-radius: 20px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`;

const CardBanner = styled.div`
  position: relative;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  grid-row: 1 / span 2;
`;

const CardLogo = styled.img`
  position: absolute;
  border-radius: 100%;
  width: 50px;
  top: 15px;
  left: 15px;
  background-color: white;
`;

const CardBody = styled.div`
  grid-row: 3 / span 2;
  padding: 15px;
`;

const CardTitle = styled.h1`
  font-family: "Be Vietnam";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;

  color: #170627;
`;

const CardDesc = styled.p`
  font-family: "Be Vietnam", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  color: #170627;
`;

const CardInfoBox = styled.div`
  border-top: 1px solid rgba(229, 229, 229, 0.5);
  background-color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 15px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const CardInfoTitle = styled.h2`
  font-family: "Be Vietnam", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
`;

const CardInfoValue = styled.p`
  font-family: "Be Vietnam", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
`;

const CardInfo = (props) => (
  <div>
    <CardInfoTitle>{props.title}</CardInfoTitle>
    <CardInfoValue>{props.value}</CardInfoValue>
  </div>
);

const Card = (props) => {
    const history = useHistory()

    const navigate = e => {
        history.push(`/dao/${props.id}`)
    }

  return (
    <CardBox onClick={navigate}>
      <CardBanner src={props.bannerURL}>
        <CardLogo src={props.logoURL} />
      </CardBanner>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardDesc>{props.description}</CardDesc>
      </CardBody>
      <CardInfoBox>
        {props.ranking && <CardInfo title="Ranking" value={props.ranking} />}
        {props.token && <CardInfo title="Token" value={props.token} />}
        {props.price && <CardInfo title="Price" value={props.price} />}
      </CardInfoBox>
    </CardBox>
  );
};

export default Card;
