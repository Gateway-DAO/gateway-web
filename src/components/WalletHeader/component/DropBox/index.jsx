import * as Styled from './style'
import { useHistory } from 'react-router'
import { useAuth } from '../../../../contexts/UserContext'
import { useClickAway } from 'react-use'
import { useRef } from 'react'

const DropDown = ({ toggle }) => {
    const history = useHistory()
    const { signIn, loggedIn } = useAuth()
    const ref = useRef(null)
    
    

    return (
        <Styled.DropDownContainer ref={ref}>
            <Styled.ItemsContainer>
                <Styled.ItemTextContainer onClick={() => history.push('/profile')}>
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
