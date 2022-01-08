import * as Styled from './style'
import { useHistory } from 'react-router'
import { useAuth } from '../../../../contexts/UserContext'

const DropDown = () => {
    const history = useHistory()
    const { userSignOut } = useAuth()
    return (
        <Styled.DropDownContainer>
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
