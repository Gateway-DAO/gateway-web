// Styling
import * as Styled from './style'

// Icons
import {
    FaDiscord,
    FaTwitter,
    FaMedium,
    FaGithub,
    FaTelegram,
    FaLink,
    FaPencilAlt,
} from 'react-icons/fa'
import { BsChatTextFill } from 'react-icons/bs'
import { FiGlobe } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const BioBox = (props) => {
    const socials = props.socials ? Object.keys(props.socials).map((key) => {
        switch (key) {
            case 'discord':
                return (
                    <Styled.SocialLink href={props.socials[key]} target="_blank">
                        <FaDiscord size={25} />
                    </Styled.SocialLink>
                )
            case 'twitter':
                return (
                    <Styled.SocialLink href={props.socials[key]} target="_blank">
                        <FaTwitter size={25} />
                    </Styled.SocialLink>
                )
            case 'website':
                return (
                    <Styled.SocialLink href={props.socials[key]} target="_blank">
                        <FiGlobe size={25} />
                    </Styled.SocialLink>
                )
            case 'medium':
                return (
                    <Styled.SocialLink href={props.socials[key]} target="_blank">
                        <FaMedium size={25} />
                    </Styled.SocialLink>
                )
            case 'github':
                return (
                    <Styled.SocialLink href={props.socials[key]} target="_blank">
                        <FaGithub size={25} />
                    </Styled.SocialLink>
                )
            case 'telegram':
                return (
                    <Styled.SocialLink href={props.socials[key]} target="_blank">
                        <FaTelegram size={25} />
                    </Styled.SocialLink>
                )
            case 'chat':
                return (
                    <Styled.SocialLink href={props.socials[key]} target="_blank">
                        <BsChatTextFill size={25} />
                    </Styled.SocialLink>
                )
            default:
                return (
                    <Styled.SocialLink href={props.socials[key]} target="_blank">
                        <FaLink size={25} />
                    </Styled.SocialLink>
                )
        }
    }) : [];

    return (
        <Styled.Container>
            <Styled.NameBox>
                <Styled.Name>{props.name}</Styled.Name>
                <Styled.Username>@{props.username}</Styled.Username>
            </Styled.NameBox>
            <Styled.BioText>
                {props.bio}
            </Styled.BioText>
            <Styled.Socials>{socials.map((social) => social)}</Styled.Socials>
            <Styled.SmallHeading>MEMBERSHIP</Styled.SmallHeading>
            <Styled.MembershipBox>
                {props.daos.map(dao => <Link to={`/dao/${dao.id}`}><Styled.MembershipImg src={dao.logoURL} /></Link>)}
            </Styled.MembershipBox>
        </Styled.Container>
    )
}

export default BioBox
