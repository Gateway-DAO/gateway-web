import * as Styled from './style'
import { Category, CategoryList } from '../BigCard/components/Profiles/style'
import { doc, updateDoc, onSnapshot } from '@firebase/firestore'
import { db } from '../../api/firebase'
import parser from 'html-react-parser'
import { useState } from 'react'

const BountyCard = (props) => {
    const bounty = props.bounties[props.idx]
    // const [description, setDescription] = useState("");
    let description = "";
    console.log(bounty.description);
    if(bounty.description){
        // setDescription(parser(bounty.description));
        description = parser(bounty.description);
    }
    const deleteBounty = async (e) => {
        e.stopPropagation()
        const dao = doc(db, 'daos', props.id)
        const newBounties = props.bounties.filter(
            (bounty, idx) => idx !== props.idx
        )

        const unsub = onSnapshot(dao, (doc) => {
            props.set(newBounties)
        })

        await updateDoc(dao, {
            bounties: newBounties,
        })

        unsub()
    }

    return (
        <Styled.Container onClick={() => props.showInfo(props.idx)}>
            <CategoryList>
                {bounty.categories.map((e) => (
                    <Category>{e}</Category>
                ))}
            </CategoryList>
            <Styled.Text>{description}</Styled.Text>
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

            {props.admin && (
                <Styled.TrashBtn onClick={deleteBounty} size={14} />
            )}
        </Styled.Container>
    )
}

export default BountyCard
