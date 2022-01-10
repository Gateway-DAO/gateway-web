import * as Styled from './style'

import { useParams, useHistory } from 'react-router'
import { useState, useEffect, useRef } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DAOTab from './component/DAOs'
import UserTab from './component/Users'
import { useLazySearchDAO } from '../../api/database/useSearchDAO'
import { useSearchDAO } from '../../api/database/useSearchDAO'
// import { useSearchDAO } from '../../api/database/useSearchDAO'
// import { searchDaos } from '../../graphql/queries'
import SearchSuggestions from './component/SearchSuggestions'

const Search = (props) => {
    let typingTimer
    const doneTypingInterval = 1000
    const [selectionTab, setSelectionTab] = useState('DAOs')
    const { query } = useParams()
    const [inputVal, setInputVal] = useState(query || '')
    const history = useHistory()
    const [hits, setHits] = useState([])
    const [toggle, setToggle] = useState(false)

    // const { searchDAO, data, loading, error } = useLazySearchDAO()
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            history.push(`/search/${e.target.value}`)
            setToggle(false)
        }
    }
    const handelSearchAll = () => {
        if (!inputVal) {
            history.push(`/search/all`)
        } else {
            history.push(`/search/${inputVal}`)
        }
    }

    const ActiveTab = () => {
        switch (selectionTab) {
            case 'DAOs':
                return <DAOTab />
            case 'Users':
                return <UserTab query={query} />
            default:
                return <DAOTab />
        }
    }
    const searchBarInput = (e) => {
        setInputVal(e.target.value)
        // setToggle(true);
    }
    
    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
    } = useSearchDAO({
        variables: {
            filter: {
                or: [
                    { dao: { wildcard: `*${inputVal}*` } },
                    { name: { wildcard: `*${inputVal}*` } },
                    { description: { wildcard: `*${inputVal}*` } },
                    { categories: { match: `*${inputVal}*` } },
                    { tags: { wildcard: `*${inputVal}*` } },
                ],
            },
        },
    })

    useEffect(() => {
        setHits(!searchLoading ? searchData.searchDAOs.items : [])
        // setToggle(true);
    }, [searchData, searchLoading])
    return (
        <Styled.Container>
            <Header />
            <Styled.Nav>
                <Styled.SearchTermContainer>
                    <Styled.SearchIcon>🔍</Styled.SearchIcon>
                    <Styled.SearchTerm>{query}</Styled.SearchTerm>
                </Styled.SearchTermContainer>
                <Styled.DAOAndUserSelectionContainer>
                    <Styled.SelectContainer
                        active={'DAOs' === selectionTab}
                        onClick={(e) => setSelectionTab('DAOs')}
                    >
                        <Styled.SelectContainerText>
                            DAOs
                        </Styled.SelectContainerText>
                    </Styled.SelectContainer>
                    <Styled.SelectContainer
                        active={'Users' === selectionTab}
                        onClick={(e) => setSelectionTab('Users')}
                    >
                        <Styled.SelectContainerText>
                            Users
                        </Styled.SelectContainerText>
                    </Styled.SelectContainer>
                </Styled.DAOAndUserSelectionContainer>
                <Styled.LeftNav>
                    <Styled.SearchInputBox>
                        <Styled.SearchInput
                            //    onKeyDown={resumeTyping}
                            //    onKeyUp={pauseTyping}
                            type="search"
                            value={inputVal}
                            onChange={searchBarInput}
                            onKeyPress={handleEnter}
                            onClick={() => setToggle(true)}
                        />
                        <Styled.WrappedFiSearch />
                        {toggle && hits.length != 0 && (
                            <Styled.SearchSuggestionBox>
                                {hits
                                    .filter((item, idx) => idx < 5)
                                    .map((val) => {
                                        return <SearchSuggestions hits={val} />
                                    })}
                                {!searchLoading && (
                                    <Styled.SearchMoreButton
                                        onClick={handelSearchAll}
                                        inputVal
                                    >
                                        See all results
                                    </Styled.SearchMoreButton>
                                )}
                            </Styled.SearchSuggestionBox>
                        )}
                    </Styled.SearchInputBox>
                </Styled.LeftNav>

                {/* </Styled.SearchTermContainer> */}
            </Styled.Nav>
            <ActiveTab />
            <Footer />
        </Styled.Container>
    )
}

export default Search
