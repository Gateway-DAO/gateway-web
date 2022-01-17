import * as Styled from './style'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../contexts/UserContext'
import { useClickAway } from 'react-use'
import { useRef } from 'react'

const DropDown = ({ toggle }) => {
    const navigate = useNavigate();
    const { userSignOut } = useAuth()
    const ref = useRef(null)
    
    useClickAway(ref, () => {
        toggle(false)
    })

    return (
        <Styled.DropDownContainer ref={ref}>
            <Styled.ItemTextContainer onClick={() => navigate('/profile')}>
                Profile
            </Styled.ItemTextContainer>
            <Styled.BorderLine />
            <Styled.ItemTextContainer onClick={async () => {await userSignOut(); navigate('/') }}>
                Disconnect Wallet
            </Styled.ItemTextContainer>
        </Styled.DropDownContainer>
    )
}

export default DropDown
