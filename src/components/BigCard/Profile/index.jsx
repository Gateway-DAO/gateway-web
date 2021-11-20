const Profile = () => {
    return (
        <Styled.TokenName>
        //                             ${props.symbol.toUpperCase()}
        //                         </Styled.TokenName>
        //                         <Styled.PriceContainer>
        //                             <Styled.TokenPrice>
        //                                 $
        //                                 {Number(props.tokenFeed.price).toFixed(
        //                                     2
        //                                 )}
        //                             </Styled.TokenPrice>
        //                             <Styled.PercentageText
        //                                 color={
        //                                     props.tokenFeed.change24h > 0
        //                                         ? '#72B841'
        //                                         : '#EE787B'
        //                                 }
        //                             >
        //                                 {props.tokenFeed.change24h > 0 ? (
        //                                     <RiArrowUpSFill />
        //                                 ) : (
        //                                     <RiArrowDownSFill />
        //                                 )}
        //                                 {props.tokenFeed.change24h.toLocaleString(
        //                                     'en-US',
        //                                     {
        //                                         maximumFractionDigits: 1,
        //                                     }
        //                                 )}
        //                                 %
        //                             </Styled.PercentageText>
        //                             <Styled.Text color="#A5A5A5">
        //                                 24h
        //                             </Styled.Text>
        //                         </Styled.PriceContainer>
        //                         <Styled.PastWeekContainer>
        //                             <Styled.PercentageText
        //                                 color={
        //                                     props.tokenFeed.change7d > 0
        //                                         ? '#72B841'
        //                                         : '#EE787B'
        //                                 }
        //                             >
        //                                 {props.tokenFeed.change7d > 0 ? (
        //                                     <RiArrowUpSFill />
        //                                 ) : (
        //                                     <RiArrowDownSFill />
        //                                 )}
        //                                 {props.tokenFeed.change7d.toLocaleString(
        //                                     'en-US',
        //                                     {
        //                                         maximumFractionDigits: 1,
        //                                     }
        //                                 )}
        //                                 %
        //                             </Styled.PercentageText>
        //                             <Styled.Text color="#A5A5A5">
        //                                 Past Week
        //                             </Styled.Text>
        //                         </Styled.PastWeekContainer>
        //                         <Styled.TokenFeedData>
        //                             <Styled.Text>All-time High</Styled.Text>
        //                             <Styled.TextRight>
        //                                 {props.tokenFeed.ath.toLocaleString(
        //                                     'en-US',
        //                                     {
        //                                         style: 'currency',
        //                                         currency: 'USD',
        //                                     }
        //                                 )}
        //                             </Styled.TextRight>
        //                             <Styled.Text>All-time Low</Styled.Text>
        //                             <Styled.TextRight>
        //                                 {props.tokenFeed.atl.toLocaleString(
        //                                     'en-US',
        //                                     {
        //                                         style: 'currency',
        //                                         currency: 'USD',
        //                                     }
        //                                 )}
        //                             </Styled.TextRight>
        //                             <Styled.Text>Market Cap</Styled.Text>
        //                             <Styled.TextRight>
        //                                 {props.tokenFeed.marketCap.toLocaleString(
        //                                     'en-US',
        //                                     {
        //                                         style: 'currency',
        //                                         currency: 'USD',
        //                                     }
        //                                 )}
        //                             </Styled.TextRight>
        //                             <Styled.Text>Current Supply</Styled.Text>
        //                             <Styled.TextRight>
        //                                 {props.tokenFeed.circulatingSupply.toLocaleString(
        //                                     'en-US'
        //                                 )}
        //                             </Styled.TextRight>
        //                             <Styled.Text>Total Supply</Styled.Text>
        //                             <Styled.TextRight>
        //                                 {props.tokenFeed.totalSupply.toLocaleString(
        //                                     'en-US'
        //                                 )}
        //                             </Styled.TextRight>
        //                             <Styled.Text>Contract</Styled.Text>
        //                             <Styled.TextRight>
        //                                 {shortenAddress(
        //                                     props.tokenAddress,
        //                                     3,
        //                                     3
        //                                 )}
        //                             </Styled.TextRight>
        //                             <Styled.Text>Explorer</Styled.Text>
        //                             <Styled.StyledExplorerLinkRight
        //                                 href={`https://etherscan.io/token/${props.tokenAddress}`}
        //                             >
        //                                 Etherscan
        //                             </Styled.StyledExplorerLinkRight>
        //                         </Styled.TokenFeedData>
        //                         <Styled.TradeButton
        //                             href={`https://app.uniswap.org/#/swap?outputCurrency=${props.tokenAddress}&exactField=output`}
        //                             target="_blank"
        //                         >
        //                             TRADE
        //                         </Styled.TradeButton>
        //                     </Styled.TokenFeed>
        //                     {props['related-daos'] && (
        //                         <Styled.SubDAOContainer>
        //                             <Styled.Title>Sub DAOs</Styled.Title>
        //                             {props['related-daos'].map((dao, idx) => {
        //                                 return (
        //                                     <Link to={`/dao/${dao}`}>
        //                                         <Styled.SubDAOImg
        //                                             src={props.related[idx]}
        //                                             title={dao}
        //                                         />
        //                                     </Link>
        //                                 )
        //                             })}
        //                         </Styled.SubDAOContainer>
        //                     )}
        //                     <Styled.ShareColumn>
        //                         <Styled.LinkTo
        //                             onClick={() => {
        //                                 navigator.clipboard.writeText(
        //                                     `https://etherscan.io/token/${props.tokenAddress}`
        //                                 )
        //                             }}
        //                         >
        //                             🔗 Copy Link
        //                         </Styled.LinkTo>
        //                         <Styled.LinkTo>
        //                             <TwitterShareButton
        //                                 title={'Share Twitter'}
        //                                 url={`https://etherscan.io/token/${props.tokenAddress}`}
        //                             >
        //                                 🦆 Share Twitter
        //                             </TwitterShareButton>
        //                         </Styled.LinkTo>
        //                         <Styled.LinkTo>
        //                             <TelegramShareButton
        //                                 title={'Share Twitter'}
        //                                 url={`https://etherscan.io/token/${props.tokenAddress}`}
        //                             >
        //                                 📋 Share Telegram
        //                             </TelegramShareButton>
        //                         </Styled.LinkTo>
        //                     </Styled.ShareColumn>
        //                 </Styled.ColumnTwo>
    )
}

export default Profile;