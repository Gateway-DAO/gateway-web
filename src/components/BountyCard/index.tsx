import * as Styled from './style';
import { Category, CategoryList } from '../BigCard/components/Profiles/style';
import parser from 'html-react-parser';

// Hooks
import { Bounties, useDeleteBountyMutation } from '../../graphql';

interface IProps {
    bounties: Bounties[];
    idx: number;
    showInfo: (idx: number) => void;
    set: (bounties: Bounties[]) => void;
    admin: boolean;
}

const BountyCard: React.FC<IProps> = (props) => {
    const [deleteBounty] = useDeleteBountyMutation();

    const bounty = props.bounties[props.idx];
    let description: string | JSX.Element | JSX.Element[] = '';

    if (bounty.description) {
        description = parser(bounty.description);
    }

    const deleteThisBounty = async (e) => {
        e.stopPropagation();

        await deleteBounty({
            variables: {
                id: bounty.id
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
                        {new Date(bounty.post_date).toLocaleDateString('en-US')}
                    </Styled.BoldText>
                </Styled.BountyInfo>
                <Styled.BountyInfo>
                    <Styled.Text>Due</Styled.Text>
                    <Styled.BoldText>
                        {new Date(bounty.end_date).toLocaleDateString('en-US')}
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
