// Components
import BackButtonDiv from './components/BackButtonDiv';
import NftBadge from './components/NftBadge';
import Loader from '../../../../components/Loader';
import KeyBox from './components/KeyBox';
import { CircularProgressbar } from 'react-circular-progressbar';
import { GradientSVG } from '../../../../components/ProgressCircle';
import { Link, Navigate } from 'react-router-dom';

// Styling
import * as Styled from './style';

// Hooks
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useGateAdmin } from '../../../../hooks/useAdmin';

// Types
import { DAO, Gate, Key, TaskStatus, User } from '../../../../graphql/API';
import { useAuth } from '../../../../contexts/UserContext';

/* This is a type definition for the GateData interface. It is used to make sure that the data that is
passed to the component is of the correct type. */
interface GateData extends Gate {
    holders: number;
    keysDone: number;
    keysNumber: number;
    taskStatus: TaskStatus[];
    adminList: User[];
    preRequisitesList: Gate[];
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

    const { userInfo }: Record<string, any> = useAuth();
    const { isAdmin } = useGateAdmin(gateData.admins);

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
        if (
            !isAdmin &&
            (gateData.published == 'NOT_PUBLISHED' ||
                gateData.published == 'PAUSED')
        ) {
            return <Navigate to='/404' />;
        }

        return (
            <Styled.Wrapper>
                <BackButtonDiv
                    url={`/dao/${dao.id}?tab=gates`}
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
                                    {gateData.adminList.map((admin) => {
                                        return (
                                            <Link
                                                to={`/profile/${admin.username}`}
                                            >
                                                <Styled.PfpAdmin
                                                    src={admin.pfp}
                                                />
                                            </Link>
                                        );
                                    })}
                                </Styled.ContentContainer>
                            </Styled.AdminsBox>
                            {gateData.preRequisitesList.length > 0 && (
                                <Styled.PreRequisiteBox>
                                    <Styled.BoldTextHeading>
                                        PRE REQUISITE
                                    </Styled.BoldTextHeading>
                                    <Styled.ContentContainer>
                                        {gateData.preRequisitesList.map(
                                            (gate) => (
                                                <Styled.InsideLink
                                                    to={`/gate/${gate.id}`}
                                                >
                                                    {gate.badge.name} ⬈
                                                </Styled.InsideLink>
                                            )
                                        )}
                                    </Styled.ContentContainer>
                                </Styled.PreRequisiteBox>
                            )}
                            <Styled.LinksContainer>
                                <Styled.BoldTextHeading>
                                    LINKS
                                </Styled.BoldTextHeading>
                                <Styled.ContentContainer>
                                    {gateData.links.length > 0 &&
                                        gateData.links.map((link) => {
                                            return (
                                                <Styled.OutsideLink
                                                    href={link.link}
                                                    target='_blank'
                                                >
                                                    {link.name} ⬈
                                                </Styled.OutsideLink>
                                            );
                                        })}
                                    {isAdmin && (
                                        <Styled.InsideLink
                                            to={`${
                                                gateData.links.length > 0
                                                    ? 'edit'
                                                    : 'add'
                                            }-links`}
                                        >
                                            {gateData.links.length > 0
                                                ? 'Edit'
                                                : 'Add'}{' '}
                                            Links ⬈
                                        </Styled.InsideLink>
                                    )}
                                </Styled.ContentContainer>
                            </Styled.LinksContainer>
                        </Styled.AdditionalInfoBox>
                        <Styled.HeaderLine />
                        {gateData?.keysNumber !== 0 && (
                            <Styled.SecondDiv>
                                <Styled.SecondDivName>
                                    Keys
                                </Styled.SecondDivName>
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
                        )}
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
