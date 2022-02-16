import * as Styled from './style';
import parser from 'html-react-parser';
import { useDeleteTokenBenefit } from '../../api/database/useDeleteTokenBenefit';

const TokenBenefitCard = (props) => {
    const benefit = props.tbs[props.idx];

    const { deleteTokenBenefit } = useDeleteTokenBenefit();

    const deleteBenefit = async (e) => {
        e.stopPropagation();

        await deleteTokenBenefit({
            variables: {
                input: {
                    id: benefit.id,
                },
            },
        });

        props.set(props.tbs.filter((obj) => benefit.id !== obj.id));
    };

    return (
        <Styled.Container>
            <Styled.BoldText>{benefit.title}</Styled.BoldText>
            <Styled.Text>{parser(benefit.description)}</Styled.Text>
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

            {props.admin && (
                <Styled.TrashBtn onClick={deleteBenefit} size={14} />
            )}
        </Styled.Container>
    );
};

export default TokenBenefitCard;
