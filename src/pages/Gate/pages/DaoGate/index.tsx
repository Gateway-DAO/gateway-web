// Components
import BackButtonDiv from './components/BackButtonDiv';
import NftBadge from './components/NftBadge';
import KeyBox from './components/KeyBox';
import { CircularProgressbar } from 'react-circular-progressbar';
import { GradientSVG } from '../../../../components/ProgressCircle';
import { Link, Navigate } from 'react-router-dom';

// Styling
import * as Styled from './style';

// Hooks
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-use';

// Types
import { Daos, Gates, Keys, Key_Progress, Users } from '../../../../graphql';
import { PartialDeep } from 'type-fest';

/* This is a type definition for the GateData interface. It is used to make sure that the data that is
passed to the component is of the correct type. */
interface GateData extends Gates {
    keysDone: number;
    keysNumber: number;
    taskStatus: Key_Progress[];
    adminList: Users[];
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
        isEditor
    }: { gateData: GateData; isEditor: boolean; } =
        useOutletContext();
    const dao: PartialDeep<Daos> = gateData.dao;
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const toSearch = params.get('toSearch');
    const viewAsMember = params.get('viewAsMember');

    const goBackURL = toSearch && toSearch === 'true' ? `/search/daos` : viewAsMember ? `/dao/${dao?.slug}?tab=gates&viewAsMember=${viewAsMember}` : `/dao/${dao?.slug}?tab=gates`;

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
                        <Styled.SmallLogo src={dao?.logo_url} />
                        <Styled.SmallText>{dao?.name}</Styled.SmallText>
                    </Styled.FirstDiv>
                    <Styled.HeadingDiv>{gateData.gate_name}</Styled.HeadingDiv>
                    <Styled.Subheading>
                        {gateData?.description}
                    </Styled.Subheading>
                    <Styled.TagsDiv>
                        {gateData?.categories?.map(
                            (category: string, idx: number) => (
                                <Styled.Tag key={idx}>{category}</Styled.Tag>
                            )
                        )}
                        Completed by {gateData.holders} holder(s)
                    </Styled.TagsDiv>
                    <Styled.HeaderLine />
                    <Styled.SecondDiv>
                        <Styled.SecondDivName>Tasks</Styled.SecondDivName>
                    </Styled.SecondDiv>
                    <Styled.ThirdDiv>
                        {isEditor && (
                            <Styled.Box>
                                <Styled.BigText>
                                    Let???s create the tasks for your Gate.
                                </Styled.BigText>
                                <Styled.StartButton onClick={handleClick}>
                                    <Styled.ButtonText>
                                        Start Now
                                    </Styled.ButtonText>
                                </Styled.StartButton>
                            </Styled.Box>
                        )}
                        {gateData.tasks.map((key: Keys, idx: number) => {
                            if (
                                gateData.taskStatus
                                    .map((ts: Key_Progress) => ts.key_id)
                                    .includes(key.id) ||
                                isEditor
                            ) {
                                return (
                                    <KeyBox
                                        key={idx}
                                        data={key}
                                        gateData={gateData}
                                        blocked={
                                            gateData?.taskStatus?.length > 0
                                                ? gateData.taskStatus
                                                    .map(
                                                        (ts: Key_Progress) =>
                                                            ts.key_id
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
