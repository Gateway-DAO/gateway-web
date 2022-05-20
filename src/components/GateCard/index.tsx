// Styling
import * as Styled from './style';
import 'react-circular-progressbar/dist/styles.css';

// Components
import EditIcon from '../../theme/icons/Edit';
import { CircularProgressbar } from 'react-circular-progressbar';

// Hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/UserContext';
import { Gates, useGetGateProgressQuery, useGetKeyProgressQuery } from '../../graphql';

interface IProps {
    gate: Gates;
    viewAsMember: boolean;
    toSearch: boolean;
    showHolders: boolean;
}

/* This is a card that displays information about a gate. */
const GateCard: React.FC<IProps> = ({ gate, viewAsMember, toSearch, showHolders = true }) => {
    // Hooks
    const { userInfo, activateWeb3, walletConnected }: Record<string, any> = useAuth();
    const navigate = useNavigate();
    const { data } = useGetGateProgressQuery({
        variables: {
            where: {
                _and: [
                    {
                        gate_id: {
                            _eq: gate.id
                        }
                    },
                    {
                        user_id: {
                            _eq: userInfo?.id
                        }
                    }
                ]
            }
        }
    })

    const {
        data: keyProgressData,
        loading: keyProgressLoading
    } = useGetKeyProgressQuery({
        variables: {
            where: {
                gate_id: {
                    _eq: gate.id
                },
                user_id: {
                    _eq: userInfo?.id
                }
            }
        }
    })

    // State
    const [numberOfWords, setNumberOfWords] = useState(100);
    const keysDone = keyProgressData?.key_progress.filter(kp => kp.completed == 'done').map(kp => kp.key.keys).reduce((total, num) => total + num, 0);

    useEffect(() => {
        if (window.innerWidth < 1171 && window.innerWidth > 900) {
            setNumberOfWords(90);
        } else if (window.innerWidth <= 900 && window.innerWidth > 785) {
            setNumberOfWords(80);
        } else if (window.innerWidth <= 545 && window.innerWidth > 430) {
            setNumberOfWords(60);
        } else if (window.innerWidth < 430) {
            setNumberOfWords(30);
        } else {
            setNumberOfWords(130);
        }
    }, [window.innerWidth]);

    /**
     * It returns the text for the button based on the status of the gate.
     * @returns The status of the gate.
     */
    const getButtonText = () => {
        switch (data?.gate_progress[0]?.status) {
            case 'completed':
                return 'Done';
            default:
                return 'Details';
        }
    };

    const goToGate = async () => {
        let activated = walletConnected;
        if (!walletConnected) activated = await activateWeb3();
        if (activated) {
            if (userInfo?.init) navigate(`/gate/${gate.id}?toSearch=${toSearch}&viewAsMember=${viewAsMember}`);
            else navigate(`/profile/complete-profile?to=/gate/${gate.id}`);
        }
    };

    return (
        <Styled.GateCardBox>
            <Styled.GateContainer>
                <Styled.GateBanner
                    src={`https://ipfs.io/ipfs/${gate.badge.ipfsURL}`}
                    onClick={goToGate}
                >
                    {false && (
                        <Styled.EditContainer>
                            <EditIcon />
                        </Styled.EditContainer>
                    )}

                    {/* <Styled.NFTBadgeContainer>
                        <Styled.SimpleText>Badge</Styled.SimpleText>
                        <Styled.GuildName>{gate.badge.name}</Styled.GuildName>
                    </Styled.NFTBadgeContainer> */}
                    {/*
                    <Styled.PeopleInvolved>
                        <PfpBox text="4 people have earned it." />
                    </Styled.PeopleInvolved>
                    */}
                </Styled.GateBanner>
                <Styled.CategoryList>
                    {gate.categories.map((category, idx) => (
                        <Styled.Category key={idx}>
                            <Styled.CategoryLink to='/'>
                                {category}
                            </Styled.CategoryLink>
                        </Styled.Category>
                    ))}
                </Styled.CategoryList>
                <Styled.CardBody onClick={goToGate}>
                    <Styled.CardTitle>{gate.gate_name}</Styled.CardTitle>
                    <Styled.CardDesc>
                        {gate.description.length > numberOfWords
                            ? gate.description
                                .slice(0, numberOfWords - 3)
                                .concat('...')
                            : gate.description}
                    </Styled.CardDesc>
                </Styled.CardBody>
                <Styled.InfoContainer onClick={goToGate}>
                    <Styled.InfoBox>
                        <Styled.MediumHeading>Badge</Styled.MediumHeading>
                        <Styled.GuildName>
                            {gate.badge.name.slice(0, 16) +
                                (gate.badge.name.length > 16 ? '...' : '')}
                        </Styled.GuildName>
                    </Styled.InfoBox>
                    {/* gate.preRequisites && (
                        <Styled.InfoBox>
                            <Styled.MediumHeading>
                                PRE REQUISITE
                            </Styled.MediumHeading>
                            <Styled.InfoText>
                                Gateway.DAO.Verfication
                            </Styled.InfoText>
                        </Styled.InfoBox>
                    ) */}
                    <Styled.InfoBox>
                        {gate.keys && (
                            <>
                                <Styled.MediumHeading>
                                    KEYS REQUIRED
                                </Styled.MediumHeading>
                                <Styled.KeyBox>
                                    <Styled.Circle>
                                        <CircularProgressbar
                                            value={keysDone}
                                            minValue={0}
                                            maxValue={gate.keys}
                                            strokeWidth={20}
                                        />
                                    </Styled.Circle>
                                    <Styled.SmallText>
                                        {keysDone} of {gate.keys}
                                    </Styled.SmallText>
                                </Styled.KeyBox>
                            </>
                        )}
                    </Styled.InfoBox>
                    {showHolders && (<Styled.InfoBox>
                        <Styled.MediumHeading>EARNERS</Styled.MediumHeading>
                        <Styled.InfoText>
                            {gate.holders.length}{' '}
                            {gate.holders.length !== 1 ? 'people have' : 'person has'}{' '}
                            earned it.
                        </Styled.InfoText>
                    </Styled.InfoBox>)}
                </Styled.InfoContainer>
                <Styled.ActivityBox>
                    <Styled.ActionButton onClick={goToGate}>
                        <Styled.ButtonText>{getButtonText()}</Styled.ButtonText>
                    </Styled.ActionButton>
                </Styled.ActivityBox>
            </Styled.GateContainer>
        </Styled.GateCardBox>
    );
};

export default GateCard;
