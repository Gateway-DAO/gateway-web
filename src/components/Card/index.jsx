import { useHistory } from "react-router";

import * as Styled from "./style";

const CardInfo = (props) => (
  <div>
    <Styled.CardInfoTitle>{props.title}</Styled.CardInfoTitle>
    <Styled.CardInfoValue>{props.value}</Styled.CardInfoValue>
  </div>
);

const Card = (props) => {
    const history = useHistory()

    const navigate = e => {
      if(!props.isScrolling) {
        history.push(`/dao/${props.id}`)
      }
    }

  return (
    <Styled.CardBox >
      <Styled.CardBanner src={props.bannerURL} onClick={navigate}>
        <Styled.CardLogo src={props.logoURL} />
      </Styled.CardBanner>
      <Styled.CardBody onClick={navigate}>
        <Styled.CardTitle>{props.title}</Styled.CardTitle>
        <Styled.CardDesc>{props.description.substring(0, 300) + (props.description.length > 300 ? "..." : "")}</Styled.CardDesc>
      </Styled.CardBody>
      <Styled.CategoryList>
        {props.categories.map((e) => (
            <Styled.Category>
                <Styled.CategoryLink to={`/search/${e}`}>
                    {e}
                </Styled.CategoryLink>
            </Styled.Category>
        ))}
      </Styled.CategoryList>
      {/*
        <Styled.CardInfoBox>
          {<CardInfo title="Ranking" value={props.ranking ? props.ranking : '-'} />}
          {<CardInfo title="Token" value={(props.token != null) ? props.ranking : '-'} />}
          {<CardInfo title="Price" value={props.price? `$${Number(props.price).toFixed(2)}` : "-"} />}
        </Styled.CardInfoBox>
      */}
    </Styled.CardBox>
  );
};

export default Card;
