// Styling
import { FormStyled } from '../../../../../../components/Form';

// Hooks
import { useOutletContext } from 'react-router-dom';
import Loader from '../../../../../../components/Loader';
import { FormikContextType } from 'formik';
import { useEffect } from 'react';

interface Key {
    taskLink: string;
    titleDescriptionPair: { title: string; description: string }[];
    keysRewarded: number;
    peopleLimit: number;
    unlimited: boolean;

    // Governance
    govActive?: string;
    proposal?: string;
    spaceID?: string;
}

enum ActiveGovernance {
    PROPOSAL = 'proposal',
    VOTE = 'vote',
}

const AddGovernanceSnapshot = () => {
    const {
        formik,
        edit,
        loading,
        setBackButton,
        setValidator,
    }: {
        formik: FormikContextType<Key>;
        edit: boolean;
        loading: boolean;
        setBackButton(obj: Record<string, string | number>): void;
        setValidator(func: () => void): void;
    } = useOutletContext();

    /**
     * It checks if the address is a valid address.
     */
    const validate = (values) => {
        // eslint-disable-next-line prefer-const
        let errors: Record<string, string> = {};

        if (!values.govActive) {
            errors.govActive = 'You need to pick one';
        }

        if (!values.spaceID) {
            errors.spaceID = 'Required';
        }

        /*
        if ((values.govActive = ActiveGovernance.VOTE && !values.proposal)) {
            errors.proposal = 'Required';
        }
        */

        return errors;
    };

    useEffect(() => {
        setBackButton({
            url: -1,
            text: 'Add a New Key',
        });

        setValidator(() => validate);
    }, []);

    return (
        <FormStyled.FormBox onSubmit={formik.handleSubmit}>
            <FormStyled.H1>
                {edit ? 'Edit Snapshot Governance' : 'Add Snapshot Governance'}
            </FormStyled.H1>
            <FormStyled.Fieldset>
                <FormStyled.GridBox
                    cols='2'
                    gap='30px'
                    onChange={(e) =>
                        formik.setFieldValue('govActive', e.target.value)
                    }
                >
                    <FormStyled.BigRadio
                        id='option-1'
                        name='govActive'
                        value={ActiveGovernance.PROPOSAL as string}
                        label='Create a Proposal'
                        checked={
                            formik.values.govActive ===
                            ActiveGovernance.PROPOSAL
                        }
                    />
                    <FormStyled.BigRadio
                        id='option-2'
                        name='govActive'
                        value={ActiveGovernance.VOTE as string}
                        label='Vote'
                        checked={
                            formik.values.govActive === ActiveGovernance.VOTE
                        }
                    />
                </FormStyled.GridBox>
            </FormStyled.Fieldset>

            {formik.values.govActive === ActiveGovernance.VOTE && (
                <FormStyled.Fieldset>
                    <FormStyled.Label>Specific Proposal*</FormStyled.Label>
                    <FormStyled.Input
                        value={formik.values.proposal}
                        onChange={formik.handleChange}
                        name='proposal'
                        placeholder='Input Snapshot Number'
                        valid={!formik.errors.proposal}
                        required
                    />
                    {formik.errors.proposal && (
                        <FormStyled.SubText>
                            {formik.errors.proposal}
                        </FormStyled.SubText>
                    )}
                </FormStyled.Fieldset>
            )}

            {(formik.values.govActive === ActiveGovernance.PROPOSAL ||
                formik.values.govActive === ActiveGovernance.VOTE) && (
                <FormStyled.Fieldset>
                    <FormStyled.Label>Space ID*</FormStyled.Label>
                    <FormStyled.Input
                        value={formik.values.spaceID}
                        name='spaceID'
                        onChange={formik.handleChange}
                        placeholder='Use an existing ENS name'
                        valid={!formik.errors.spaceID}
                        required
                    />
                    {formik.errors.spaceID && (
                        <FormStyled.SubText>
                            {formik.errors.spaceID}
                        </FormStyled.SubText>
                    )}
                </FormStyled.Fieldset>
            )}

            <FormStyled.Button type='submit'>
                {formik.isSubmitting && <Loader color='white' />}
                Submit
            </FormStyled.Button>
        </FormStyled.FormBox>
    );
};

export default AddGovernanceSnapshot;
