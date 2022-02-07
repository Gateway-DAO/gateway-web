// Components
import BackButtonDiv from './components/BackButtonDiv'
import NftBadge from './components/NftBadge'
import Loader from '../../../../components/Loader'
import KeyBox from './components/KeyBox'
import { CircularProgressbar } from 'react-circular-progressbar'
import { GradientSVG } from '../../../../components/ProgressCircle'

// Styling
import * as Styled from './style'

// Hooks
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useGateAdmin } from '../../../../hooks/useAdmin'
import { useGetTaskStatusByUserID } from '../../../../api/database/useGetTaskStatus'
import { useAuth } from '../../../../contexts/UserContext'
import { useEffect, useState } from 'react'

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
    const { isAdmin } = useGateAdmin(gateData.admins)
    const { userInfo } = useAuth()

    const {
        data,
        loading: taskStatusLoading,
        error,
    } = useGetTaskStatusByUserID(userInfo ? userInfo?.id : '', {
        filter: {
            gateID: {
                eq: gateData.id,
            },
        },
    })

    const [keysDone, setKeysDone] = useState(0)

    useEffect(() => {
        if (data) {
            setKeysDone(
                data.getTaskStatusByUserID !== null
                    ? data.getTaskStatusByUserID.items
                          .map((ts) => ts.key.keys)
                          .reduce((sum, el) => sum + el, 0)
                    : 0
            )
        }
    }, [data])

    const handleClick = () => {
        navigate('add-key')
    }

    if (loading && !loaded) {
        return (
            <Styled.LoaderBox>
                <Loader color="white" size={35} />
            </Styled.LoaderBox>
        )
    } else if (loaded) {
        return (
            <Styled.Wrapper>
                <BackButtonDiv />
                <GradientSVG idCSS="circleGradient" />
                <Styled.ContentWrapper>
                    <NftBadge nft={gateData.badge} />
                    <Styled.MainContent>
                        <Styled.FirstDiv>
                            <Styled.SmallLogo src={dao.logoURL} />
                            <Styled.SmallText>{dao.name}</Styled.SmallText>
                        </Styled.FirstDiv>
                        <Styled.HeadingDiv>{gateData.name}</Styled.HeadingDiv>
                        <Styled.Subheading>
                            {gateData.description}
                        </Styled.Subheading>
                        <Styled.TagsDiv>
                            {gateData.categories.map((category) => (
                                <Styled.Tag>{category}</Styled.Tag>
                            ))}
                            • 27 holders
                        </Styled.TagsDiv>
                        <Styled.HeaderLine />
                        <Styled.SecondDiv>
                            <Styled.SecondDivName>Keys</Styled.SecondDivName>
                            <Styled.AnotherDiv>
                                <Styled.CircleBox>
                                    <CircularProgressbar
                                        value={keysDone}
                                        minValue={0}
                                        maxValue={gateData.keysNumber}
                                        strokeWidth={15}
                                    />
                                </Styled.CircleBox>
                                <Styled.ProgressInfoDiv>
                                    <Styled.ProgressInfoDivOne>
                                        Keys
                                    </Styled.ProgressInfoDivOne>
                                    <Styled.ProgressInfoDivTwo>
                                        {keysDone} of {gateData.keysNumber}
                                    </Styled.ProgressInfoDivTwo>
                                </Styled.ProgressInfoDiv>
                            </Styled.AnotherDiv>
                        </Styled.SecondDiv>
                        <Styled.ThirdDiv>
                            {isAdmin && (
                                <Styled.Box>
                                    <Styled.BigText>
                                        Let’s create the Keys for your Gate.
                                    </Styled.BigText>
                                    <Styled.StartButton onClick={handleClick}>
                                        <Styled.ButtonText>
                                            Start Now
                                        </Styled.ButtonText>
                                    </Styled.StartButton>
                                </Styled.Box>
                            )}
                            {gateData.keys.items.map((key) => (
                                <KeyBox
                                    data={key}
                                    gateData={gateData}
                                    blocked={
                                        data &&
                                        data.getTaskStatusByUserID !== null
                                            ? data.getTaskStatusByUserID.items
                                                  .map((ts) => ts.key.id)
                                                  .includes(key.id)
                                            : false
                                    }
                                />
                            ))}
                        </Styled.ThirdDiv>
                    </Styled.MainContent>
                </Styled.ContentWrapper>
            </Styled.Wrapper>
        )
    } else {
        return null
    }
}

export default DaoGate
