import { useParams, useHistory } from "react-router"
import { useEffect, useState } from "react"

import * as Styled from "./style"

import { useLazySearchDAO } from "../../api/database/useSearchDAO"
import { useLazyListDAOs } from "../../api/database/useGetDAO"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import { ConnectToWallet } from "../../components/WalletHeader/style"

const Search = props => {
    const { query } = useParams();
    const [hits, setHits] = useState([]);
    const { listDAOs, data: listData, loading: listLoading, error: listError } = useLazyListDAOs()
    const { searchDAO, data: searchData, loading: searchLoading, error: searchError } = useLazySearchDAO()

    useEffect(() => {
        const searchAsync = async () => {
            if (query === 'all'){
                const res = await listDAOs()
                setHits(res.data.listDAOs.items);
            } else {
                const res = await searchDAO({ variables: {
                    filter: {
                        or: [
                            { dao: { matchPhrase: query } },
                            { name: { matchPhrase: query } },
                            { description: { matchPhrase: query } },
                            { categories: { matchPhrase: query } },
                            { tags: { matchPhrase: query } },
                        ]
                    }
                } })

                setHits(res.data.searchDAOs.items);
            }
        }

        searchAsync();
    }, [query]);

    const [inputVal, setInputVal] = useState(query || "")
    const history = useHistory();

    const handleEnter = e => {
        if (e.key === "Enter") {
            history.push(`/search/${e.target.value}`);
        }
    }

    return (
        <Styled.Container>
            <Header/>
            <Styled.SearchTermContainer>
                <Styled.SearchTerm>{query}</Styled.SearchTerm>
                <Styled.SearchInputBox>
                    <Styled.SearchInput type="search" value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyPress={handleEnter} />

                    <Styled.WrappedFiSearch />
                </Styled.SearchInputBox>
            </Styled.SearchTermContainer>
            {hits && 
                <Styled.CardBox>
                    {hits.map((card, idx) => {
                        return (
                            <Card 
                                key={idx}
                                id={card.dao}
                                title={card.name}
                                description={card.description}
                                categories={card.categories}
                                // ranking={card.ranking}
                                // token={card.token}
                                // price={card.price}
                                logoURL={card.logoURL}
                                bannerURL={card.backgroundURL}
                            />
                        );
                    })}
                </Styled.CardBox>
            }
            <Footer />
        </Styled.Container>
    )
}

export default Search