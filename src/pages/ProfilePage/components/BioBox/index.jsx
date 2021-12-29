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
// Modals
import ProfileEditModal from '../../../../components/Modal/ProfileEditModal'
// hooks
import { useState } from 'react'
import React from 'react'

const BioBox = (props) => {
    const [showEditModal, setShowEditModal] = useState(false)

    const toggleEditModal = () => setShowEditModal(!showEditModal)

    const socials = props.socials
        ? props.socials.map((social) => {
              switch (social.network) {
                  case 'discord':
                      return (
                          <Styled.SocialLink href={social.url} target="_blank">
                              <FaDiscord size={25} />
                          </Styled.SocialLink>
                      )
                  case 'twitter':
                      return (
                          <Styled.SocialLink href={social.url} target="_blank">
                              <FaTwitter size={25} />
                          </Styled.SocialLink>
                      )
                  case 'website':
                      return (
                          <Styled.SocialLink href={social.url} target="_blank">
                              <FiGlobe size={25} />
                          </Styled.SocialLink>
                      )
                  case 'medium':
                      return (
                          <Styled.SocialLink href={social.url} target="_blank">
                              <FaMedium size={25} />
                          </Styled.SocialLink>
                      )
                  case 'github':
                      return (
                          <Styled.SocialLink href={social.url} target="_blank">
                              <FaGithub size={25} />
                          </Styled.SocialLink>
                      )
                  case 'telegram':
                      return (
                          <Styled.SocialLink href={social.url} target="_blank">
                              <FaTelegram size={25} />
                          </Styled.SocialLink>
                      )
                  case 'chat':
                      return (
                          <Styled.SocialLink href={social.url} target="_blank">
                              <BsChatTextFill size={25} />
                          </Styled.SocialLink>
                      )
                  default:
                      return (
                          <Styled.SocialLink href={social.url} target="_blank">
                              <FaLink size={25} />
                          </Styled.SocialLink>
                      )
              }
          })
        : []

    const Modals = (props) => (
        <>
            <ProfileEditModal
                show={showEditModal}
                toggle={toggleEditModal}
                name={props.name}
                bio={props.bio}
                socials={props.socials}
                membership={props.daos}
                pfpURL={props.pfpURL}
            />
        </>
    )

    return (
        <>
            <Modals {...props} />
            <Styled.Container>
                <Styled.NameContainer>
                    <Styled.NameBox>
                        <Styled.Name>{props.name}</Styled.Name>
                        <Styled.Username>@{props.username}</Styled.Username>
                    </Styled.NameBox>
                    <Styled.EditContainer>
                        <FaPencilAlt onClick={toggleEditModal} />
                    </Styled.EditContainer>
                </Styled.NameContainer>
                <Styled.BioText>{props.bio}</Styled.BioText>
                <Styled.Socials>
                    {socials.map((social) => social)}
                </Styled.Socials>
                {props.daos.length === 0 ? (
                    <Styled.MessageBox to="/what-are-DAOs">
                        Know about DAOs
                    </Styled.MessageBox>
                ) : (
                    <Styled.MembershipBox>
                        {props.daos.map((dao) => (
                            <Link to={`/dao/${dao.dao}`}>
                                <Styled.MembershipImg src={dao.logoURL} />
                            </Link>
                        ))}
                    </Styled.MembershipBox>
                )}
            </Styled.Container>
        </>
    )
}

export default BioBox
