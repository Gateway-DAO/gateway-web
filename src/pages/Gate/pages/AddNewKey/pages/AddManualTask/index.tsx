// Styling
import { FormStyled } from '../../../../../../components/Form';

// Components
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

// API
import { Gates, useCreateKeyMutation } from '../../../../../../graphql';

// Hooks
import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import Loader from '../../../../../../components/Loader';

const AddManualTask = (props) => {
    const {
        edit,
        gateData,
        setBackButton,
        setCreatedKey
    }: {
        edit: boolean;
        gateData: Gates;
        setBackButton(obj: Record<string, string | number>): void;
        setValidator(func: () => void): void;
        setCreatedKey(any): void;
    } = useOutletContext();

    const { register, resetField, setValue, control, handleSubmit, watch, formState: { errors } } = useFormContext();

    const { fields, append, prepend, remove, swap, move, insert, update } =
        useFieldArray({
            control,
            name: `info`,
        });

    const [createKey, { loading }] = useCreateKeyMutation()

    const onSubmit = async data => {
        await createKey({
            variables: {
                object: {
                    gate_id: gateData.id,
                    information: data.titleDescriptionPair,
                    task_type: 'manual',
                    task: {
                        type: 'manual',
                        info: data.info,
                    }
                },
            }
        })

        setCreatedKey(true);
    }

    useEffect(() => {
        setBackButton({
            url: -1,
            text: 'Add a New Key',
        });
    }, []);

    return (
        <FormStyled.FormBox onSubmit={handleSubmit(onSubmit)}>
            <FormStyled.H1>Add Manual Task</FormStyled.H1>

            {fields.map((info, idx) => (
                <>
                    <FormStyled.Fieldset>
                        <FormStyled.Label>Title*</FormStyled.Label>
                        <FormStyled.Input
                            {...register(`info.${idx}.title`)}
                            value={watch(`info.${idx}.title`)}
                            placeholder='This will be the title of your Key'
                            required
                        />
                    </FormStyled.Fieldset>

                    <FormStyled.Fieldset>
                        <FormStyled.Label>Description*</FormStyled.Label>
                        <FormStyled.Textarea
                            title='Description'
                            row='5'
                            placeholder='This will be the description of your manual task. We reccommend a maximum of 2 lines.'
                            {...register(`info.${idx}.description`)}
                            value={watch(`info.${idx}.description`)}
                            required
                        />
                    </FormStyled.Fieldset>

                    {fields.length > 1 && (
                        <FormStyled.DeleteWrapper
                            onClick={(e) => remove(idx)}
                        >
                            <FormStyled.IconButton>
                                <FaTrashAlt />
                            </FormStyled.IconButton>
                            <FormStyled.TextLabel marginLeft='10px'>
                                Delete Section
                            </FormStyled.TextLabel>
                        </FormStyled.DeleteWrapper>
                    )}
                </>
            ))}
            <FormStyled.AddWrapper onClick={() => append({ title: null, description: null })}>
                <FormStyled.IconButton
                    style={{
                        width: 'fit-content',
                        alignSelf: 'left',
                    }}
                >
                    <FaPlus />
                </FormStyled.IconButton>
                <FormStyled.TextLabel marginLeft='10px'>
                    Add another title and description
                </FormStyled.TextLabel>
            </FormStyled.AddWrapper>

            <FormStyled.Button type='submit'>{loading && <Loader color="white" />} Submit</FormStyled.Button>
        </FormStyled.FormBox>
    );
};

export default AddManualTask;
