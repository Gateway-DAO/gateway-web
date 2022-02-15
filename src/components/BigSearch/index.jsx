import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Styled from './style';

import Typewriter from 'typewriter-effect';

import React from 'react';

const BigSearch = (props) => {
    const [showTyping, setShowTyping] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    // const [placeholder, setPlaceholder] = useState("Search for ");
    const onBlurHandler = () => {
        if (searchValue.length === 0) {
            setShowTyping(true);
        }
    };
    const handleInput = async (e) => {
        if (e.key === 'Enter') {
            if (searchValue.length === 0) {
                navigate(`search/all`);
            } else {
                navigate(`search/${e.target.value}`);
            }
        }
    };

    const showClickResult = async (e) => {
        if (searchValue.length === 0) {
            navigate(`search/all`);
        } else {
            navigate(`search/${searchValue}`);
        }
    };

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

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
                    .start();
            }}
        />
    );

    return (
        <React.Fragment>
            {console.log('value', searchValue.length)}
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
                        onBlur={onBlurHandler}
                        onClick={() => setShowTyping(false)}
                        onChange={updateSearchValue}
                        //value={searchValue}
                        type='text'
                        onKeyPress={handleInput}
                    />
                </Styled.SearchSecondary>
                <Styled.SearchIconDiv onClick={showClickResult}>
                    <Styled.WrappedFiSearch size={60} />
                </Styled.SearchIconDiv>
            </Styled.SearchMainDiv>
        </React.Fragment>
    );
};

const WrappedBigSearch = styled(BigSearch)`
    background-color: white;
    padding: 20px;
`;

export default WrappedBigSearch;
