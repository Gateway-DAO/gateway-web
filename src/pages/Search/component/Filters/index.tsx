import React, { useState } from 'react';
import * as Styled from '../../style';
import FilterDropdown from '../FilterDropdown';

export const DAOFilter = function ({ setDaoFilterQuery }: any) {
    const categoryFilterOptions = [
        'Protocol',
        'DeFi',
        'Social',
        'Grant',
        'Investment',
        'Collector',
        'Framework',
        'Gaming',
        'DeSci',
    ];
    const chainFilterOptions = [
        'Ethereum',
        'Solana',
        'Polygon',
        'NEAR',
        'Binance',
        'Bitcoin',
        'Avalanche',
    ];
    const sizeFilterOptions = [
        '1-10',
        '11-50',
        '51-200',
        '201-500',
        '501-1000',
        '1001-5000',
        '5001-10000',
        '10,001 +',
    ];

    const [categoryMatches, setCategoryMatches] = useState<string[]>([]);
    const [chainMatches, setChainMatches] = useState<string[]>([]);
    const [sizeMatches, setSizeMatches] = useState<string[]>([]);

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
        const query = {};

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

        console.log('query', query);
        setDaoFilterQuery(query);
        console.log(categoryMatches, chainMatches, sizeMatches);
    };

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
            <FilterDropdown
                title='Size'
                options={sizeFilterOptions}
                selected={sizeMatches}
                showResult={showResult}
                handleSelected={(options) => setSizeMatches(options)}
            />
        </Styled.FilterBox>
    );
};

export const UserFilter = function () {
    const connectionsFilterOptions = ['1st', '2nd', '3rd+'];
    const membershipFilterOptions = [
        'BANKLESS DAO',
        'OLYMPUS DAO',
        'AAVE',
        'LINKS DAO',
        'EMPIRE DAO',
    ];
    const credentialsFilterOptions = [
        'Credential 1',
        'Credential 2',
        'Credential 3',
        'Credential 4',
        'Credential 5',
    ];
    return (
        <Styled.FilterBox>
            <FilterDropdown
                title='Connections'
                options={connectionsFilterOptions}
                selected={[]}
            />
            <FilterDropdown
                title='DAO Membership'
                filterable
                options={membershipFilterOptions}
                selected={[]}
            />
            <FilterDropdown
                title='Credentials'
                filterable
                options={credentialsFilterOptions}
                selected={[]}
            />
        </Styled.FilterBox>
    );
};

export const GateFilter = function () {
    const DAOFilterOptions = [
        'BANKLESS DAO',
        'OLYMPUS DAO',
        'AAVE',
        'LINKS DAO',
        'EMPIRE DAO',
    ];
    const categoryFilterOptions = [
        'DeFi',
        'DESCI',
        'Investment',
        'Media',
        'Social',
    ];
    const credentialsFilterOptions = [
        'Credential 1',
        'Credential 2',
        'Credential 3',
        'Credential 4',
        'Credential 5',
    ];
    const postedFilterOptions = [
        'Any time',
        'Past Week',
        'past month',
        'past year',
    ];
    return (
        <Styled.FilterBox>
            <FilterDropdown
                title='DAO'
                filterable
                options={DAOFilterOptions}
                selected={[]}
            />
            <FilterDropdown
                title='Category'
                filterable
                options={categoryFilterOptions}
                selected={[]}
            />
            <FilterDropdown
                title='Credentials'
                filterable
                options={credentialsFilterOptions}
                selected={[]}
            />
            <FilterDropdown
                title='Posted'
                options={postedFilterOptions}
                selected={[]}
            />
        </Styled.FilterBox>
    );
};
