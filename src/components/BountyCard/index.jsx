import * as Styled from './style';
import { Category, CategoryList } from '../BigCard/components/Profiles/style';
import parser from 'html-react-parser';
import { useDeleteBounty } from '../../api/database/useDeleteBounty';

const BountyCard = (props) => {
    const { deleteBounty } = useDeleteBounty();

    const bounty = props.bounties[props.idx];
    let description = '';

    if (bounty.description) {
        description = parser(bounty.description);
    }

    const deleteThisBounty = async (e) => {
        e.stopPropagation();

        await deleteBounty({
            variables: {
                input: {
                    id: bounty.id,
                },
            },
        });

        props.set(props.bounties.filter((obj) => bounty.id !== obj.id));
    };

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
                    <Styled.BoldText>
                        {new Date(bounty.postDate).toLocaleDateString('en-US')}
                    </Styled.BoldText>
                </Styled.BountyInfo>
                <Styled.BountyInfo>
                    <Styled.Text>Due</Styled.Text>
                    <Styled.BoldText>
                        {new Date(bounty.endDate).toLocaleDateString('en-US')}
                    </Styled.BoldText>
                </Styled.BountyInfo>
            </Styled.BountyInfoBox>

            {props.admin && (
                <Styled.TrashBtn onClick={deleteThisBounty} size={14} />
            )}
        </Styled.Container>
    );
};

export default BountyCard;
