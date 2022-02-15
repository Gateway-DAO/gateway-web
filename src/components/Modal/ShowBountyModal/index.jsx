import Modal from '../index';
import * as Styled from './style';
import * as ModalStyled from '../style';
import { FormStyled } from '../../Form';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ShowBountyModal = (props) => {
    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Bounty Info</ModalStyled.Header>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='headline'>
                        Headline
                    </FormStyled.Label>
                    <Styled.Text>{props.bounty.headline}</Styled.Text>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='description'>
                        Description
                    </FormStyled.Label>
                    <Styled.Text>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {props.bounty.description}
                        </ReactMarkdown>
                    </Styled.Text>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset marginBottom='30px'>
                    <FormStyled.Label>Categories</FormStyled.Label>
                    <Styled.GridBox>
                        <FormStyled.LockedCheckbox
                            id='category-1'
                            name='category'
                            value='Design'
                            label='Design'
                            checked={props.bounty.categories.includes('Design')}
                        />
                        <FormStyled.LockedCheckbox
                            id='category-2'
                            name='category'
                            value='Technical'
                            label='Technical'
                            checked={props.bounty.categories.includes(
                                'Technical'
                            )}
                        />
                        <FormStyled.LockedCheckbox
                            id='category-3'
                            name='category'
                            value='Business'
                            label='Business'
                            checked={props.bounty.categories.includes(
                                'Business'
                            )}
                        />
                        <FormStyled.LockedCheckbox
                            id='category-4'
                            name='category'
                            value='Creative'
                            label='Creative'
                            checked={props.bounty.categories.includes(
                                'Creative'
                            )}
                        />
                        <FormStyled.LockedCheckbox
                            id='category-5'
                            name='category'
                            value='Strategy'
                            label='Strategy'
                            checked={props.bounty.categories.includes(
                                'Strategy'
                            )}
                        />
                        <FormStyled.LockedCheckbox
                            id='category-6'
                            name='category'
                            value='Product'
                            label='Product'
                            checked={props.bounty.categories.includes(
                                'Product'
                            )}
                        />
                        <FormStyled.LockedCheckbox
                            id='category-7'
                            name='category'
                            value='Other'
                            label='Other'
                            checked={props.bounty.categories.includes('Other')}
                        />
                    </Styled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset marginBottom='30px'>
                    <FormStyled.Label>Level</FormStyled.Label>
                    <Styled.GridBox>
                        <FormStyled.Radio
                            id='level-1'
                            name='level'
                            value='Novice'
                            label='Novice'
                            checked={props.bounty.level === 'Novice'}
                        />
                        <FormStyled.Radio
                            id='level-2'
                            name='level'
                            value='Warrior'
                            label='Warrior'
                            checked={props.bounty.level === 'Warrior'}
                        />
                        <FormStyled.Radio
                            id='level-3'
                            name='level'
                            value='Master'
                            label='Master'
                            checked={props.bounty.level === 'Master'}
                        />
                        <FormStyled.Radio
                            id='level-4'
                            name='level'
                            value='Champion'
                            label='Champion'
                            checked={props.bounty.level === 'Champion'}
                        />
                        <FormStyled.Radio
                            id='level-5'
                            name='level'
                            value='Legend'
                            label='Legend'
                            checked={props.bounty.level === 'Legend'}
                        />
                    </Styled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='reward'>Reward</FormStyled.Label>
                    <Styled.Text>{props.bounty.reward}</Styled.Text>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='directions'>
                        Directions
                    </FormStyled.Label>
                    <Styled.Text>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {props.bounty.directions}
                        </ReactMarkdown>
                    </Styled.Text>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='links'>
                        Important Links
                    </FormStyled.Label>
                    {props.bounty.links.map((link) => {
                        return (
                            <Styled.Text>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {link}
                                </ReactMarkdown>
                            </Styled.Text>
                        );
                    })}
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='end-date'>
                        End Date
                    </FormStyled.Label>
                    <Styled.Text>{props.bounty.endDate}</Styled.Text>
                </FormStyled.Fieldset>
            </Styled.Container>
        </Modal>
    );
};

export default ShowBountyModal;
