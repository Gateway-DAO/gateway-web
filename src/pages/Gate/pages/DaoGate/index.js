// Components
import BackButtonDiv from './components/BackButtonDiv'
import NftBadge from './components/NftBadge'
import Loader from '../../../../components/Loader'

// Styling
import * as Styled from './style'

// Hooks
import { useNavigate, useOutletContext } from 'react-router-dom'

/**
 * This is the gate page of the DAO. It shows the logo of the dao, the name of the dao, the heading,
 * the subheading, the tags, the header line, the second div, the third div and the start button.
 * @param props - the props passed to the component
 * @returns A styled component that renders the component.
 */
const DaoGate = (props) => {
    const { gateData, loading, loaded } = useOutletContext()
    const dao = gateData.dao
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('add-key')
    }

    if (loading && !loaded) {
        return (
            <Styled.LoaderBox>
                <Loader color="white" size={35} />
            </Styled.LoaderBox>
        )
    }
    else if (loaded) {
        return (
            <Styled.Wrapper>
                <BackButtonDiv />
                <Styled.ContentWrapper>
                    <NftBadge nft={gateData.badge} />
                    <Styled.MainContent>
                        <Styled.FirstDiv>
                            <Styled.SmallLogo src={dao.logoURL} />
                            <Styled.SmallText>{dao.name}</Styled.SmallText>
                        </Styled.FirstDiv>
                        <Styled.HeadingDiv>
                            {gateData.name}
                        </Styled.HeadingDiv>
                        <Styled.Subheading>{gateData.description}</Styled.Subheading>
                        <Styled.TagsDiv>
                            {gateData.categories.map(category => <Styled.Tag>{category}</Styled.Tag>)}• 27 applicants
                        </Styled.TagsDiv>
                        <Styled.HeaderLine />
                        <Styled.SecondDiv>
                            <Styled.SecondDivName>Keys</Styled.SecondDivName>
                            <Styled.AnotherDiv>
                                <Styled.Circle />
                                <Styled.ProgressInfoDiv>
                                    <Styled.ProgressInfoDivOne>
                                        Progress
                                    </Styled.ProgressInfoDivOne>
                                    <Styled.ProgressInfoDivTwo>
                                        0 of {gateData.keysNumber}
                                    </Styled.ProgressInfoDivTwo>
                                </Styled.ProgressInfoDiv>
                            </Styled.AnotherDiv>
                        </Styled.SecondDiv>
                        <Styled.ThirdDiv>
                            <Styled.Box>
                                <Styled.BigText>
                                    Now let’s create the Keys of your Gate.
                                </Styled.BigText>
                                <Styled.StartButton onClick={handleClick}>
                                    <Styled.ButtonText>
                                        Start Now
                                    </Styled.ButtonText>
                                </Styled.StartButton>
                            </Styled.Box>
                        </Styled.ThirdDiv>
                    </Styled.MainContent>
                </Styled.ContentWrapper>
            </Styled.Wrapper>
        )
    }
    else {
        return null
    }
}

export default DaoGate
