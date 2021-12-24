import { useParams, useHistory } from "react-router"
import { useEffect, useState } from "react"

import * as Styled from "./style"

import { useLazySearchDAO } from "../../api/database/useSearchDAO"
import { useLazyListDAOs } from "../../api/database/useGetDAO"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import Pagination from '../../components/Pagination'
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
                            {categories: { match: query }},
                            {chains: { match: query }},
                        ]
                    }
                } })

                setHits(res.data.searchDAOs.items);
            }
        }

        searchAsync();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [query]);

    const [inputVal, setInputVal] = useState(query || "")
    const history = useHistory();

    const handleEnter = e => {
        if (e.key === "Enter") {
            // setCurrentPageNumber(0);
            history.push(`/search/${e.target.value}`);
        }
    }

    // const paginate = (pageNumber) =>{
        
    //     setCurrentPageNumber(pageNumber);
    // }

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
            {/* <Styled.PaginationBar>
            {   totalPage>1 && <Pagination totalPage={totalPage} paginate={paginate}/>}
            </Styled.PaginationBar> */}
            <Footer />
        </Styled.Container>
    )
}

export default Search