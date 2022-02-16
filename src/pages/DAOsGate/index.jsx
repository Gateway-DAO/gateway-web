import React from 'react';
import * as Styled from './style';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const DAOsGate = () => {
    const navigate = useNavigate();
    const addGate = () => {
        navigate('/add-gate');
    };
    return (
        <Styled.MainPage>
            <Header />
            <Styled.Wrapper>
                <Styled.Top>
                    <Styled.LeftText>
                        <Styled.Heading>DAO Gates</Styled.Heading>
                        <Styled.Para>
                            Use DAO Gates to onboard new users and contributors
                            for your community.
                        </Styled.Para>
                    </Styled.LeftText>
                    <Styled.RightSearch>
                        <Styled.SearchBar></Styled.SearchBar>
                        <Styled.WrappedFiSearch />
                    </Styled.RightSearch>
                </Styled.Top>
                <Styled.CardCategoryTitleDev>
                    <Styled.CategryTitle>Dummy</Styled.CategryTitle>
                    <Styled.AddButton onClick={addGate}>
                        <Styled.ButtonText>Add Gate</Styled.ButtonText>
                    </Styled.AddButton>
                </Styled.CardCategoryTitleDev>
            </Styled.Wrapper>
        </Styled.MainPage>
    );
};

export default DAOsGate;
