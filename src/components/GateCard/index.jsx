import * as Styled from './style'
import EditIcon from '../../theme/icons/Edit'
import PfpBox from '../PfpBox'
import { useState } from 'react'
import Switch from 'react-switch'
import KeyStatusBar from '../AddNewKeyComponents/KeyStatusBar'

const GateCard = (props) => {
    const [checked, setChecked] = useState(false)

    return (
        <Styled.GateCardBox>
            <Styled.GateBanner
                src={
                    'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=620&quality=85&auto=format&fit=max&s=9e14d446c2deaf0f343c7455580bed67'
                }
            >
                <Styled.EditContainer>
                    <EditIcon />
                </Styled.EditContainer>
                <Styled.NFTBadgeContainer>
                    <Styled.SimpleText>NFT Badge</Styled.SimpleText>
                    <Styled.GuildName>BANK.Design.Guild</Styled.GuildName>
                </Styled.NFTBadgeContainer>
                <Styled.PeopleInvolved>
                    <PfpBox
                        text="4 people
have earned it."
                    />
                </Styled.PeopleInvolved>
            </Styled.GateBanner>
            <Styled.CategoryList>
                {/* {props.categories.map((e) => (
                    <Styled.Category>
                        <Styled.CategoryLink to={`/search/${e}`}>
                            {e}
                        </Styled.CategoryLink>
                    </Styled.Category>
                ))} */}

                <Styled.Category>
                    <Styled.CategoryLink to='/'>protocol</Styled.CategoryLink>
                </Styled.Category>
            </Styled.CategoryList>
            <Styled.CardBody>
                <Styled.CardTitle>Design Guild</Styled.CardTitle>
                <Styled.CardDesc>
                    Take your first steps to join the BDAO Design Guild, and
                    help us to disrupt the industry.
                </Styled.CardDesc>
            </Styled.CardBody>
            <Styled.InfoContainer>
                <Styled.InfoBox>
                    <Styled.MediumHeading>PRE REQUISITE</Styled.MediumHeading>
                    <Styled.SmallText>BANK.Beginner</Styled.SmallText>
                </Styled.InfoBox>
                <Styled.InfoBox>
                    <Styled.MediumHeading>KEYS REQUIRED </Styled.MediumHeading>
                    <Styled.KeyBox>
                        {/* <Styled.Circle /> */}
                        <KeyStatusBar radius='9' keys='100' TotalKeys='200'/>
                        <Styled.SmallText>200 of 200</Styled.SmallText>
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
            </Styled.ActivityBox>
        </Styled.GateCardBox>
    )
}

export default GateCard
