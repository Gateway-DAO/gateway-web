// Libraries
import React from 'react';

// Components
import BigCard from '../../../../components/BigCard';
import BackButton from '../../../../components/BackButton';
import Loader from '../../../../components/Loader';

// Styling
import * as Styled from '../../style';

// Hooks
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useState } from 'react';

const DAOHome = (props) => {
    // State
    const [inputVal, setInputVal] = useState('');
    const { daoData, setDaoData, loaded, loading } = useOutletContext();

    // Hooks
    const navigate = useNavigate();

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/daos?query=${e.target.value}`);
        }
    };

    return (
        <>
            <Styled.SearchTermContainer>
                <BackButton url='/search/daos'>Go Back</BackButton>
            </Styled.SearchTermContainer>

            {!loaded && (
                <Styled.LoaderBox>
                    <Loader color='white' size={35} />
                </Styled.LoaderBox>
            )}

            {loaded &&
                React.createElement(BigCard, {
                    ...daoData,
                    changeDAOData: (data) =>
                        setDaoData({ ...daoData, ...data }),
                })}
        </>
    );
};

export default DAOHome;
