import { useEffect, useState } from 'react';

// Styles
import * as Styled from './style';

// Hooks
import { useParams, useLocation } from 'react-router-dom';

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

    const [selectionTab, setSelectionTab] = useState('DAOs');
    const [daoFilterQuery, setDaoFilterQuery] = useState({});

    const ActiveTab = () => {
        switch (selectionTab) {
            case 'DAOs':
                return <DAOTab filterQuery={daoFilterQuery} />;
            case 'Users':
                return <UserTab query={query} />;
            case 'Gates':
                return <GateTab query={query} />;
            default:
                return <DAOTab filterQuery={daoFilterQuery} />;
        }
    };

    const ActiveFilter = () => {
        console.log('selectionTab', selectionTab);
        switch (selectionTab) {
            case 'DAOs':
                return <DAOFilter setDaoFilterQuery={setDaoFilterQuery} />;
            case 'Users':
                return <UserFilter query={query} />;
            case 'Gates':
                return <GateFilter query={query} />;
            default:
                return <DAOFilter setDaoFilterQuery={setDaoFilterQuery} />;
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
                    <Styled.SelectContainer
                        active={'Gates' === selectionTab}
                        onClick={(e) => setSelectionTab('Gates')}
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
