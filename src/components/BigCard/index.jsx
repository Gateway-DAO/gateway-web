import { FiGlobe } from 'react-icons/fi'
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
import {
    FaDiscord,
    FaTwitter,
    FaMedium,
    FaGithub,
    FaLink,
} from 'react-icons/fa'
import { TwitterShareButton, TelegramShareButton } from "react-share";
import { BsChatTextFill } from 'react-icons/bs'
import { useWeb3React } from '@web3-react/core'
import { shortenAddress } from '../../utils/web3'
import { useEffect, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import Collapsible from '../Collapsible'
import * as Styled from './style'
import { Link } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin'
import BountyModal from '../Modal/BountyModal'
import TokenBenefitModal from '../Modal/TokenBenefitModal'
import HowtoJoinModal from '../Modal/HowtoJoinModal'
import FAQModal from '../Modal/FAQModal'
import WDWDModal from '../Modal/WDWDModal'
import BountyCard from '../BountyCard'
import { useHistory } from "react-router";
import HTJCard from '../HTJCard'

const BigCard = (props) => {
    const web3 = useWeb3React()
    const [balance, setBalance] = useState(BigNumber.from(0))
    const { isAdmin } = useAdmin(props.whitelistedAddresses)

    // Data
    const [bounties, setBounties] = useState(props.bounties)
    const [HTJ, setHTJ] = useState(props.howToJoin)

    // Show modals
    const [showBountyModal, setShowBountyModal] = useState(false)
    const [showTBModal, setShowTBModal] = useState(false)
    const [showHTJModal, setShowHTJModal] = useState(false)
    const [showFAQModal, setShowFAQModal] = useState(false)
    const [showWDWDModal, setShowWDWDModal] = useState (false)

    useEffect(() => {
        if (props.tokenAddress) {
            const getBalance = async (tokenAddress) =>
                web3.active &&
                web3.library &&
                setBalance(await web3.library.getBalance(tokenAddress))
                
            getBalance(props.tokenAddress)
        }
    }, [web3.active])

    const history = useHistory()

    const navigate = e => {
        history.push(`/`)
    }

    const socials = Object.keys(props.socials).map((key) => {
        switch (key) {
            case 'discord':
                return (
                    <Styled.Social>
                        <FaDiscord />
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            Discord
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'twitter':
                return (
                    <Styled.Social>
                        <FaTwitter />
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            Twitter
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'website':
                return (
                    <Styled.Social>
                        <FiGlobe />
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            Website
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'medium':
                return (
                    <Styled.Social>
                        <FaMedium />
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            Medium
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'github':
                return (
                    <Styled.Social>
                        <FaGithub />
                        <Styled.SocialLink
                            href={props.socials[key]}
                            target="_blank"
                        >
                            GitHub
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            case 'chat':
                return (
                    <Styled.Social>
                        <BsChatTextFill />
                        <Styled.SocialLink href={props.socials[key]}>
                            Chat
                        </Styled.SocialLink>
                    </Styled.Social>
                )
            default:
                return (
                    <Styled.Social>
                        <FaLink />
                        <Styled.SocialLink href={props.socials[key]}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Styled.SocialLink>
                    </Styled.Social>
                )
        }
    })

    const toggleBountyModal = () => setShowBountyModal(!showBountyModal)
    const toggleTBModal = () => setShowTBModal(!showTBModal)
    const toggleHTJModal = () => setShowHTJModal(!showHTJModal)
    const toggleFAQModal = () => setShowFAQModal(!showFAQModal)
    const toggleWDWDModal = () => setShowWDWDModal(!showWDWDModal)


    const Modals = (props) => (
        <>
            {/* Modals */}
            <HowtoJoinModal
                id={props.id}
                show={showHTJModal}
                toggle={toggleHTJModal}
                data={HTJ || [ { description: "" } ]}
                set={(newHTJ) => setHTJ(newHTJ)}
            />
             <WDWDModal
                id={props.id}
                show={showWDWDModal}
                toggle={toggleWDWDModal}
            />
            <BountyModal
                id={props.id}
                show={showBountyModal}
                toggle={toggleBountyModal}
                set={(newBounties) => setBounties(newBounties)}
            />
            <TokenBenefitModal
                id={props.id}
                show={showTBModal}
                toggle={toggleTBModal}
            />
            <FAQModal
                id={props.id}
                show = {showFAQModal}
                toggle = {toggleFAQModal}
            />
        </>
    )

    return (
        <Styled.Container>
            <Modals id={props.id} />
            <Styled.CardBox>
                <Styled.CardBanner src={props.backgroundURL} />
                <Styled.BackHomeButton onClick={navigate}>
                    &#8592;
                </Styled.BackHomeButton>
                <Styled.CardContainer>
                    <Styled.ColumnOne>
                        <Styled.Logo src={props.logoURL} />
                        <Styled.Title>{props.name}</Styled.Title>
                        <Styled.Description>
                            {props.description}
                        </Styled.Description>
                        <Styled.CategoryList>
                            {props.categories.map((e) => (
                                <Styled.Category>
                                    <Styled.CategoryLink to={`/search/${e}`}>
                                        {e}
                                    </Styled.CategoryLink>
                                </Styled.Category>
                            ))}
                        </Styled.CategoryList>
                        <Styled.SocialsList>{socials}</Styled.SocialsList>
                        <div>
                            <Collapsible title="How to join?">
                                <Styled.CollapsibleChildren>
                                    {isAdmin && (
                                        <Styled.Button onClick={toggleHTJModal}>
                                            Add Steps
                                        </Styled.Button>
                                    )}

                                    {HTJ && <HTJCard steps={HTJ} />}
                                </Styled.CollapsibleChildren>
                            </Collapsible>
                            <Collapsible title="What Do We Do?">
                                {isAdmin && (
                                    <Styled.Button onClick={toggleWDWDModal}
                                    >
                                        Change Information
                                    </Styled.Button>
                                )}
                            </Collapsible>
                            <Collapsible title="Bounties">
                                <Styled.CollapsibleChildren>
                                    {isAdmin && (
                                        <Styled.Button
                                            onClick={toggleBountyModal}
                                        >
                                            Add Bounty
                                        </Styled.Button>
                                    )}

                                    {bounties &&
                                        bounties.map((bounty, idx) => {
                                            return (
                                                <BountyCard id={props.id} bounties={bounties} idx={idx} set={(newBounties) => setBounties(newBounties)} />
                                            )
                                        })}
                                </Styled.CollapsibleChildren>
                            </Collapsible>
                            <Collapsible title="Governance Proposals">
                                <Styled.Description>
                                    ⚡️Snapshot integration coming soon.
                                </Styled.Description>
                            </Collapsible>
                            <Collapsible title="Token Benefits/Utility">
                                {isAdmin && (
                                    <Styled.Button onClick={toggleTBModal}>
                                        Add Token Benefit
                                    </Styled.Button>
                                )}
                            </Collapsible>
                            <Collapsible title="Frequently Asked Questions">
                                {isAdmin && (
                                    <Styled.Button onClick={toggleFAQModal}>
                                        Add Questions
                                    </Styled.Button>
                                )}
                            </Collapsible>
                            
                        </div>
                    </Styled.ColumnOne>
                    {props.tokenAddress && 
                        <Styled.ColumnTwo>
                            <Styled.TokenFeed showBorderBottom={props['related-daos'] ? true : false}>
                                {web3.active && (
                                    <Styled.TokenHoldings>
                                        <Styled.Text>
                                            Your token holdings is{' '}
                                            <Styled.BalanceText>
                                                {balance.toNumber()} $
                                                {props.symbol.toUpperCase()}
                                            </Styled.BalanceText>
                                        </Styled.Text>
                                    </Styled.TokenHoldings>
                                )}
                                <Styled.TokenName>
                                    ${props.symbol.toUpperCase()}
                                </Styled.TokenName>
                                <Styled.PriceContainer>
                                    <Styled.TokenPrice>
                                        ${Number(props.tokenFeed.price).toFixed(2)}
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
                                    <Styled.Text color="#A5A5A5">24h</Styled.Text>
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
                                    <Styled.Text color="#A5A5A5">
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
                                        {shortenAddress(props.tokenAddress, 3, 3)}
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
                                    target="_blank"
                                >
                                    TRADE
                                </Styled.TradeButton>
                            </Styled.TokenFeed>
                            {props['related-daos'] && (
                                <Styled.SubDAOContainer>
                                <Styled.Title>Sub DAOs</Styled.Title>
                                    {props['related-daos'].map((dao, idx) => {
                                        return (
                                            <Link to={`/dao/${dao}`}>
                                                <Styled.SubDAOImg
                                                    src={props.related[idx]}
                                                    title={dao}
                                                />
                                            </Link>
                                        )
                                    })}
                                </Styled.SubDAOContainer>
                            )}
                            <Styled.ShareColumn>
                                <Styled.LinkTo onClick={() => {navigator.clipboard.writeText(`https://etherscan.io/token/${props.tokenAddress}`)}}>🔗 Copy Link</Styled.LinkTo>
                                <Styled.LinkTo>
                                    <TwitterShareButton
                                        title={"Share Twitter"}
                                        url={`https://etherscan.io/token/${props.tokenAddress}`}
                                    >
                                        🦆 Share Twitter
                                    </TwitterShareButton>
                                </Styled.LinkTo>
                                <Styled.LinkTo>
                                    <TelegramShareButton
                                        title={"Share Twitter"}
                                        url={`https://etherscan.io/token/${props.tokenAddress}`}
                                    >
                                        📋 Share Telegram
                                    </TelegramShareButton>
                                </Styled.LinkTo>
                            </Styled.ShareColumn>
                        </Styled.ColumnTwo>
                    }
                </Styled.CardContainer>
            </Styled.CardBox>
        </Styled.Container>
    )
}

export default BigCard
