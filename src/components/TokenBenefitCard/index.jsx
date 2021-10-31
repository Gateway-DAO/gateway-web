import * as Styled from "./style";
import { doc, updateDoc, onSnapshot } from "@firebase/firestore";
import { db } from "../../api/firebase";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TokenBenefitCard = props => {
    const benefit = props.tbs[props.idx]

    const deleteBenefit = async () => {
        const dao = doc(db, "daos", props.id)
        const newTBs = props.tbs.filter((benefit, idx) => idx !== props.idx)

        const unsub = onSnapshot(dao, (doc) => {
            props.set(newTBs)
        });

        await updateDoc(dao, {
            tokenBenefits: newTBs
        })

        unsub()
    }

    return (
        <Styled.Container>
            <Styled.BoldText>{benefit.title}</Styled.BoldText>
            <Styled.Text><ReactMarkdown remarkPlugins={[remarkGfm]}>{benefit.description}</ReactMarkdown></Styled.Text>
            <Styled.TBInfoBox>
                <Styled.TBInfo>
                    <Styled.Text>Token</Styled.Text>
                    <Styled.BoldText>${benefit.token}</Styled.BoldText>
                </Styled.TBInfo>
                <Styled.TBInfo>
                    <Styled.Text>Qtd.</Styled.Text>
                    <Styled.BoldText>{benefit.amount}</Styled.BoldText>
                </Styled.TBInfo>
            </Styled.TBInfoBox>

            {props.admin && <Styled.TrashBtn onClick={deleteBenefit} size={14} />}
        </Styled.Container>
    )
}

export default TokenBenefitCard;