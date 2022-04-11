import React, { useEffect, useState } from 'react';

// Styles
import * as Styled from './style';

// Hooks
import { useLocation } from 'react-router-dom';

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

const Search = () => {
    const location: any = useLocation();

    const [selectionTab, setSelectionTab] = useState('DAOs');
    const [daoFilterQuery, setDaoFilterQuery] = useState({});
    const [userFilterQuery, setUserFilterQuery] = useState({});
    const [gateFilterQuery, setGateFilterQuery] = useState({});

    const ActiveTab = () => {
        switch (selectionTab) {
            case 'DAOs':
                return <DAOTab filterQuery={daoFilterQuery} />;
            case 'Users':
                return <UserTab filterQuery={userFilterQuery} />;
            case 'Gates':
                return <GateTab filterQuery={gateFilterQuery} />;
            default:
                return <DAOTab filterQuery={daoFilterQuery} />;
        }
    };

    const ActiveFilter = () => {
        switch (selectionTab) {
            case 'DAOs':
                return <DAOFilter setDaoFilterQuery={setDaoFilterQuery} />;
            case 'Users':
                return <UserFilter setUserFilterQuery={setUserFilterQuery} />;
            case 'Gates':
                return <GateFilter setGateFilterQuery={setGateFilterQuery} />;
            default:
                return <DAOFilter setDaoFilterQuery={setDaoFilterQuery} />;
        }
    };

    const FilterComponent = React.useMemo(() => ActiveFilter, [selectionTab]);
    const TabComponent = React.useMemo(() => ActiveTab, [selectionTab]);

    useEffect(() => {
        if (location.state && location.state.tab) {
            setSelectionTab(location.state.tab);
            window.history.replaceState({}, undefined, '/search');
        }
    }, [location]);

    return (
        <Styled.Container>
            <Header />
            <Styled.Nav>
                <Styled.DAOAndUserSelectionContainer>
                    <Styled.SelectContainer
                        active={'DAOs' === selectionTab}
                        onClick={() => setSelectionTab('DAOs')}
                    >
                        <Styled.SelectContainerText>
                            DAOs
                        </Styled.SelectContainerText>
                    </Styled.SelectContainer>
                    <Styled.SelectContainer
                        active={'Users' === selectionTab}
                        onClick={() => setSelectionTab('Users')}
                    >
                        <Styled.SelectContainerText>
                            Users
                        </Styled.SelectContainerText>
                    </Styled.SelectContainer>
                    <Styled.SelectContainer
                        active={'Gates' === selectionTab}
                        onClick={() => setSelectionTab('Gates')}
                    >
                        <Styled.SelectContainerText>
                            Gates
                        </Styled.SelectContainerText>
                    </Styled.SelectContainer>
                </Styled.DAOAndUserSelectionContainer>
                {
                    <Styled.LeftNav>
                        <Styled.FilterText>Filter:</Styled.FilterText>
                        <FilterComponent />
                    </Styled.LeftNav>
                }
            </Styled.Nav>
            <TabComponent />
            <Footer />
        </Styled.Container>
    );
};

export default Search;
