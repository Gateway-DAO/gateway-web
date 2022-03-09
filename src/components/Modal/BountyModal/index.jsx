import Modal from '../index';
import * as Styled from './style';
import * as ModalStyled from '../style';
import { FormStyled } from '../../Form';
import { useState } from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import RichEditor from '../../RichTextEditor';
import { useCreateBounty } from '../../../api/database/useCreateBounty';
import { Navigate } from 'react-router-dom';
import normalizeUrl from 'normalize-url';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../../Loader';

const BountyModal = (props) => {
    const [headline, setHeadline] = useState(null);
    const [description, setDescription] = useState('Enter the description');
    const [categories, setCategories] = useState([]);
    const [level, setLevel] = useState(null);
    const [reward, setReward] = useState(null);
    const [directions, setDirections] = useState(null);
    const [links, setLinks] = useState(['']);
    const [endDate, setEndDate] = useState(null);

    const { createBounty, error, loading } = useCreateBounty();

    const submitToDB = async () => {
        let parsedCategories = [];
        let currentDate = new Date().toISOString();

        categories.forEach((cat) => parsedCategories.push(cat));

        const newBounty = {
            id: uuidv4(),
            daoID: props.id,
            headline,
            description,
            level,
            categories: parsedCategories,
            reward,
            directions,
            links: links.filter(
                (link) =>
                    link.length > 0 &&
                    normalizeUrl(link, { defaultProtocol: 'https:' })
            ),
            endDate: new Date(endDate).toISOString(),
            postDate: currentDate,
        };

        await createBounty({
            variables: {
                input: newBounty,
            },
        });

        props.set([...props.data, newBounty]);
        props.toggle();
    };

    const toggleCheckbox = (e) => {
        const value = e.target.value;
        console.log(e);

        if (categories.includes(value) && !e.target.checked) {
            setCategories(categories.filter((cat) => cat !== value));
        } else if (e.target.checked) {
            setCategories([...categories, value]);
        }
    };

    const deleteLink = (idx) => {
        setLinks(links.filter((i, index) => index !== idx));
    };

    const changeLink = (idx, e) => {
        e.preventDefault();
        setLinks(
            links.map((i, index) => {
                if (index === idx) {
                    return e.target.value;
                }

                return i;
            })
        );
    };

    if (error) {
        return <Navigate to='/404' />;
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Add Bounty</ModalStyled.Header>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='headline'>
                        Headline
                    </FormStyled.Label>
                    <FormStyled.Input
                        onChange={(e) => setHeadline(e.target.value)}
                        value={headline}
                        type='text'
                        id='headline'
                        name='headline'
                        placeholder='Integrate your community on Gateway'
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='description'>
                        Description
                    </FormStyled.Label>
                    <RichEditor set={setDescription} value={description} />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset marginBottom='30px'>
                    <FormStyled.Label>Categories</FormStyled.Label>
                    <Styled.GridBox>
                        <FormStyled.Checkbox
                            id='category-1'
                            name='category'
                            value='Design'
                            label='Design'
                            onChange={toggleCheckbox}
                        />
                        <FormStyled.Checkbox
                            id='category-2'
                            name='category'
                            value='Technical'
                            label='Technical'
                            onChange={toggleCheckbox}
                        />
                        <FormStyled.Checkbox
                            id='category-3'
                            name='category'
                            value='Business'
                            label='Business'
                            onChange={toggleCheckbox}
                        />
                        <FormStyled.Checkbox
                            id='category-4'
                            name='category'
                            value='Creative'
                            label='Creative'
                            onChange={toggleCheckbox}
                        />
                        <FormStyled.Checkbox
                            id='category-5'
                            name='category'
                            value='Strategy'
                            label='Strategy'
                            onChange={toggleCheckbox}
                        />
                        <FormStyled.Checkbox
                            id='category-6'
                            name='category'
                            value='Product'
                            label='Product'
                            onChange={toggleCheckbox}
                        />
                        <FormStyled.Checkbox
                            id='category-7'
                            name='category'
                            value='Other'
                            label='Other'
                            onChange={toggleCheckbox}
                        />
                    </Styled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset marginBottom='30px'>
                    <FormStyled.Label>Level</FormStyled.Label>
                    <Styled.GridBox onChange={(e) => setLevel(e.target.value)}>
                        <FormStyled.Radio
                            id='level-1'
                            name='level'
                            value='Novice'
                            label='Novice'
                            checked={level === 'Novice'}
                        />
                        <FormStyled.Radio
                            id='level-2'
                            name='level'
                            value='Warrior'
                            label='Warrior'
                            checked={level === 'Warrior'}
                        />
                        <FormStyled.Radio
                            id='level-3'
                            name='level'
                            value='Master'
                            label='Master'
                            checked={level === 'Master'}
                        />
                        <FormStyled.Radio
                            id='level-4'
                            name='level'
                            value='Champion'
                            label='Champion'
                            checked={level === 'Champion'}
                        />
                        <FormStyled.Radio
                            id='level-5'
                            name='level'
                            value='Legend'
                            label='Legend'
                            checked={level === 'Legend'}
                        />
                    </Styled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='reward'>Reward</FormStyled.Label>
                    <FormStyled.Input
                        id='reward'
                        type='text'
                        onChange={(e) => setReward(e.target.value)}
                        value={reward}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='directions'>
                        Directions
                    </FormStyled.Label>
                    <RichEditor set={setDirections} value={directions} />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='links'>
                        Important Links
                    </FormStyled.Label>

                    {links.map((step, idx) => (
                        <FormStyled.InputWrapper key={idx}>
                            <FormStyled.Input
                                id={`link-${idx}`}
                                key={`bounty-link-${idx}`}
                                onChange={(e) => changeLink(idx, e)}
                                value={step}
                                type='text'
                            />
                            <FormStyled.IconButton
                                onClick={() => deleteLink(idx)}
                                style={{ marginLeft: '10px' }}
                            >
                                <FaTrashAlt />
                            </FormStyled.IconButton>
                        </FormStyled.InputWrapper>
                    ))}

                    <FormStyled.IconButton
                        onClick={() => setLinks([...links, ''])}
                        style={{ width: 'fit-content', alignSelf: 'center' }}
                    >
                        <FaPlus />
                    </FormStyled.IconButton>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='end-date'>
                        End Date
                    </FormStyled.Label>
                    <FormStyled.Input
                        id='end-date'
                        type='date'
                        onChange={(e) => setEndDate(e.target.value)}
                        value={endDate}
                    />
                </FormStyled.Fieldset>

                <FormStyled.Button
                    id='submit_msg'
                    type='button'
                    onClick={submitToDB}
                >
                    {loading && <Loader color='white' />}
                    Submit
                </FormStyled.Button>
            </Styled.Container>
        </Modal>
    );
};

export default BountyModal;
