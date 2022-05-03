import React, { useEffect, useState } from 'react';

// Styles
import * as Styled from './style';

// Hooks
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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
    const navigate = useNavigate();
    const { tab }: any = useParams();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchTerm: string = params.get("query");

    const [daoFilterQuery, setDaoFilterQuery] = useState({});
    const [userFilterQuery, setUserFilterQuery] = useState({});
    const [gateFilterQuery, setGateFilterQuery] = useState({});

    const ActiveTab = () => {
        switch (tab) {
            case 'daos':
                return <DAOTab filterQuery={daoFilterQuery} />;
            case 'users':
                return <UserTab filterQuery={userFilterQuery} />;
            case 'gates':
                return <GateTab filterQuery={gateFilterQuery} />;
            default:
                return <DAOTab filterQuery={daoFilterQuery} />;
        }
    };

    const ActiveFilter = () => {
        switch (tab) {
            case 'daos':
                return <DAOFilter setDaoFilterQuery={setDaoFilterQuery} />;
            case 'users':
                return <UserFilter setUserFilterQuery={setUserFilterQuery} />;
            case 'gates':
                return <GateFilter setGateFilterQuery={setGateFilterQuery} />;
            default:
                return <DAOFilter setDaoFilterQuery={setDaoFilterQuery} />;
        }
    };

    const FilterComponent = React.useMemo(() => ActiveFilter, [tab]);
    const TabComponent = React.useMemo(() => ActiveTab, [
        tab,
        daoFilterQuery,
        userFilterQuery,
        gateFilterQuery
    ]);

    return (
        <Styled.Container>
            <Header />
            <Styled.Nav>
                <Styled.DAOAndUserSelectionContainer>
                    <Styled.SelectContainer
                        active={'daos' === tab}
                        onClick={() => navigate(`/search/daos${searchTerm ? `?query=${searchTerm}` : ''}`)}
                    >
                        <Styled.SelectContainerText>
                            DAOs
                        </Styled.SelectContainerText>
                    </Styled.SelectContainer>
                    <Styled.SelectContainer
                        active={'users' === tab}
                        onClick={() => navigate(`/search/users${searchTerm ? `?query=${searchTerm}` : ''}`)}
                    >
                        <Styled.SelectContainerText>
                            Users
                        </Styled.SelectContainerText>
                    </Styled.SelectContainer>
                    <Styled.SelectContainer
                        active={'gates' === tab}
                        onClick={() => navigate(`/search/gates${searchTerm ? `?query=${searchTerm}` : ''}`)}
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
