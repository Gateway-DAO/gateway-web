import * as Styled from './style';
import { useState } from 'react';
import React from 'react';
import parser from 'html-react-parser';

// import useAdmin from '../../../../hooks/useAdmin';

// Modals
import BountyModal from '../../../Modal/BountyModal';
import TokenBenefitModal from '../../../Modal/TokenBenefitModal';
import HowtoJoinModal from '../../../Modal/HowtoJoinModal';
import FAQModal from '../../../Modal/FAQModal';
import WDWDModal from '../../../Modal/WDWDModal';
import UHModal from '../../../Modal/UHModal';
import AccomplishmentModal from '../../../Modal/AccomplishmentModal';
import MVModal from '../../../Modal/MVModal';
import EditCardModal from '../../../Modal/EditCardModal';
import ShowBountyModal from '../../../Modal/ShowBountyModal';
import SnapshotModal from '../../../Modal/SnapshotModal';
//  styling
import Collapsible from '../../../Collapsible';

// card
import FAQCard from '../../../FAQCard';
import WDWDCard from '../../../WDWDCard';
import TokenBenefitCard from '../../../TokenBenefitCard';
import HTJCard from '../../../HTJCard';
import BountyCard from '../../../BountyCard';

// column second import
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import { shortenAddress } from '../../../../utils/web3';
import { ytVideoID } from '../../../../utils/functions';

import RelatedDAOSection from '../../components/RelatedDAO';

const Profile = (props) => {
    // const { isAdmin } = useAdmin(props.whitelistedAddresses);
    const [bounties, setBounties] = useState(props.bounties.items || []);
    const [benefits, setBenefits] = useState(props.tokenBenefits.items || []);
    const [HTJ, setHTJ] = useState(props.howToJoin || '');
    const [WDWD, setWDWD] = useState(props.whatDoWeDo || '');
    const [UH, setUH] = useState(props.upcomingHangouts || '');
    const [MV, setMV] = useState(props.missionAndVision || '');
    const [ACC, setACC] = useState(props.accomplishments || '');
    const [FAQ, setFAQ] = useState(props.faq || []);
    

    // Show modals
    const [showBountyModal, setShowBountyModal] = useState(false);
    const [showBountyInfo, setShowBountyInfo] = useState({
        bounty: bounties ? bounties[0] : {},
        show: false,
    });
    const [showTBModal, setShowTBModal] = useState(false);
    const [showHTJModal, setShowHTJModal] = useState(false);
    const [showFAQModal, setShowFAQModal] = useState(false);
    const [showWDWDModal, setShowWDWDModal] = useState(false);
    const [showUHModal, setShowUHModal] = useState(false);
    const [showAccomplishmentModal, setShowAccomplishmentModal] =
        useState(false);
    const [showMVModal, setShowMVModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    let youtubeID = props.youtubeURL ? ytVideoID(props.youtubeURL) : null;

    const toggleBountyModal = () => setShowBountyModal(!showBountyModal);
    const toggleBountyInfoModal = (idx) =>
        setShowBountyInfo({
            bounty: bounties[idx],
            show: !showBountyInfo.show,
        });
    const toggleTBModal = () => setShowTBModal(!showTBModal);
    const toggleHTJModal = () => setShowHTJModal(!showHTJModal);
    const toggleFAQModal = () => setShowFAQModal(!showFAQModal);
    const toggleWDWDModal = () => setShowWDWDModal(!showWDWDModal);
    const toggleUHModal = () => setShowUHModal(!showUHModal);
    const toggleAccomplishmentModal = () =>
        setShowAccomplishmentModal(!showAccomplishmentModal);
    const toggleMVModal = () => setShowMVModal(!showMVModal);
    const toggleEditModal = () => setShowEditModal(!showEditModal);
    // console.log('Profile: ', props.viewAsMember);
    const Modals = () => (
        <>
            {/* Modals */}
            <HowtoJoinModal
                id={props.id}
                show={showHTJModal}
                toggle={toggleHTJModal}
                data={HTJ || [{ description: '' }]}
                set={(newHTJ) => setHTJ(newHTJ)}
            />
            <WDWDModal
                id={props.id}
                show={showWDWDModal}
                toggle={toggleWDWDModal}
                data={WDWD}
                set={(newWDWD) => setWDWD(newWDWD)}
            />
            <AccomplishmentModal
                id={props.id}
                show={showAccomplishmentModal}
                toggle={toggleAccomplishmentModal}
                data={ACC}
                set={(newACC) => setACC(newACC)}
            />
            <MVModal
                id={props.id}
                show={showMVModal}
                toggle={toggleMVModal}
                data={MV}
                set={setMV}
                changeDAOData={props.changeDAOData}
            />
            <UHModal
                id={props.id}
                show={showUHModal}
                toggle={toggleUHModal}
                data={UH}
                set={(newUH) => setUH(newUH)}
            />
            <BountyModal
                id={props.id}
                show={showBountyModal}
                toggle={toggleBountyModal}
                data={bounties}
                set={(newBounties) => setBounties(newBounties)}
            />
            <TokenBenefitModal
                id={props.id}
                show={showTBModal}
                toggle={toggleTBModal}
                data={benefits}
                set={(newTB) => setBenefits(newTB)}
            />
            <FAQModal
                id={props.id}
                show={showFAQModal}
                toggle={toggleFAQModal}
                data={FAQ}
                set={(newFAQ) => setFAQ(newFAQ)}
            />
            {showBountyInfo.bounty && (
                <ShowBountyModal
                    bounty={showBountyInfo.bounty}
                    show={showBountyInfo.show}
                    toggle={() => setShowBountyInfo(!showBountyInfo)}
                />
            )}
            {React.createElement(EditCardModal, {
                ...props,
                show: showEditModal,
                toggle: toggleEditModal,
                changeDAOData: props.changeDAOData,
            })}
        </>
    );

    return (
        <Styled.Container>
            <Modals />
            <Styled.DAOContainer>
                <Styled.DivideContainer>
                    <Styled.ColumnOne fullWidth={!props.tokenAddress}>
                        <Styled.Description>
                            {parser(props.description)}
                        </Styled.Description>
                        <Styled.DivContainer>
                            {props.youtubeURL && youtubeID && (
                                <Styled.YoutubeVideoContainer>
                                    <iframe
                                        width='90%'
                                        height='520'
                                        src={`https://www.youtube-nocookie.com/embed/${youtubeID}`}
                                        title='YouTube video player'
                                        frameBorder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen
                                    ></iframe>
                                </Styled.YoutubeVideoContainer>
                            )}
                            <Collapsible title='What Do We Do?'>
                                <Styled.CollapsibleChildren>
                                    {!props.viewAsMember && (
                                        <Styled.Button
                                            onClick={toggleWDWDModal}
                                        >
                                            Change Information
                                        </Styled.Button>
                                    )}

                                    {WDWD && <WDWDCard data={WDWD} />}
                                </Styled.CollapsibleChildren>
                            </Collapsible>
                            <Collapsible title='Mission and Vision'>
                                <Styled.CollapsibleChildren>
                                    {!props.viewAsMember && (
                                        <Styled.Button onClick={toggleMVModal}>
                                            Change Information
                                        </Styled.Button>
                                    )}

                                    {MV && <WDWDCard data={MV} />}
                                </Styled.CollapsibleChildren>
                            </Collapsible>
                            <Collapsible title='Accomplishments'>
                                <Styled.CollapsibleChildren>
                                    {!props.viewAsMember && (
                                        <Styled.Button
                                            onClick={toggleAccomplishmentModal}
                                        >
                                            Change Information
                                        </Styled.Button>
                                    )}

                                    {ACC && <WDWDCard data={ACC} />}
                                </Styled.CollapsibleChildren>
                            </Collapsible>
                            <Collapsible title='Frequently Asked Questions'>
                                <Styled.CollapsibleChildren>
                                    {!props.viewAsMember && (
                                        <Styled.Button onClick={toggleFAQModal}>
                                            Add Questions
                                        </Styled.Button>
                                    )}

                                    {FAQ.length != 0 && <FAQCard faq={FAQ} />}
                                </Styled.CollapsibleChildren>
                            </Collapsible>
                            {props.tokenAddress && (
                                <Collapsible title='Token Benefits/Utility'>
                                    <Styled.CollapsibleChildren>
                                        {!props.viewAsMember && (
                                            <Styled.Button
                                                onClick={toggleTBModal}
                                            >
                                                Add Token Benefit
                                            </Styled.Button>
                                        )}

                                        {benefits &&
                                            benefits.map((benefit, idx) => {
                                                return (
                                                    <TokenBenefitCard
                                                        id={props.id}
                                                        tbs={benefits}
                                                        idx={idx}
                                                        set={(newTBs) =>
                                                            setBenefits(newTBs)
                                                        }
                                                        admin={
                                                            !props.viewAsMember
                                                        }
                                                    />
                                                );
                                            })}
                                    </Styled.CollapsibleChildren>
                                </Collapsible>
                            )}
                            <Collapsible title='Upcoming Hangouts'>
                                <Styled.CollapsibleChildren>
                                    {!props.viewAsMember && (
                                        <Styled.Button onClick={toggleUHModal}>
                                            Change Information
                                        </Styled.Button>
                                    )}

                                    {UH && <WDWDCard data={UH} />}
                                </Styled.CollapsibleChildren>
                            </Collapsible>
                            <Collapsible title='How To Contribute?'>
                                <Styled.CollapsibleChildren>
                                    {!props.viewAsMember && (
                                        <Styled.Button onClick={toggleHTJModal}>
                                            Add Steps
                                        </Styled.Button>
                                    )}

                                    {!!HTJ.length && <HTJCard steps={HTJ} />}
                                </Styled.CollapsibleChildren>
                            </Collapsible>

                            <Collapsible title='Bounties'>
                                <Styled.CollapsibleChildren>
                                    {!props.viewAsMember && (
                                        <Styled.Button
                                            onClick={toggleBountyModal}
                                        >
                                            Add Bounty
                                        </Styled.Button>
                                    )}

                                    {bounties &&
                                        bounties.map((bounty, idx) => {
                                            return (
                                                <React.Fragment key={idx}>
                                                    <BountyCard
                                                        id={props.id}
                                                        bounties={bounties}
                                                        idx={idx}
                                                        set={(newBounties) =>
                                                            setBounties(
                                                                newBounties
                                                            )
                                                        }
                                                        admin={
                                                            !props.viewAsMember
                                                        }
                                                        showInfo={
                                                            toggleBountyInfoModal
                                                        }
                                                    />
                                                </React.Fragment>
                                            );
                                        })}
                                </Styled.CollapsibleChildren>
                            </Collapsible>
                            <Collapsible title='Governance Proposals'>
                                <SnapshotModal id={props.snapshotID} />
                            </Collapsible>
                        </Styled.DivContainer>
                    </Styled.ColumnOne>
                    {props.tokenAddress && props.showTokenFeed && (
                        <Styled.ColumnTwo>
                            <Styled.TokenFeed>
                                <Styled.TokenName>
                                    ${props.symbol.toUpperCase()}
                                </Styled.TokenName>
                                <Styled.PriceContainer>
                                    <Styled.TokenPrice>
                                        $
                                        {Number(props.tokenFeed.price).toFixed(
                                            2
                                        )}
                                    </Styled.TokenPrice>
                                    <Styled.PercentageText
                                        color={
                                            props.tokenFeed.change24h > 0
                                                ? '#72B841'
                                                : '#EE787B'
                                        }
                                    >
                                        {props.tokenFeed.change24h > 0 ? (
                                            <RiArrowUpSFill />
                                        ) : (
                                            <RiArrowDownSFill />
                                        )}
                                        {props.tokenFeed.change24h.toLocaleString(
                                            'en-US',
                                            {
                                                maximumFractionDigits: 1,
                                            }
                                        )}
                                        %
                                    </Styled.PercentageText>
                                    <Styled.Text color='#A5A5A5'>
                                        24h
                                    </Styled.Text>
                                </Styled.PriceContainer>
                                <Styled.PastWeekContainer>
                                    <Styled.PercentageText
                                        color={
                                            props.tokenFeed.change7d > 0
                                                ? '#72B841'
                                                : '#EE787B'
                                        }
                                    >
                                        {props.tokenFeed.change7d > 0 ? (
                                            <RiArrowUpSFill />
                                        ) : (
                                            <RiArrowDownSFill />
                                        )}
                                        {props.tokenFeed.change7d.toLocaleString(
                                            'en-US',
                                            {
                                                maximumFractionDigits: 1,
                                            }
                                        )}
                                        %
                                    </Styled.PercentageText>
                                    <Styled.Text color='#A5A5A5'>
                                        Past Week
                                    </Styled.Text>
                                </Styled.PastWeekContainer>
                                <Styled.TokenFeedData>
                                    <Styled.Text>All-time High</Styled.Text>
                                    <Styled.TextRight>
                                        {props.tokenFeed.ath.toLocaleString(
                                            'en-US',
                                            {
                                                style: 'currency',
                                                currency: 'USD',
                                            }
                                        )}
                                    </Styled.TextRight>
                                    <Styled.Text>All-time Low</Styled.Text>
                                    <Styled.TextRight>
                                        {props.tokenFeed.atl.toLocaleString(
                                            'en-US',
                                            {
                                                style: 'currency',
                                                currency: 'USD',
                                            }
                                        )}
                                    </Styled.TextRight>
                                    <Styled.Text>Market Cap</Styled.Text>
                                    <Styled.TextRight>
                                        {props.tokenFeed.marketCap.toLocaleString(
                                            'en-US',
                                            {
                                                style: 'currency',
                                                currency: 'USD',
                                            }
                                        )}
                                    </Styled.TextRight>
                                    <Styled.Text>Current Supply</Styled.Text>
                                    <Styled.TextRight>
                                        {props.tokenFeed.circulatingSupply.toLocaleString(
                                            'en-US'
                                        )}
                                    </Styled.TextRight>
                                    <Styled.Text>Total Supply</Styled.Text>
                                    <Styled.TextRight>
                                        {props.tokenFeed.totalSupply.toLocaleString(
                                            'en-US'
                                        )}
                                    </Styled.TextRight>
                                    <Styled.Text>Contract</Styled.Text>
                                    <Styled.TextRight>
                                        {shortenAddress(
                                            props.tokenAddress,
                                            3,
                                            3
                                        )}
                                    </Styled.TextRight>
                                    <Styled.Text>Explorer</Styled.Text>
                                    <Styled.StyledExplorerLinkRight
                                        href={`https://etherscan.io/token/${props.tokenAddress}`}
                                    >
                                        Etherscan
                                    </Styled.StyledExplorerLinkRight>
                                </Styled.TokenFeedData>
                                <Styled.TradeButton
                                    href={`https://app.uniswap.org/#/swap?outputCurrency=${props.tokenAddress}&exactField=output`}
                                    target='_blank'
                                >
                                    TRADE
                                </Styled.TradeButton>
                            </Styled.TokenFeed>
                        </Styled.ColumnTwo>
                    )}
                </Styled.DivideContainer>
                <RelatedDAOSection
                    categories={props.categories}
                    name={props.name}
                />
            </Styled.DAOContainer>
        </Styled.Container>
    );
};

export default Profile;
