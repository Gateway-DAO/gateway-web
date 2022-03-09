import React from 'react';
import * as Styled from '../../style';
import FilterDropdown from '../FilterDropdown';

export const DAOFilter = function () {
    const categoryFilterOptions = [
        'DeFi',
        'DESCI',
        'Investment',
        'Media',
        'Social',
    ];
    const chainFilterOptions = [
        'ETHEREUM',
        'SOLANA',
        'POLYGON',
        'BNB CHAIN',
        'POLKADOT',
        'AVALANCHE',
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

    return (
        <Styled.FilterBox>
            <FilterDropdown
                title='Category'
                filterable
                options={categoryFilterOptions}
            />
            <FilterDropdown
                title='Chain'
                filterable
                options={chainFilterOptions}
            />
            <FilterDropdown title='Size' options={sizeFilterOptions} />
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
            />
            <FilterDropdown
                title='DAO Membership'
                filterable
                options={membershipFilterOptions}
            />
            <FilterDropdown
                title='Credentials'
                filterable
                options={credentialsFilterOptions}
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
            <FilterDropdown title='DAO' filterable options={DAOFilterOptions} />
            <FilterDropdown
                title='Category'
                filterable
                options={categoryFilterOptions}
            />
            <FilterDropdown
                title='Credentials'
                filterable
                options={credentialsFilterOptions}
            />
            <FilterDropdown title='Posted' options={postedFilterOptions} />
        </Styled.FilterBox>
    );
};
