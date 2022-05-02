import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useSearchDAO from '../../../../../api/database/useSearchDAO';
import * as Styled from '../../../style';
import FilterDropdown from '../../FilterDropdown';

const GateFilter = function ({ setGateFilterQuery }: any) {
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
    const postedFilterOptions = [
        { label: 'Any time', value: 'Any time' },
        { label: 'Past Week', value: 'Past Week' },
        { label: 'past month', value: 'past month' },
        { label: 'past year', value: 'past year' },
    ];

    const [organizationFilterOptions, setOrganizationFilterOptions] = useState<
        any[]
    >([]);

    const {
        data: organizationData,
        loading: listLoading,
        error: listError,
        called: listCalled,
    } = useSearchDAO();

    const location = useLocation();
	const params = new URLSearchParams(location.search);
	var searchTerm: string = params.get("query");

    if (searchTerm && searchTerm.toLowerCase().trim() === 'all') searchTerm = '';

    const showResult = () => {
        let query = {};

        if (searchTerm && !query['or']) {
            query['or'] = []
        }

        searchTerm && query['or'].push(...[
            { name: { wildcard: `*${(searchTerm || "").toLowerCase()}*` } },
        ])

        setGateFilterQuery(query);
    }

    useEffect(showResult, [searchTerm]);

    useEffect(() => {
        if (!listLoading && !listError) {
            const daoList = [];
            organizationData.searchDAOs.items.map((item: any) => {
                daoList.push({
                    value: item.dao,
                    label: item.name,
                });
            });

            setOrganizationFilterOptions(daoList);
        }
    }, [organizationData, listError, listLoading]);

    return (
        <Styled.FilterBox>
            <FilterDropdown
                title='Organizations'
                filterable
                options={organizationFilterOptions}
                selected={[]}
                showResult={showResult}
            />
            <FilterDropdown
                title='Category'
                filterable
                options={categoryFilterOptions}
                selected={[]}
                showResult={showResult}
            />
            <FilterDropdown
                title='Posted'
                options={postedFilterOptions}
                selected={[]}
                showResult={showResult}
            />
        </Styled.FilterBox>
    );
};

export default GateFilter;
