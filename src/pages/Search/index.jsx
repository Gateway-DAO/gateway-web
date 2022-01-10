import * as Styled from './style'

// Hooks
import { useParams, useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import { useLazySearchDAO } from '../../api/database/useSearchDAO'

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DAOTab from './component/DAOs'
import UserTab from './component/Users'
import SearchSuggestions from './component/SearchSuggestions'
import { Redirect } from 'react-router-dom'

const Search = (props) => {
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
    
    const {
        searchDAO,
        data: searchData,
        loading: searchLoading,
        error: searchError,
    } = useLazySearchDAO()

    useEffect(() => {
        setHits(!searchLoading ? searchData.searchDAOs.items : [])
        // setToggle(true);
    }, [searchData, searchLoading])
    
    if (searchError) {
        return <Redirect to="/404" />
    }

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
                            type="input"
                            value={inputVal}
                            onChange={e => setInputVal(e.target.value)}
                            onKeyPress={handleEnter}
                            onClick={() => setToggle(true)}
                        />
                        <Styled.WrappedFiSearch />
                        {toggle && hits.length !== 0 && (
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
