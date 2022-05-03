import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchCredentials } from '../../../../../api/database/useSearchCredentials';
import useSearchDAO from '../../../../../api/database/useSearchDAO';
import * as Styled from '../../../style';
import FilterDropdown from '../../FilterDropdown';

const UserFilter = function ({ setUserFilterQuery }) {
    const connectionsFilterOptions = [
        { value: '1st', label: '1st' },
        { value: '2nd', label: '2nd' },
        { value: '3rd+', label: '3rd+' },
    ];
    const [membershipFilterOptions, setMembershipFilterOptions] = useState([]);
    const [credentialsFilterOptions, setCredentialsFilterOptions] = useState(
        []
    );

    const [connectionMatches, setConnectionMatches] = useState<string[]>([]);
    const [membershipMatches, setMembershipMatches] = useState<string[]>([]);
    const [credentialMatches, setCredentialMatches] = useState<string[]>([]);

    const location = useLocation();
	const params = new URLSearchParams(location.search);
	var searchTerm: string = params.get("query");

    if (searchTerm && searchTerm.toLowerCase().trim() === 'all') searchTerm = '';

    const showResult = () => {
        const query = {};

        // if (credentialMatches.length > 1) {
        //     query['or'] = [];
        //     for (let i = 0; i < credentialMatches.length; i++) {
        //         query['or'].push({
        //             categories: {
        //                 match: credentialMatches[i],
        //             },
        //         });
        //     }
        // } else {
        //     if (credentialMatches.length) {
        //         query['and'] = [];
        //         query['and'].push({
        //             categories: {
        //                 match: credentialMatches,
        //             },
        //         });
        //     }
        // }

        if (membershipMatches.length > 1) {
            if (!query['or'] || query['or'].length === 0) query['or'] = [];
            for (let i = 0; i < membershipMatches.length; i++) {
                query['or'].push({
                    daos_ids: {
                        match: membershipMatches[i],
                    },
                });
            }
        } else {
            if (membershipMatches.length) {
                if (!query['and'] || query['and'].length === 0)
                    query['and'] = [];
                query['and'].push({
                    daos_ids: {
                        match: membershipMatches,
                    },
                });
            }
        }

        if (searchTerm && !query['or']) {
            query['or'] = []
        }

        searchTerm && query['or'].push(...[
            { bio: { wildcard: `*${(searchTerm || "").toLowerCase()}*` } },
            { name: { wildcard: `*${(searchTerm || "").toLowerCase()}*` } },
            {
                wallet: {
                    wildcard: `*${(searchTerm || "").toLowerCase()}*`,
                },
            },
        ])

        setUserFilterQuery(query);
    };

    useEffect(showResult, [searchTerm]);

    const {
        data: listData,
        loading: listLoading,
        error: listError,
        called: listCalled,
    } = useSearchDAO();

    const {
        data: credentialData,
        loading: credentialLoading,
        error: credentialError,
        called: credentialCalled,
    } = useSearchCredentials();

    useEffect(() => {
        if (!listLoading && !listError) {
            const daoList = [];
            listData.searchDAOs.items.map((item: any) => {
                daoList.push({
                    value: item.dao,
                    label: item.name,
                });
            });

            setMembershipFilterOptions(daoList);
        }
    }, [listData, listError, listLoading]);

    useEffect(() => {
        if (!credentialLoading && !credentialError) {
            const credentailList = [];
            credentialData.searchCredentials.items.map((item: any) => {
                credentailList.push({
                    value: item.name,
                    label: item.name,
                });
            });

            setCredentialsFilterOptions(credentailList);
        }
    }, [credentialData, credentialError, credentialLoading]);

    return (
        <Styled.FilterBox>
            <FilterDropdown
                title='Connections'
                options={connectionsFilterOptions}
                selected={connectionMatches}
                handleSelected={(options) => setConnectionMatches(options)}
                showResult={showResult}
            />
            <FilterDropdown
                title='Membership'
                filterable
                options={membershipFilterOptions}
                selected={membershipMatches}
                handleSelected={(options) => setMembershipMatches(options)}
                showResult={showResult}
            />
            <FilterDropdown
                title='Credentials'
                filterable
                options={credentialsFilterOptions}
                selected={credentialMatches}
                handleSelected={(options) => setCredentialMatches(options)}
                showResult={showResult}
            />
        </Styled.FilterBox>
    );
};

export default UserFilter;
