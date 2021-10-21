import * as Styled from "./style";
import { Category, CategoryList } from "../BigCard/style";

const BountyCard = props => {
    return (
        <Styled.Container>
            <CategoryList>
                {props.bounty.categories.map((e) => <Category>{e}</Category>)}
            </CategoryList>
            <Styled.Text>{props.bounty.description}</Styled.Text>
            <Styled.BountyInfoBox>
                <Styled.BountyInfo>
                    <Styled.Text>Level</Styled.Text>
                    <Styled.BoldText>{props.bounty.level}</Styled.BoldText>
                </Styled.BountyInfo>
                <Styled.BountyInfo>
                    <Styled.Text>Reward</Styled.Text>
                    <Styled.BoldText>{props.bounty.reward} ETH</Styled.BoldText>
                </Styled.BountyInfo>
                <Styled.BountyInfo>
                    <Styled.Text>Posted</Styled.Text>
                    <Styled.BoldText>{props.bounty.postDate}</Styled.BoldText>
                </Styled.BountyInfo>
                <Styled.BountyInfo>
                    <Styled.Text>Due</Styled.Text>
                    <Styled.BoldText>{props.bounty.endDate}</Styled.BoldText>
                </Styled.BountyInfo>
            </Styled.BountyInfoBox>
        </Styled.Container>
    )
}

export default BountyCard;