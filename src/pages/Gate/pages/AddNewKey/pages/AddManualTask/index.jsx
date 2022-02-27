// Styling
import { FormStyled } from '../../../../../../components/Form';

// Components
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

// Hooks
import { useState } from 'react';

const AddManualTask = (props) => {
    const [infoBlocks, setInfoBlocks] = useState([
        {
            title: '',
            description: '',
        },
    ]);

    /**
     * Updates a title on the infoBlocks array.
     * @returns None
     */
    const updateTitle = (e, idx) => {
        e.preventDefault();
        const newValue = e.target.value;

        const add = infoBlocks.map((value, i) => {
            if (idx === i) {
                return {
                    ...value,
                    title: newValue,
                };
            }
            return value;
        });
        setInfoBlocks(add);
    };

    /**
     * Updates a description on the infoBlocks array.
     * @returns None
     */
    const updateDescription = (e, idx) => {
        e.preventDefault();
        const newValue = e.target.value;

        const add = infoBlocks.map((value, i) => {
            if (idx === i) {
                return {
                    ...value,
                    description: newValue,
                };
            }
            return value;
        });
        setInfoBlocks(add);
    };

    /**
     * Add a new title/description pair to the infoBlocks array.
     * @returns None
     */
    const addTitleDescription = (e) => {
        e.preventDefault();

        setInfoBlocks([
            ...infoBlocks,
            {
                title: '',
                description: '',
            },
        ]);
    };

    /**
     * Deletes a pair on the infoBlocks array.
     * @returns None
     */
    const deletePair = (e, idx) => {
        e.preventDefault();

        setInfoBlocks(infoBlocks.filter((data, i) => i !== idx));
    };

    return (
        <FormStyled.FormBox>
            <FormStyled.H1>Add Manual Task</FormStyled.H1>

            {infoBlocks.map((info, idx) => (
                <>
                    <FormStyled.Fieldset>
                        <FormStyled.Label>Title*</FormStyled.Label>
                        <FormStyled.Input
                            value={info.title}
                            onChange={(e) => updateTitle(e, idx)}
                            placeholder='This will be the title of your Gate'
                        />
                    </FormStyled.Fieldset>

                    <FormStyled.Fieldset>
                        <FormStyled.Label>Description*</FormStyled.Label>
                        <FormStyled.Textarea
                            title='Description'
                            row='5'
                            placeholder='This will be the description of your Gate. We reccommend maximum of 2 lines.'
                            value={info.description}
                            onChange={(e) => updateDescription(e, idx)}
                        />
                    </FormStyled.Fieldset>

                    {infoBlocks.length > 1 && (
                        <FormStyled.DeleteWrapper
                            onClick={(e) => deletePair(e, idx)}
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
            <FormStyled.AddWrapper onClick={addTitleDescription}>
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

            <FormStyled.Button type='submit'>Submit</FormStyled.Button>
        </FormStyled.FormBox>
    );
};

export default AddManualTask;
