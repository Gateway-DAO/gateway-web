// Components
import BackButtonDiv from './components/BackButtonDiv';
import NftBadge from './components/NftBadge';
import Loader from '../../../../components/Loader';
import KeyBox from './components/KeyBox';
import { CircularProgressbar } from 'react-circular-progressbar';
import { GradientSVG } from '../../../../components/ProgressCircle';

// Styling
import * as Styled from './style';

// Hooks
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useGateAdmin } from '../../../../hooks/useAdmin';

// Types
import { DAO, Gate, Key, TaskStatus } from '../../../../graphql/API';
import { useEffect } from 'react';

/* This is a type definition for the GateData interface. It is used to make sure that the data that is
passed to the component is of the correct type. */
interface GateData extends Gate {
    holders: number;
    keysDone: number;
    keysNumber: number;
    taskStatus: TaskStatus[];
}

/**
 * This is the gate page of the DAO. It shows the logo of the dao, the name of the dao, the heading,
 * the subheading, the tags, the header line, the second div, the third div and the start button.
 * @param props - the props passed to the component
 * @returns A styled component that renders the component.
 */

const DaoGate: React.FC = () => {
    const {
        gateData,
        loading,
        loaded,
    }: { gateData: GateData; loading: boolean; loaded: boolean } =
        useOutletContext();
    const dao: DAO = gateData.dao;
    const navigate = useNavigate();
    const { isAdmin } = useGateAdmin(gateData.admins);

    useEffect(() => {
        console.log('Component mounted');
        if (gateData.keysDone == gateData.keysNumber + 1000) {
            console.log(gateData.keysDone);
            navigate('gate-success');
        }
        return () => {
            console.log('Component will be unmount');
        };
    }, []);

    const handleClick = () => {
        navigate('add-key');
    };

    if (loading && !loaded) {
        return (
            <Styled.LoaderBox>
                <Loader color='white' size={35} />
            </Styled.LoaderBox>
        );
    } else if (loaded) {
        return (
            <Styled.Wrapper>
                <BackButtonDiv
                    url={`/dao/${dao.name}?tab=gates`}
                    published={gateData.published}
                    id={gateData.id}
                    daoData={dao}
                    gateData={gateData}
                >
                    Back to DAO Gates
                </BackButtonDiv>
                <GradientSVG idCSS='circleGradient' />
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
                            {gateData.categories.map((category: string) => (
                                <Styled.Tag>{category}</Styled.Tag>
                            ))}
                            • {gateData.holders} holder(s)
                        </Styled.TagsDiv>
                        <Styled.AdditionalInfoBox>
                            <Styled.AdminsBox>
                                <Styled.BoldTextHeading>
                                    ADMINS
                                </Styled.BoldTextHeading>
                                <Styled.ContentContainer>
                                    <Styled.PfpAdmin />
                                    <Styled.PfpAdmin />
                                </Styled.ContentContainer>
                            </Styled.AdminsBox>
                            <Styled.PreRequisiteBox>
                                <Styled.BoldTextHeading>
                                    PRE REQUISITE
                                </Styled.BoldTextHeading>
                                <Styled.ContentContainer>
                                    <Styled.InfoText>
                                        Gateway.DAO.Verification ⬈
                                    </Styled.InfoText>
                                </Styled.ContentContainer>
                            </Styled.PreRequisiteBox>
                            <Styled.LinksContainer>
                                <Styled.BoldTextHeading>
                                    LINKS
                                </Styled.BoldTextHeading>
                                <Styled.ContentContainer>
                                    <Styled.InfoText>
                                        DAO Deck ⬈
                                    </Styled.InfoText>
                                    <Styled.InfoText>
                                        Brand Assets ⬈
                                    </Styled.InfoText>
                                    <Styled.InfoText>FAQ ⬈</Styled.InfoText>
                                </Styled.ContentContainer>
                            </Styled.LinksContainer>
                        </Styled.AdditionalInfoBox>
                        <Styled.HeaderLine />
                        <Styled.SecondDiv>
                            <Styled.SecondDivName>Keys</Styled.SecondDivName>
                            <Styled.AnotherDiv>
                                <Styled.CircleBox>
                                    <CircularProgressbar
                                        value={gateData.keysDone}
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
                                        {gateData.keysDone} of{' '}
                                        {gateData.keysNumber}
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
                            {gateData?.keys?.items?.map((key: Key) => {
                                if (
                                    !isAdmin &&
                                    !key.unlimited &&
                                    key.peopleLimit === 0
                                ) {
                                    return null;
                                }

                                return (
                                    <KeyBox
                                        data={key}
                                        gateData={gateData}
                                        blocked={
                                            gateData.taskStatus.length > 0
                                                ? gateData.taskStatus
                                                      .map(
                                                          (ts: TaskStatus) =>
                                                              ts.keyID
                                                      )
                                                      .includes(key.id)
                                                : false
                                        }
                                    />
                                );
                            })}
                        </Styled.ThirdDiv>
                    </Styled.MainContent>
                </Styled.ContentWrapper>
            </Styled.Wrapper>
        );
    } else {
        return null;
    }
};

export default DaoGate;
