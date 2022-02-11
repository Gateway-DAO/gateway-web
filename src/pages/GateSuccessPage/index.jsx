import * as Styled from './style'
import * as ThemeStyled from '../../theme/style'

// Hooks
import { useLocation, useOutletContext, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const GateSuccessPage = (props) => {
    const { state } = useLocation()
    const { gateData } = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (state.usr.gate === undefined || state.usr.key === undefined) {
            navigate("/")
        }

        const clear = setTimeout(() => {
            window.location.href = `/gate/${state.usr.gate.id}/`
        }, 6000)

        return () => clearTimeout(clear)
    }, [])

    return (
        <Styled.Container>
            <Styled.BoxContainer>
                <ThemeStyled.MainText>Congratulations!</ThemeStyled.MainText>
                <Styled.Text>You have earned the <Styled.PurpleText>{gateData.badge.name}</Styled.PurpleText> Badge from {gateData.dao.name}</Styled.Text>
                <Styled.NFT src={`https://gateway.pinata.cloud/ipfs/${gateData.badge.ipfsURL}`} />
                <Styled.SmallTextContainer>
                    Redirecting...
                </Styled.SmallTextContainer>
            </Styled.BoxContainer>
        </Styled.Container>
    )
}

export default GateSuccessPage
