// Styling
import * as Styled from './style'
import 'react-circular-progressbar/dist/styles.css'

// Components
import EditIcon from '../../theme/icons/Edit'
import PfpBox from '../PfpBox'
import Switch from 'react-switch'
import { CircularProgressbar } from 'react-circular-progressbar'

// Hooks
import { useEffect, useState } from 'react'
import useAdmin from '../../hooks/useAdmin'
import { useNavigate } from 'react-router-dom'
import useUpdateGate from '../../api/database/useUpdateGate'
import { useGetGateStatusByUserID } from '../../api/database/useGetGateStatus'
import { useAuth } from '../../contexts/UserContext'

/* This is a card that displays information about a gate. */
const GateCard = (props) => {
    // State
    const [checked, setChecked] = useState(props.gate.published)
    const gate = props.gate

    // Hooks
    const { isAdmin } = useAdmin(props.gate.admins || [])
    const { userInfo } = useAuth()
    const navigate = useNavigate()
    const { updateGate } = useUpdateGate()
    const { data } = useGetGateStatusByUserID(userInfo.id, {
        filter: {
            gateID: {
                eq: gate.id
            }
        }
    })

    useEffect(() => console.log(data), [data])

    const toggleGatePublished = async () => {
        try {
            setChecked(!gate.published)
            await updateGate({
                variables: {
                    input: {
                        id: gate.id,
                        published: !gate.published,
                    },
                },
            })
        } catch (err) {
            alert('An error ocurred')
            console.log(err)
        }
    }

    return (
        <Styled.GateCardBox>
            <Styled.GateBanner
                src={`https://gateway.pinata.cloud/ipfs/${gate.badge.ipfsURL}`}
                onClick={() => navigate(`/gate/${gate.id}`)}
            >
                {isAdmin && (
                    <Styled.EditContainer>
                        <EditIcon />
                    </Styled.EditContainer>
                )}

                <Styled.NFTBadgeContainer>
                    <Styled.SimpleText>NFT Badge</Styled.SimpleText>
                    <Styled.GuildName>{gate.badge.name}</Styled.GuildName>
                </Styled.NFTBadgeContainer>
                <Styled.PeopleInvolved>
                    <PfpBox text="4 people have earned it." />
                </Styled.PeopleInvolved>
            </Styled.GateBanner>
            <Styled.CategoryList>
                {gate.categories.map((category) => (
                    <Styled.Category>
                        <Styled.CategoryLink to="/">
                            {category}
                        </Styled.CategoryLink>
                    </Styled.Category>
                ))}
            </Styled.CategoryList>
            <Styled.CardBody onClick={() => navigate(`/gate/${gate.id}`)}>
                <Styled.CardTitle>{gate.name}</Styled.CardTitle>
                <Styled.CardDesc>{gate.description}</Styled.CardDesc>
            </Styled.CardBody>
            <Styled.InfoContainer onClick={() => navigate(`/gate/${gate.id}`)}>
                <Styled.InfoBox>
                    <Styled.MediumHeading>PRE REQUISITE</Styled.MediumHeading>
                    <Styled.SmallText>BANK.Beginner</Styled.SmallText>
                </Styled.InfoBox>
                <Styled.InfoBox>
                    <Styled.MediumHeading>KEYS REQUIRED</Styled.MediumHeading>
                    <Styled.KeyBox>
                        <Styled.Circle>
                            <CircularProgressbar
                                value={80}
                                minValue={0}
                                maxValue={props.gate.keysNumber}
                                strokeWidth={20}
                            />
                        </Styled.Circle>
                        <Styled.SmallText>
                            80 of {props.gate.keysNumber}
                        </Styled.SmallText>
                    </Styled.KeyBox>
                </Styled.InfoBox>
            </Styled.InfoContainer>
            <Styled.ActivityBox>
                <Styled.ActionButton
                    onClick={() => navigate(`/gate/${gate.id}`)}
                >
                    <Styled.ButtonText>DONE</Styled.ButtonText>
                </Styled.ActionButton>
                <Styled.ActionButton>
                    <Styled.ButtonText>DETAILS</Styled.ButtonText>
                </Styled.ActionButton>
                {isAdmin && (
                    <Styled.PublishContainer>
                        <Styled.PublishText>PUBLISH</Styled.PublishText>
                        <Switch
                            checked={checked}
                            onChange={toggleGatePublished}
                            offColor="#FF003D"
                            onColor="#27D5A2"
                            onHandleColor="#FFFFFF"
                            handleDiameter={20}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={18}
                            width={44}
                            className="react-switch"
                            id="material-switch"
                        />
                    </Styled.PublishContainer>
                )}
            </Styled.ActivityBox>
        </Styled.GateCardBox>
    )
}

export default GateCard
