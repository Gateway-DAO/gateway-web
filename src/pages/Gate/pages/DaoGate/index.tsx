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
import { useLocation } from 'react-use';

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
        isAdmin
    }: { gateData: GateData; isAdmin: boolean; } =
        useOutletContext();
    const dao: DAO = gateData.dao;
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const toSearch = params.get('toSearch');
    const viewAsMember = params.get('viewAsMember');

    const goBackURL = toSearch && toSearch === 'true' ? `/search/daos` : viewAsMember ? `/dao/${dao.dao}?tab=gates&viewAsMember=${viewAsMember}` : `/dao/${dao.dao}?tab=gates`;

    const handleClick = () => {
        navigate('add-key');
    };

    return (
        <Styled.Wrapper>
            <BackButtonDiv
                url={goBackURL}
                published={gateData.published}
                id={gateData.id}
                daoData={dao}
                gateData={gateData}
                state={toSearch && toSearch === 'true' && { tab: 'Gates' }}
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
                        {gateData.categories.map(
                            (category: string, idx: number) => (
                                <Styled.Tag key={idx}>{category}</Styled.Tag>
                            )
                        )}
                        • {gateData.holders} holder(s)
                    </Styled.TagsDiv>
                    <Styled.AdditionalInfoBox>
                        <Styled.AdminsBox>
                            <Styled.BoldTextHeading>
                                ADMINS
                            </Styled.BoldTextHeading>
                            <Styled.ContentContainer>
                                {gateData.adminList.map((admin, idx) => {
                                    return (
                                        <Link
                                            to={`/profile/${admin.username}`}
                                            key={idx}
                                        >
                                            <Styled.PfpAdmin
                                                src={admin.pfp}
                                                data-title={admin.name}
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
                                    {gateData.preRequisitesList.map((gate, idx) => (
                                        <Styled.InsideLink
                                            key={idx}
                                            to={`/gate/${gate.id}`}
                                        >
                                            {gate.badge.name} ⬈
                                        </Styled.InsideLink>
                                    ))}
                                </Styled.ContentContainer>
                            </Styled.PreRequisiteBox>
                        )}
                        <Styled.LinksContainer>
                            <Styled.BoldTextHeading>
                                LINKS
                            </Styled.BoldTextHeading>
                            <Styled.ContentContainer>
                                {gateData.links.length > 0 &&
                                    gateData.links.map((link, idx) => {
                                        return (
                                            <Styled.OutsideLink
                                                key={idx}
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
                        {gateData?.keys?.items?.map((key: Key, idx: number) => {
                            const LIMIT_REACHED =
                                !key.unlimited && key.peopleLimit === 0;

                            if (
                                !LIMIT_REACHED ||
                                gateData.taskStatus
                                    .map((ts: TaskStatus) => ts.keyID)
                                    .includes(key.id) ||
                                isAdmin
                            ) {
                                return (
                                    <KeyBox
                                        key={idx}
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
                            } else return null;
                        })}
                    </Styled.ThirdDiv>
                </Styled.MainContent>
            </Styled.ContentWrapper>
        </Styled.Wrapper>
    );
};

export default DaoGate;
