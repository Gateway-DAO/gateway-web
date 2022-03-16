import { useEffect, useState } from 'react';

// Styles
import * as Styled from './style';

// Hooks
import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DAOTab from './component/DAOs';
import UserTab from './component/Users';
import GateTab from './component/Gates';
// import SearchSuggestions from './component/SearchSuggestions';

// API
import { DAOFilter, GateFilter, UserFilter } from './component/Filters';
// import { gql, useQuery } from '@apollo/client';
// import { searchDaos } from '../../graphql/queries';

const Search = (props) => {
    const { query } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const ActiveTab = () => {
        switch (query) {
            case 'daos':
                return <DAOTab />;
            case 'users':
                return <UserTab />;
            case 'gates':
                return <GateTab />;
            default:
                return <DAOTab />;
        }
    };

    const ActiveFilter = () => {
        switch (query) {
            case 'daos':
                return <DAOFilter />;
            case 'users':
                // return <UserFilter />;
                return null;
            case 'gates':
                return <GateFilter />;
            default:
                return <DAOFilter />;
        }
    };

    useEffect(() => {
        if (location.state && location.state.tab) {
            setSelectionTab(location.state.tab);
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <Styled.Container>
            <Header />
            <Styled.Nav>
                <Styled.DAOAndUserSelectionContainer>
                    <Styled.SelectContainer
                        active={'daos' === query}
                        onClick={(e) => navigate('/search/daos')}
                    >
                        <Styled.SelectContainerText>
                            DAOs
                        </Styled.SelectContainerText>
                    </Styled.SelectContainer>
                    <Styled.SelectContainer
                        active={'users' === query}
                        onClick={(e) => navigate('/search/users')}
                    >
                        <Styled.SelectContainerText>
                            Users
                        </Styled.SelectContainerText>
                    </Styled.SelectContainer>
                    <Styled.SelectContainer
                        active={'gates' === query}
                        onClick={(e) => navigate('/search/gates')}
                    >
                        <Styled.SelectContainerText>
                            Gates
                        </Styled.SelectContainerText>
                    </Styled.SelectContainer>
                </Styled.DAOAndUserSelectionContainer>
                <Styled.LeftNav>
                    <Styled.FilterText>Filter:</Styled.FilterText>
                    <ActiveFilter />
                </Styled.LeftNav>
            </Styled.Nav>
            <ActiveTab />
            <Footer />
        </Styled.Container>
    );
};

export default Search;
