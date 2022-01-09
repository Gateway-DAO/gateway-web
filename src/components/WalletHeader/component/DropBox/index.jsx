import * as Styled from './style'
import { useHistory } from 'react-router'
import { useAuth } from '../../../../contexts/UserContext'
import { useClickAway } from 'react-use'
import { useRef } from 'react'

const DropDown = ({ toggle }) => {
    const history = useHistory()
    const { userSignOut } = useAuth()
    const ref = useRef(null)
    
    useClickAway(ref, () => {
        toggle(false)
    })

    return (
        <Styled.DropDownContainer ref={ref}>
            <Styled.ItemTextContainer onClick={() => history.push('/profile')}>
                Profile
            </Styled.ItemTextContainer>
            <Styled.BorderLine />
            <Styled.ItemTextContainer onClick={async () => {await userSignOut(); history.push('/') }}>
                Disconnect Wallet
            </Styled.ItemTextContainer>
        </Styled.DropDownContainer>
    )
}

export default DropDown
