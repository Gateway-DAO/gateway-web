// Styling
import { FormStyled } from '../../../../../../components/Form';

// Hooks
import { useOutletContext } from 'react-router-dom';
import Loader from '../../../../../../components/Loader';
import { FormikContextType } from 'formik';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Gates, useCreateKeyMutation } from '../../../../../../graphql';

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
        edit,
        gateData,
        setBackButton,
        setCreatedKey
    }: {
        edit: boolean;
        gateData: Gates;
        loading: boolean;
        setBackButton(obj: Record<string, string | number>): void;
        setCreatedKey(any): any;
    } = useOutletContext();

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useFormContext();

    const [createKey, { loading }] = useCreateKeyMutation()

    useEffect(() => {
        setBackButton({
            url: -1,
            text: 'Add a New Key',
        });
    }, []);

    const onSubmit = async data => {
        await createKey({
            variables: {
                object: {
                    gate_id: gateData.id,
                    information: data.titleDescriptionPair,
                    task_type: 'snapshot',
                    task: {
                        type: 'snapshot',
                        snapshotType: data.govActive.toUpperCase(),
                        spaceID: data.spaceID,
                        proposal: data.proposal,
                    }
                },
            }
        })

        setCreatedKey(true);
    }

    return (
        <FormStyled.FormBox onSubmit={handleSubmit(onSubmit)}>
            <FormStyled.H1>
                {edit ? 'Edit Snapshot Governance' : 'Add Snapshot Governance'}
            </FormStyled.H1>
            <FormStyled.Fieldset>
                <FormStyled.GridBox
                    cols='2'
                    gap='30px'
                    onChange={(e) =>
                        setValue('govActive', e.target.value)
                    }
                >
                    <FormStyled.BigRadio
                        id='option-1'
                        name='govActive'
                        value={ActiveGovernance.PROPOSAL as string}
                        label='Create a Proposal'
                        checked={
                            watch('govActive') ===
                            ActiveGovernance.PROPOSAL
                        }
                    />
                    <FormStyled.BigRadio
                        id='option-2'
                        name='govActive'
                        value={ActiveGovernance.VOTE as string}
                        label='Vote'
                        checked={
                            watch('govActive') === ActiveGovernance.VOTE
                        }
                    />
                </FormStyled.GridBox>
            </FormStyled.Fieldset>

            {watch('govActive') === ActiveGovernance.VOTE && (
                <FormStyled.Fieldset>
                    <FormStyled.Label>Specific Proposal*</FormStyled.Label>
                    <FormStyled.Input
                        {...register('proposal', { required: true })}
                        name='proposal'
                        placeholder='Input Snapshot Number'
                        value={watch('proposal')}
                        valid={!errors.proposal}
                    />
                    {errors.proposal && (
                        <FormStyled.SubText>
                            {errors.proposal}
                        </FormStyled.SubText>
                    )}
                </FormStyled.Fieldset>
            )}

            {(watch('govActive')=== ActiveGovernance.PROPOSAL ||
                watch('govActive')=== ActiveGovernance.VOTE) && (
                <FormStyled.Fieldset>
                    <FormStyled.Label>Space ID*</FormStyled.Label>
                    <FormStyled.Input
                        {...register('spaceID', { required: true })}
                        placeholder='Use an existing ENS name'
                        valid={!errors.spaceID}
                        value={watch('spaceID')}
                        required
                    />
                    {errors.spaceID && (
                        <FormStyled.SubText>
                            {errors.spaceID}
                        </FormStyled.SubText>
                    )}
                </FormStyled.Fieldset>
            )}

            <FormStyled.Button type='submit'>
                {loading && <Loader color='white' />}
                Submit
            </FormStyled.Button>
        </FormStyled.FormBox>
    );
};

export default AddGovernanceSnapshot;
