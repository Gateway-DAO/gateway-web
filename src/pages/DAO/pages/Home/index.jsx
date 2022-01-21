// Libraries
import React from "react"

// Components
import BigCard from "../../../../components/BigCard"
import BackButton from '../../../../components/BackButton'
import Loader from '../../../../components/Loader'

// Styling
import * as Styled from "../../style"

// Hooks
import { useNavigate, useOutletContext } from "react-router-dom"
import { useState } from "react"

const DAOHome = (props) => {
    // State
    const [inputVal, setInputVal] = useState('')
    const { daoData, setDaoData, loaded, loading } = useOutletContext()

    // Hooks
    const navigate = useNavigate()

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${e.target.value}`)
        }
    }

    return (
        <>
            <Styled.SearchTermContainer>
                <Styled.BackButtonContainer>
                    <BackButton>Back to Results</BackButton>
                </Styled.BackButtonContainer>
                <Styled.SearchInputBox>
                    <Styled.SearchInput
                        type="text"
                        placeholder="Search DAO"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyPress={handleEnter}
                    />

                    <Styled.WrappedFiSearch />
                </Styled.SearchInputBox>
            </Styled.SearchTermContainer>

            {loading && !loaded && (
                <Styled.LoaderBox>
                    <Loader color="white" size={35} />
                </Styled.LoaderBox>
            )}

            {loaded &&
                React.createElement(BigCard, {
                    ...daoData,
                    changeDAOData: (data) =>
                        setDaoData({ ...daoData, ...data }),
                })}
        </>
    )
}

export default DAOHome
