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

const BioBox = (props) => {
    const networks = {
        discord: 'https://google.com',
        twitter: 'https://google.com',
        github: 'https://google.com',
    }

    const socials = Object.keys(networks).map((key) => {
        switch (key) {
            case 'discord':
                return (
                    <Styled.SocialLink href={networks[key]} target="_blank">
                        <FaDiscord size={25} />
                    </Styled.SocialLink>
                )
            case 'twitter':
                return (
                    <Styled.SocialLink href={networks[key]} target="_blank">
                        <FaTwitter size={25} />
                    </Styled.SocialLink>
                )
            case 'website':
                return (
                    <Styled.SocialLink href={networks[key]} target="_blank">
                        <FiGlobe size={25} />
                    </Styled.SocialLink>
                )
            case 'medium':
                return (
                    <Styled.SocialLink href={networks[key]} target="_blank">
                        <FaMedium size={25} />
                    </Styled.SocialLink>
                )
            case 'github':
                return (
                    <Styled.SocialLink href={networks[key]} target="_blank">
                        <FaGithub size={25} />
                    </Styled.SocialLink>
                )
            case 'telegram':
                return (
                    <Styled.SocialLink href={networks[key]} target="_blank">
                        <FaTelegram size={25} />
                    </Styled.SocialLink>
                )
            case 'chat':
                return (
                    <Styled.SocialLink href={networks[key]} target="_blank">
                        <BsChatTextFill size={25} />
                    </Styled.SocialLink>
                )
            default:
                return (
                    <Styled.SocialLink href={networks[key]} target="_blank">
                        <FaLink size={25} />
                    </Styled.SocialLink>
                )
        }
    })

    return (
        <Styled.Container>
            <Styled.NameBox>
                <Styled.Name>MasterStarkk</Styled.Name>
                <Styled.Username>@masterstarkk</Styled.Username>
            </Styled.NameBox>
            <Styled.BioText>
                I share about DAOs, social tokens and web3 communities.
                <br/>Co-creator @gateway NFT Collector and Writer @mirrorxyz
            </Styled.BioText>
            <Styled.Socials>{socials.map((social) => social)}</Styled.Socials>
            <Styled.SmallHeading>MEMBERSHIP</Styled.SmallHeading>
        </Styled.Container>
    )
}

export default BioBox
