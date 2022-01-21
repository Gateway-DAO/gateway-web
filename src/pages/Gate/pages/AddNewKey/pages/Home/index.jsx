import React, { useState, useEffect } from 'react'
import BackButton from '../../../../../../components/BackButton'
import Heading from '../../components/Heading'
import SelectTask from '../../components/SelectTask'
import SubmitButton from '../../components/SubmitButton'
import * as Styled from './style'
import { FormStyled } from '../../../../../../components/Form'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import space from '../../../../../../utils/canvas'

const AddNewKey = (props) => {
    const [taskLink, setTaskLink] = useState('')
    const [titleDescriptionPair, setTitleDescriptionPair] = useState([
        {
            title: '',
            description: '',
        },
    ])
    const [token, setToken] = useState('')
    const [amount, setAmount] = useState(0)
    const [keysRewarded, setKeysRewarded] = useState(0)
    const [peopleLimit, setPeopleLimit] = useState(0)

    //Update the title
    const updateTitle = (idx, newValue) => {
        const add = titleDescriptionPair.map((value, i) => {
            if (idx === i) {
                return {
                    ...value,
                    title: newValue,
                }
            }
            return value
        })
        setTitleDescriptionPair(add)
    }
    // Update the description
    const updateDescription = (idx, newValue) => {
        const add = titleDescriptionPair.map((value, i) => {
            if (idx === i) {
                return {
                    ...value,
                    description: newValue,
                }
            }
            return value
        })
        setTitleDescriptionPair(add)
    }
    const addTitleDescription = () => {
        setTitleDescriptionPair([
            ...titleDescriptionPair,
            {
                title: '',
                description: '',
            },
        ])
    }

    const deletePair = (idx) => {
        setTitleDescriptionPair(
            titleDescriptionPair.filter((data, i) => i != idx)
        )
    }

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    )

    return (
        <Styled.AddNewKeyContainer>
            <BackButton>Go back</BackButton>
            <Styled.MarginWrapper>
                <Styled.SpaceBox id="space-canvas" />
                <Heading text="Add a New Key" />
                {titleDescriptionPair.map((pair, idx) => {
                    return (
                        <FormStyled.Fieldset>
                            <FormStyled.Fieldset marginBottom="0px">
                                <FormStyled.Label htmlFor="title">
                                    Key Title*
                                </FormStyled.Label>
                                <FormStyled.Input
                                    id={`title-${idx}`}
                                    name="title"
                                    onChange={(e) =>
                                        updateTitle(idx, e.target.value)
                                    }
                                    value={pair.title}
                                    placeholder="This will be the title of your Key"
                                    required
                                />
                            </FormStyled.Fieldset>
                            <FormStyled.Fieldset marginBottom="0px">
                                <FormStyled.Label>
                                    Description*
                                </FormStyled.Label>
                                <FormStyled.Textarea
                                    id={`description-${idx}`}
                                    onChange={(e) =>
                                        updateDescription(idx, e.target.value)
                                    }
                                    value={pair.description}
                                    height="120px"
                                    placeholder="This will be the description of your Key. We reccommend maximum of 2 lines."
                                    required
                                />
                            </FormStyled.Fieldset>
                            {titleDescriptionPair.length > 1 && (
                                <FormStyled.DeleteWrapper
                                    onClick={() => deletePair(idx)}
                                >
                                    <FormStyled.DeleteIcon>
                                        <FaTrashAlt />
                                    </FormStyled.DeleteIcon>
                                    <FormStyled.DeleteContent>
                                        Delete section
                                    </FormStyled.DeleteContent>
                                </FormStyled.DeleteWrapper>
                            )}
                        </FormStyled.Fieldset>
                    )
                })}
                <FormStyled.Wrapper marginTop="-20px">
                    <FormStyled.IconButton
                        onClick={addTitleDescription}
                        style={{
                            width: 'fit-content',
                            alignSelf: 'left',
                        }}
                    >
                        <FaPlus />
                    </FormStyled.IconButton>
                    <FormStyled.TextLabel marginLeft="10px">
                        Add another title and description
                    </FormStyled.TextLabel>
                </FormStyled.Wrapper>
                <FormStyled.FieldsetWrapper marginBottom="0">
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor="token">
                            TOKEN
                        </FormStyled.Label>
                        <FormStyled.SmallInput
                            id="token"
                            name="token"
                            onChange={(e) => setToken(e.target.value)}
                            placeholder="Search"
                            value={token}
                            required
                        />
                    </FormStyled.Fieldset>
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor="amount">
                            AMOUNT
                        </FormStyled.Label>
                        <FormStyled.SmallInput
                            id="amount"
                            name="amount"
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="amount"
                            value={amount > 0 ? amount : ''}
                            required
                        />
                    </FormStyled.Fieldset>
                </FormStyled.FieldsetWrapper>
                <FormStyled.FieldsetWrapper>
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor="kayRew">
                            Keys REWARDED{' '}
                            <FormStyled.QuestionIcon>?</FormStyled.QuestionIcon>
                        </FormStyled.Label>
                        <FormStyled.SmallInput
                            id="kayRew"
                            name="kayRew"
                            onChange={(e) => setKeysRewarded(e.target.value)}
                            placeholder="0"
                            value={keysRewarded > 0 ? keysRewarded : ''}
                            required
                        />
                    </FormStyled.Fieldset>
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor="peopleLimit">
                            PEOPLE LIMIT{' '}
                            <FormStyled.QuestionIcon>?</FormStyled.QuestionIcon>
                        </FormStyled.Label>
                        <FormStyled.SmallInput
                            id="peopleLimit"
                            name="peopleLimit"
                            onChange={(e) => setPeopleLimit(e.target.value)}
                            placeholder="0"
                            value={peopleLimit > 0 ? peopleLimit : ''}
                            required
                        />
                    </FormStyled.Fieldset>
                </FormStyled.FieldsetWrapper>

                {/* <SelectTask setLink={setTaskLink} /> */}

                {/* TODO: make this look better */}
                <FormStyled.Fieldset marginBottom="30px">
                    <FormStyled.Label>Select a Task</FormStyled.Label>
                    <FormStyled.SubText>You should select one task per key</FormStyled.SubText>
                    <FormStyled.GridBox onChange={e => setTaskLink(e.target.value)}>
                        <FormStyled.Radio
                            id="task-1"
                            name="category"
                            value="quiz"
                            label="Create a Quiz"
                            checked={taskLink.includes('quiz')}
                        />
                        <FormStyled.Radio
                            id="task-2"
                            name="category"
                            value="meeting-code"
                            label="Meeting Code"
                            checked={taskLink.includes('meeting-code')}
                        />
                        <FormStyled.Radio
                            id="task-3"
                            name="category"
                            value="token"
                            label="Hold a Token"
                            checked={taskLink.includes('token')}
                        />
                        <FormStyled.Radio
                            id="task-4"
                            name="category"
                            value="sc-integration"
                            label="Smart Contract Integration"
                            checked={taskLink.includes('sc-integration')}
                        />
                        <FormStyled.Radio
                            id="task-5"
                            name="category"
                            value="governance"
                            label="Snapshot Governance"
                            checked={taskLink.includes('governance')}
                        />
                        <FormStyled.Radio
                            id="task-6"
                            name="category"
                            value="manual"
                            label="Manual Task"
                            checked={taskLink.includes('manual')}
                        />
                        <FormStyled.Radio
                            id="task-7"
                            name="category"
                            value="self-verify"
                            label="Self Verify"
                            checked={taskLink.includes('self-verify')}
                        />
                    </FormStyled.GridBox>
                </FormStyled.Fieldset>

                <SubmitButton link={taskLink} />
            </Styled.MarginWrapper>
        </Styled.AddNewKeyContainer>
    )
}

export default AddNewKey
