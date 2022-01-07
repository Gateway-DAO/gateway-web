import { useState, useRef } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import * as Styled from './style'

import Typewriter from 'typewriter-effect'

import React from 'react'

const BigSearch = (props) => {
    const [showTyping, setShowTyping] = useState(true)
    const [searchValue, setSearchValue] = useState('all')
    const history = useHistory()
    // const [placeholder, setPlaceholder] = useState("Search for ");

    const showTypingHandler = (e) => {
        setShowTyping(false)
    }
    const handleInput = async (e) => {
        if (e.key === 'Enter') {
            history.push(`search/${e.target.value}`)
        }
    }

    const showClickResult = async (e) => {
        history.push(`search/${searchValue}`)
    }

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)
    }

    const TypewriterText = (
        <Typewriter
            options={{
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString('name')
                    .pauseFor(2500)
                    .deleteAll(100)
                    .typeString('category')
                    .pauseFor(2500)
                    .deleteAll(100)
                    .typeString('interest')
                    .pauseFor(2500)
                    .deleteAll(100)
                    .typeString('keyword')
                    .pauseFor(2500)
                    .deleteAll(100)
                    .start()
            }}
        />
    )

    return (
        <React.Fragment>
            <Styled.SearchMainDiv>
                <Styled.SearchSecondary>
                    <Styled.TypewriterDiv>
                        <Styled.TypewriterText>
                            {showTyping && 'Search by'}&nbsp;
                            <span style={{ color: '#2B2333' }}>
                                {showTyping && TypewriterText}
                            </span>
                        </Styled.TypewriterText>
                    </Styled.TypewriterDiv>
                    <Styled.InputBox
                        onClick={showTypingHandler}
                        onChange={updateSearchValue}
                        //value={searchValue}
                        type="search"
                        onKeyPress={handleInput}
                    />
                </Styled.SearchSecondary>
                <Styled.SearchIconDiv onClick={showClickResult}>
                    <Styled.WrappedFiSearch size={60} />
                </Styled.SearchIconDiv>
            </Styled.SearchMainDiv>
        </React.Fragment>
    )
}

const WrappedBigSearch = styled(BigSearch)`
    background-color: white;
    padding: 20px;
`

export default WrappedBigSearch
