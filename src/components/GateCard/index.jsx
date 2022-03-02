// Styling
import * as Styled from './style';
import 'react-circular-progressbar/dist/styles.css';

// Components
import EditIcon from '../../theme/icons/Edit';
import Switch from 'react-switch';
import { CircularProgressbar } from 'react-circular-progressbar';

// Hooks
import { useState } from 'react';
import useAdmin from '../../hooks/useAdmin';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/UserContext';
import { getGateStatusByUserId } from '../../graphql/queries';
import { useQuery, gql, useMutation } from '@apollo/client';
import { updateGate } from '../../graphql/mutations';
import { PublishedStatus } from '../../graphql/API';

/* This is a card that displays information about a gate. */
const GateCard = ({ gate }) => {
    // State
    const [checked, setChecked] = useState(gate.published === 'PUBLISHED');

    // Hooks
    const { isAdmin } = useAdmin(gate.admins || []);
    const { userInfo } = useAuth();
    const navigate = useNavigate();
    const [update] = useMutation(gql(updateGate));
    const { data } = useQuery(gql(getGateStatusByUserId), {
        variables: {
            userID: userInfo?.id,
            filter: {
                gateID: {
                    eq: gate.id,
                },
            },
        },
    });

    /**
     * It toggles the published state of the gate.
     */
    const toggleGatePublished = async () => {
        try {
            const published_INTERNAL =
                gate.published === PublishedStatus.NOT_PUBLISHED
                    ? PublishedStatus.PUBLISHED
                    : gate.published === PublishedStatus.PUBLISHED
                    ? PublishedStatus.PAUSED
                    : gate.published === PublishedStatus.PAUSED
                    ? PublishedStatus.PUBLISHED
                    : gate.published;

            setChecked(published_INTERNAL === 'PUBLISHED');

            await update({
                variables: {
                    input: {
                        id: gate.id,
                        published: published_INTERNAL,
                    },
                },
            });
        } catch (err) {
            alert('An error ocurred');
            console.log(err);
        }
    };

    /**
     * It returns the text for the button based on the status of the gate.
     * @returns The status of the gate.
     */
    const getButtonText = () => {
        switch (data?.getGateStatusByUserID?.items[0]?.status) {
            case 'COMPLETED':
                return 'Done';
            default:
                return 'Details';
        }
    };

    return (
        <Styled.GateCardBox>
            <Styled.GateBanner
                src={`https://gateway.pinata.cloud/ipfs/${gate.badge.ipfsURL}`}
                onClick={() => navigate(`/gate/${gate.id}`)}
            >
                {false && (
                    <Styled.EditContainer>
                        <EditIcon />
                    </Styled.EditContainer>
                )}

                <Styled.NFTBadgeContainer>
                    <Styled.SimpleText>NFT Badge</Styled.SimpleText>
                    <Styled.GuildName>{gate.badge.name}</Styled.GuildName>
                </Styled.NFTBadgeContainer>
                {/*
                <Styled.PeopleInvolved>
                    <PfpBox text="4 people have earned it." />
                </Styled.PeopleInvolved>
                */}
            </Styled.GateBanner>
            <Styled.CategoryList>
                {gate.categories.map((category) => (
                    <Styled.Category>
                        <Styled.CategoryLink to='/'>
                            {category}
                        </Styled.CategoryLink>
                    </Styled.Category>
                ))}
            </Styled.CategoryList>
            <Styled.CardBody onClick={() => navigate(`/gate/${gate.id}`)}>
                <Styled.CardTitle>{gate.name}</Styled.CardTitle>
                <Styled.CardDesc>
                    {gate.description.length > 180
                        ? gate.description.slice(0, 177).concat('...')
                        : gate.description}
                </Styled.CardDesc>
            </Styled.CardBody>
            <Styled.InfoContainer onClick={() => navigate(`/gate/${gate.id}`)}>
                {/*
                <Styled.InfoBox>
                    <Styled.MediumHeading>PRE REQUISITE</Styled.MediumHeading>
                    <Styled.SmallText>BANK.Beginner</Styled.SmallText>
                </Styled.InfoBox>
                */}
                <Styled.InfoBox>
                    {gate.keysNumber && (
                        <>
                            <Styled.MediumHeading>
                                KEYS REQUIRED
                            </Styled.MediumHeading>
                            <Styled.KeyBox>
                                <Styled.Circle>
                                    <CircularProgressbar
                                        value={
                                            data?.getGateStatusByUserID
                                                ?.items[0]?.keysDone || 0
                                        }
                                        minValue={0}
                                        maxValue={gate.keysNumber}
                                        strokeWidth={20}
                                    />
                                </Styled.Circle>
                                <Styled.SmallText>
                                    {data?.getGateStatusByUserID?.items[0]
                                        ?.keysDone || 0}{' '}
                                    of {gate.keysNumber}
                                </Styled.SmallText>
                            </Styled.KeyBox>
                        </>
                    )}
                </Styled.InfoBox>
            </Styled.InfoContainer>
            <Styled.ActivityBox>
                <Styled.ActionButton
                    onClick={() => navigate(`/gate/${gate.id}`)}
                >
                    <Styled.ButtonText>{getButtonText()}</Styled.ButtonText>
                </Styled.ActionButton>
                {isAdmin && (
                    <Styled.PublishContainer>
                        <Styled.PublishText>PUBLISH</Styled.PublishText>
                        <Switch
                            checked={checked}
                            onChange={toggleGatePublished}
                            offColor='#FF003D'
                            onColor='#27D5A2'
                            onHandleColor='#FFFFFF'
                            handleDiameter={20}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                            activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                            height={18}
                            width={44}
                            className='react-switch'
                            id='material-switch'
                        />
                    </Styled.PublishContainer>
                )}
            </Styled.ActivityBox>
        </Styled.GateCardBox>
    );
};

export default GateCard;
