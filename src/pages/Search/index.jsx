import * as Styled from './style';

// Hooks
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSearchDAO } from '../../api/database/useSearchDAO';
import { useDAOLength } from '../../api/database/useDAOLength';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DAOTab from './component/DAOs';
import UserTab from './component/Users';
import SearchSuggestions from './component/SearchSuggestions';
import { Navigate } from 'react-router-dom';

const Search = (props) => {
    const [selectionTab, setSelectionTab] = useState('DAOs');
    const { query } = useParams();
    const [inputVal, setInputVal] = useState(query || '');
    const navigate = useNavigate();
    const [hits, setHits] = useState([]);
    const [toggle, setToggle] = useState(false);

    // const { searchDAO, data, loading, error } = useLazySearchDAO()
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            console.log(searchData);
            setToggle(false);
            navigate(`/search/${e.target.value}`);
        }
    };
    const handelSearchAll = () => {
        if (!inputVal) {
            navigate(`/search/all`);
        } else {
            navigate(`/search/${inputVal}`);
        }
    };

    const ActiveTab = () => {
        switch (selectionTab) {
            case 'DAOs':
                return <DAOTab />;
            case 'Users':
                return <UserTab query={query} />;
            default:
                return <DAOTab />;
        }
    };

    const {
        data: searchData,
        loading: searchLoading,
        error: searchError,
        called: searchCalled,
    } = useSearchDAO({
        variables: {
            filter: {
                or: [
                    { dao: { wildcard: `*${inputVal.toLowerCase()}*` } },
                    { name: { wildcard: `*${inputVal.toLowerCase()}*` } },
                    {
                        description: {
                            wildcard: `*${inputVal.toLowerCase()}*`,
                        },
                    },
                    { categories: { match: `*${inputVal.toLowerCase()}*` } },
                    { tags: { wildcard: `*${inputVal.toLowerCase()}*` } },
                ],
            },
        },
    });

    const { data: daoLength } = useDAOLength();

    // useEffect(() => {
    //     setHits(!searchLoading ? searchData.searchDAOs.items : [])
    //     console.log(hits);
    //     setToggle(true);
    // }, [searchData, searchLoading,inputVal])

    if (searchError) {
        return <Navigate to='/404' />;
    }

    const typing = async (val) => {
        setInputVal(val);
        await setHits(!searchLoading ? searchData.searchDAOs.items : []);
        console.log(hits);
        setToggle(true);
    };

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
                            type='input'
                            value={inputVal}
                            onChange={(e) => typing(e.target.value)}
                            onKeyPress={handleEnter}
                            onClick={() => setToggle(true)}
                        />
                        <Styled.WrappedFiSearch />
                        {hits.length !== 0 && toggle && (
                            <Styled.SearchSuggestionBox>
                                {hits
                                    .filter((item, idx) => idx < 5)
                                    .map((val) => {
                                        return <SearchSuggestions hits={val} />;
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
    );
};

export default Search;
