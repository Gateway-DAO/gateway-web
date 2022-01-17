import * as Styled from './style'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../contexts/UserContext'
import { useClickAway } from 'react-use'
import { useRef } from 'react'

const DropDown = ({ toggle }) => {
    const navigate = useNavigate();
    const { signIn, loggedIn } = useAuth()
    const ref = useRef(null)
    
    

    return (
        <Styled.DropDownContainer ref={ref}>
            <Styled.ItemsContainer>
                <Styled.ItemTextContainer onClick={() => navigate('/profile')}>
                    Profile
                </Styled.ItemTextContainer>
                {!loggedIn && (
                    <>
                        <Styled.BorderLine />
                        <Styled.ItemTextContainer onClick={async () => { await signIn() }}>
                            Authorize Metamask
                        </Styled.ItemTextContainer>
                    </>
                )}
            </Styled.ItemsContainer>
        </Styled.DropDownContainer>
    )
}

export default DropDown
