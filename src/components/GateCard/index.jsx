import * as Styled from './style'
import EditIcon from '../../theme/icons/Edit'
import PfpBox from '../PfpBox'
import { useState } from 'react'
import Switch from 'react-switch'
import ProgressCircle from '../../components/ProgressCircle'
import useAdmin from '../../hooks/useAdmin'
import { useNavigate } from 'react-router-dom'

/* This is a card that displays information about a gate. */
const GateCard = (props) => {
    // State
    const [checked, setChecked] = useState(false)
    const gate = props.gate

    // Hooks
    const { isAdmin } = useAdmin(props.gate.admins || [])
    const navigate = useNavigate()

    return (
        <Styled.GateCardBox onClick={() => navigate(`/gate/${gate.id}`)}>
            <Styled.GateBanner
                src={`https://gateway.pinata.cloud/ipfs/${gate.badge.ipfsURL}`}
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
            <Styled.CardBody>
                <Styled.CardTitle>{gate.name}</Styled.CardTitle>
                <Styled.CardDesc>{gate.description}</Styled.CardDesc>
            </Styled.CardBody>
            <Styled.InfoContainer>
                <Styled.InfoBox>
                    <Styled.MediumHeading>PRE REQUISITE</Styled.MediumHeading>
                    <Styled.SmallText>BANK.Beginner</Styled.SmallText>
                </Styled.InfoBox>
                <Styled.InfoBox>
                    <Styled.MediumHeading>KEYS REQUIRED</Styled.MediumHeading>
                    <Styled.KeyBox>
                        <ProgressCircle radius="9" keys="80" TotalKeys={props.gate.keysNumber} />
                        <Styled.SmallText>200 of {props.gate.keysNumber}</Styled.SmallText>
                    </Styled.KeyBox>
                </Styled.InfoBox>
            </Styled.InfoContainer>
            <Styled.ActivityBox>
                <Styled.ActionButton>
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
                            onChange={() => setChecked(!checked)}
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
