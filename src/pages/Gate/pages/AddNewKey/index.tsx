import React from 'react';
import BackButton from '../../../../components/BackButton';
import { Outlet, useOutletContext } from 'react-router-dom';
import * as Styled from './style';

/**
 * It renders the Outlet component with the gateData context.
 * @returns The `AddNewKey` component is being returned.
 */
const AddNewKey = () => {
    const { gateData }: Record<string, any> = useOutletContext();

    return (
        <Styled.Container>
            <BackButton>Go back</BackButton>
            <Outlet
                context={{
                    gateData,
                }}
            />
        </Styled.Container>
    );
};

export default AddNewKey;
