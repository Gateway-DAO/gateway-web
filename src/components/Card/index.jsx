import { useHistory } from 'react-router'
import parser from 'html-react-parser'

import * as Styled from './style'

const CardInfo = (props) => (
    <div>
        <Styled.CardInfoTitle>{props.title}</Styled.CardInfoTitle>
        <Styled.CardInfoValue>{props.value}</Styled.CardInfoValue>
    </div>
)

const Card = (props) => {
    const history = useHistory()

    const navigate = (e) => {
        // if(!props.isScrolling) {
        //   history.push(`/dao/${props.id}`)
        // }
        history.push(`/dao/${props.id}`)
    }

    let desc = parser(props.description)
    if (desc.length > 300) {
        desc = desc.slice(0, 297)
        desc = desc.concat('...')
    }
    return (
        <Styled.CardBox>
            <Styled.CardBanner src={props.bannerURL} onClick={navigate}>
                <Styled.CardLogo src={props.logoURL} />
            </Styled.CardBanner>
            <Styled.CardBody onClick={navigate}>
                <Styled.CardTitle>{props.title}</Styled.CardTitle>
                <Styled.CardDesc>{desc}</Styled.CardDesc>
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
    )
}

export default Card
