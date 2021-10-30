import * as Styled from "./style";
import { Category, CategoryList } from "../BigCard/style";
import { doc, updateDoc, onSnapshot } from "@firebase/firestore";
import { db } from "../../api/firebase";

const BountyCard = props => {
    const bounty = props.bounties[props.idx]

    const deleteBounty = async () => {
        const dao = doc(db, "daos", props.id)
        const newBounties = props.bounties.filter((bounty, idx) => idx !== props.idx)

        const unsub = onSnapshot(dao, (doc) => {
            props.set(newBounties)
        });

        await updateDoc(dao, {
            bounties: newBounties
        })

        unsub()
    }

    return (
        <Styled.Container>
            <CategoryList>
                {bounty.categories.map((e) => <Category>{e}</Category>)}
            </CategoryList>
            <Styled.Text>{bounty.description}</Styled.Text>
            <Styled.BountyInfoBox>
                <Styled.BountyInfo>
                    <Styled.Text>Level</Styled.Text>
                    <Styled.BoldText>{bounty.level}</Styled.BoldText>
                </Styled.BountyInfo>
                <Styled.BountyInfo>
                    <Styled.Text>Reward</Styled.Text>
                    <Styled.BoldText>{bounty.reward} ETH</Styled.BoldText>
                </Styled.BountyInfo>
                <Styled.BountyInfo>
                    <Styled.Text>Posted</Styled.Text>
                    <Styled.BoldText>{bounty.postDate}</Styled.BoldText>
                </Styled.BountyInfo>
                <Styled.BountyInfo>
                    <Styled.Text>Due</Styled.Text>
                    <Styled.BoldText>{bounty.endDate}</Styled.BoldText>
                </Styled.BountyInfo>
            </Styled.BountyInfoBox>

            <Styled.TrashBtn onClick={deleteBounty} />
        </Styled.Container>
    )
}

export default BountyCard;