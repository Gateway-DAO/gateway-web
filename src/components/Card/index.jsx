import styled from "styled-components"

const CardBox = styled.div`
    background-color: white;
    border-radius: 20px
`

const CardBanner = styled.div`
    position: relative;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-image: url('${props => props.src}');
`

const CardLogo = styled.img`
    position: absolute;
    border-radius: 100%;
    width: 50px;
`

const CardTitle = styled.h1`
    font-family: "Be Vietnam", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #170627;
`

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
`

const CardInfoBox = styled.div`
    border-top: 1px solid rgba(229, 229, 229, 0.5);
    background-color: white;
    display: flex;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
`
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
`

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
`

const CardInfo = props => (
    <div>
        <CardInfoTitle>{props.title}</CardInfoTitle>
        <CardInfoValue>{props.value}</CardInfoValue>
    </div>
)

const Card = props => (
        <CardBox>
            <CardBanner src={props.bannerURL}>
                <CardLogo src={props.logoURL} />
            </CardBanner>
            <CardTitle>{props.title}</CardTitle>
            <CardDesc>{props.description}</CardDesc>
            <CardInfoBox>
                {props.ranking && 
                    <CardInfo
                        title="Ranking"
                        value={props.ranking}    
                    />
                }
                {props.token &&
                    <CardInfo
                        title="Token"
                        value={props.token}
                    />
                }
                {props.price &&
                    <CardInfo
                        title="Price"
                        value={props.price}
                    />
                }
            </CardInfoBox>
        </CardBox>
)

export default Card