import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from '../../../style';
import FilterDropdown from '../../FilterDropdown';

const DAOFilter = function ({ setDaoFilterQuery }: any) {
    const categoryFilterOptions = [
        { value: 'Protocol', label: 'Protocol' },
        { value: 'DeFi', label: 'DeFi' },
        { value: 'Social', label: 'Social' },
        { value: 'Grant', label: 'Grant' },
        { value: 'Investment', label: 'Investment' },
        { value: 'Collector', label: 'Collector' },
        { value: 'Framework', label: 'Framework' },
        { value: 'Gaming', label: 'Gaming' },
        { value: 'DeSci', label: 'DeSci' },
    ];
    const chainFilterOptions = [
        { value: 'Ethereum', label: 'Ethereum' },
        { value: 'Solana', label: 'Solana' },
        { value: 'Polygon', label: 'Polygon' },
        { value: 'NEAR', label: 'NEAR' },
        { value: 'Binance', label: 'Binance' },
        { value: 'Bitcoin', label: 'Bitcoin' },
        { value: 'Avalanche', label: 'Avalanche' },
    ];
    // const sizeFilterOptions = [
    //     { value: '1-10', label: '1-10' },
    //     { value: '11-50', label: '11-50' },
    //     { value: '51-200', label: '51-200' },
    //     { value: '201-500', label: '201-500' },
    //     { value: '501-1000', label: '501-1000' },
    //     { value: '1001-5000', label: '1001-5000' },
    //     { value: '5001-10000', label: '5001-10000' },
    //     { value: '10,001 +', label: '10,001 +' },
    // ];

    const [categoryMatches, setCategoryMatches] = useState<string[]>([]);
    const [chainMatches, setChainMatches] = useState<string[]>([]);
    // const [sizeMatches, setSizeMatches] = useState<string[]>([]);
    const location = useLocation();
	const params = new URLSearchParams(location.search);
	var searchTerm: string = params.get("query");

    if (searchTerm && searchTerm.toLowerCase().trim() === 'all') searchTerm = '';

    const showResult = () => {
        // const query = [];
        // categoryMatches.length &&
        //     query.push({
        //         categories: {
        //             match: categoryMatches,
        //         },
        //     });
        // chainMatches.length &&
        //     query.push({
        //         chains: {
        //             match: chainMatches,
        //         },
        //     });
        // setDaoFilterQuery(query);
        let query = {};

        if (categoryMatches.length > 1) {
            query['or'] = [];
            for (let i = 0; i < categoryMatches.length; i++) {
                query['or'].push({
                    categories: {
                        match: categoryMatches[i],
                    },
                });
            }
        } else {
            if (categoryMatches.length) {
                query['and'] = [];
                query['and'].push({
                    categories: {
                        match: categoryMatches,
                    },
                });
            }
        }

        if (chainMatches.length > 1) {
            if (!query['or'] || query['or'].length === 0) query['or'] = [];
            for (let i = 0; i < chainMatches.length; i++) {
                query['or'].push({
                    chains: {
                        match: chainMatches[i],
                    },
                });
            }
        } else {
            if (chainMatches.length) {
                if (!query['and'] || query['and'].length === 0)
                    query['and'] = [];
                query['and'].push({
                    chains: {
                        match: chainMatches,
                    },
                });
            }
        }

        if (searchTerm && !query['or']) {
            query['or'] = []
        }

        searchTerm && query['or'].push(...[
            { dao: { wildcard: `*${(searchTerm || "").toLowerCase()}*` } },
            { name: { wildcard: `*${(searchTerm || "").toLowerCase()}*` } },
            {
                description: {
                    wildcard: `*${(searchTerm || "").toLowerCase()}*`,
                },
            },
        ])

        setDaoFilterQuery(query);
    };

    useEffect(showResult, [searchTerm]);

    useEffect(() => {
        if (window.history.state.usr && window.history.state.usr.categorySearch) {
            setCategoryMatches(window.history.state.usr.categorySearch);
        }
    }, [window.history]);
    
    useEffect(() => {
        if (categoryMatches.length && window.history.state.usr && window.history.state.usr.categorySearch) {
            showResult();
            window.history.replaceState({}, undefined, '/search/daos');
        }
    }, [categoryMatches])

    return (
        <Styled.FilterBox>
            <FilterDropdown
                title='Category'
                filterable
                options={categoryFilterOptions}
                selected={categoryMatches}
                handleSelected={(options) => setCategoryMatches(options)}
                showResult={showResult}
            />
            <FilterDropdown
                title='Chain'
                filterable
                options={chainFilterOptions}
                selected={chainMatches}
                showResult={showResult}
                handleSelected={(options) => setChainMatches(options)}
            />
            {/*
            <FilterDropdown
                title='Size'
                options={sizeFilterOptions}
                selected={sizeMatches}
                showResult={showResult}
                handleSelected={(options) => setSizeMatches(options)}
            />
            */}
        </Styled.FilterBox>
    );
};

export default DAOFilter;
