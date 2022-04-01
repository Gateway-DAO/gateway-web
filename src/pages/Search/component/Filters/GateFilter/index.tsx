import { useEffect, useState } from 'react';
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
        data: listData,
        loading: listLoading,
        error: listError,
        called: listCalled,
    } = useSearchDAO();

    useEffect(() => {
        if (!listLoading && !listError) {
            const daoList = [];
            listData.searchDAOs.items.map((item: any) => {
                daoList.push({
                    value: item.dao,
                    label: item.name,
                });
            });

            setOrganizationFilterOptions(daoList);
        }
    }, [listData, listError, listLoading]);

    return (
        <Styled.FilterBox>
            <FilterDropdown
                title='Organizations'
                filterable
                options={organizationFilterOptions}
                selected={[]}
            />
            <FilterDropdown
                title='Category'
                filterable
                options={categoryFilterOptions}
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

export default GateFilter;
