import * as Styled from './style'

import { useParams, useHistory } from 'react-router'
import { useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DAOTab from './component/DAOs'
import UserTab from './component/Users'

const Search = (props) => {
    const [selectionTab, setSelectionTab] = useState('DAOs')
    const { query } = useParams()
    const [inputVal, setInputVal] = useState(query || '')
    const history = useHistory()

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            history.push(`/search/${e.target.value}`)
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
                            type="search"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            onKeyPress={handleEnter}
                        />
                        <Styled.WrappedFiSearch />
                    </Styled.SearchInputBox>
                </Styled.LeftNav>
            </Styled.Nav>
            <ActiveTab />
            <Footer />
        </Styled.Container>
    )
}

export default Search
