import React, { useState, useEffect } from 'react'

// Styling
import * as Styled from './style'
import { FormStyled } from '../../../../../../components/Form'

// Components
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import Loader from '../../../../../../components/Loader'

// Hooks
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useCreateSelfVerify } from '../../../../../../api/database/useCreateKey'

// Utils
import space from '../../../../../../utils/canvas'
import { v4 as uuidv4 } from 'uuid'
import AddKeySuccess from '../AddKeySuccess'

const AddNewKey = (props) => {
    // States
    const [taskLink, setTaskLink] = useState('')
    const [titleDescriptionPair, setTitleDescriptionPair] = useState([
        {
            title: '',
            description: '',
        },
    ])
    // const [token, setToken] = useState('')
    // const [amount, setAmount] = useState(0)
    const [keysRewarded, setKeysRewarded] = useState(0)
    const [peopleLimit, setPeopleLimit] = useState(0)
    const [peopleLimitPlaceholder, setPeopleLimitPlaceholder] = useState("0");
    const [keysDilogBox,setKeysDilogBox] = useState(false);
    const [peopleLimitDilogBox,setPeopleLimitDilogBox] = useState(false);
    const [createdKey, setCreatedKey] = useState(false);
    
    const { gateData } = useOutletContext()

    // Hooks
    const navigate = useNavigate()
    const { createSelfVerify, data, loading, error } = useCreateSelfVerify()

    /**
     * Updates a title on the titleDescriptionPair array.
     * @returns None
     */
    const updateTitle = (e, idx) => {
        e.preventDefault()
        const newValue = e.target.value

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

    /**
     * Updates a description on the titleDescriptionPair array.
     * @returns None
     */
    const updateDescription = (e, idx) => {
        e.preventDefault()
        const newValue = e.target.value

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

    /**
     * Add a new title/description pair to the titleDescriptionPair array.
     * @returns None
     */
    const addTitleDescription = (e) => {
        e.preventDefault()

        setTitleDescriptionPair([
            ...titleDescriptionPair,
            {
                title: '',
                description: '',
            },
        ])
        window.scrollBy(0,30);
    }

    /**
     * Deletes a pair on the titleDescriptionPair array.
     * @returns None
     */
    const deletePair = (e, idx) => {
        e.preventDefault()

        setTitleDescriptionPair(
            titleDescriptionPair.filter((data, i) => i !== idx)
        )
    }

    const unlimitedClicked = ()=>{
        if(peopleLimitPlaceholder==='0' || peopleLimit>0){
            setPeopleLimitPlaceholder('Unlimited');
            setPeopleLimit(0);
        }else{
            setPeopleLimitPlaceholder('0');
        }
    }

    const keysDilogBoxFunc = ()=>{
        setKeysDilogBox(!keysDilogBox);
    }
    const peopleLimitDilogBoxFunc= ()=>{
        setPeopleLimitDilogBox(!peopleLimitDilogBox)
    }
    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    )

    /**
     * Navigates to the next step of the task or, if it is a self verify task, adds a new key.
     * @returns None
     */
    const onSubmit = async (e) => {
        // e.preventDefault()

        if (taskLink !== 'self-verify') {
            navigate(taskLink, {
                state: {
                    gateData,
                    titleDescriptionPair,
                    token: "",
                    amount: 0,
                    keysRewarded,
                    peopleLimit,
                },
            })
        } else {
            e.preventDefault()

            try {
                await createSelfVerify({
                    variables: {
                        input: {
                            id: uuidv4(),
                            gateID: gateData.id,
                            information: titleDescriptionPair,
                            //token: token,
                            //tokenAmount: amount,
                            token: "",
                            tokenAmount: 0,
                            keys: keysRewarded,
                            peopleLimit,
                            task: {
                                type: 'SELF_VERIFY',
                            },
                        },
                    },
                })

                setCreatedKey(true)
            } catch (err) {
                alert('An error occurred. Please try again later!')
                console.log(err)
            }
        }
    }

    return createdKey ? <AddKeySuccess gate={gateData.id} /> : (
        <Styled.AddNewKeyContainer>
            <Styled.SpaceBox id="space-canvas" />
            <FormStyled.FormBox onSubmit={onSubmit}>
                <FormStyled.H1>Add a New Key</FormStyled.H1>

                {titleDescriptionPair.map((pair, idx) => (
                    <>
                        <FormStyled.Fieldset marginBottom="0px">
                            <FormStyled.Label htmlFor="title">
                                Key Title*
                            </FormStyled.Label>
                            <FormStyled.Input
                                id={`title-${idx}`}
                                name="title"
                                onChange={(e) => updateTitle(e, idx)}
                                value={pair.title}
                                placeholder="This will be the title of your Key"
                                required
                            />
                        </FormStyled.Fieldset>
                        <FormStyled.Fieldset marginBottom="0px">
                            <FormStyled.Label>Description*</FormStyled.Label>
                            <FormStyled.Textarea
                                id={`description-${idx}`}
                                onChange={(e) => updateDescription(e, idx)}
                                value={pair.description}
                                height="120px"
                                placeholder="This will be the description of your Key. We reccommend maximum of 2 lines."
                                required
                            />
                        </FormStyled.Fieldset>

                        {titleDescriptionPair.length > 1 && (
                            <FormStyled.DeleteWrapper
                                onClick={(e) => deletePair(e, idx)}
                            >
                                <FormStyled.IconButton>
                                    <FaTrashAlt />
                                </FormStyled.IconButton>
                                <FormStyled.TextLabel marginLeft="10px">
                                    Delete Section
                                </FormStyled.TextLabel>
                            </FormStyled.DeleteWrapper>
                        )}
                    </>
                ))}

                <FormStyled.AddWrapper>
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
                </FormStyled.AddWrapper>
                
                {/*
                <FormStyled.FieldsetRow marginBottom="0">
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor="token">
                            TOKEN
                        </FormStyled.Label>
                        <FormStyled.Input
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
                        <FormStyled.Input
                            id="amount"
                            name="amount"
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="amount"
                            value={amount > 0 ? amount : ''}
                            required
                        />
                    </FormStyled.Fieldset>
                </FormStyled.FieldsetRow>
                */}

                <FormStyled.FieldsetRow>
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor="keysRewarded">
                            Keys REWARDED{' '}
                            <FormStyled.QuestionIcon
                                onMouseEnter={keysDilogBoxFunc}
                                onMouseLeave={keysDilogBoxFunc}    
                            >?</FormStyled.QuestionIcon>
                            {keysDilogBox&& 
                                <FormStyled.DescriptionDilogBox>
                                    Keys REWARDED
                                </FormStyled.DescriptionDilogBox>
                            }
                        </FormStyled.Label>
                        <FormStyled.Input
                            id="keysRewarded"
                            name="keysRewarded"
                            onChange={(e) => setKeysRewarded(e.target.value)}
                            placeholder="0"
                            value={keysRewarded > 0 ? keysRewarded : ''}
                            required
                        />
                    </FormStyled.Fieldset>

                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor="peopleLimit">
                            PEOPLE LIMIT{' '}
                            <FormStyled.QuestionIcon
                                onMouseEnter={peopleLimitDilogBoxFunc}
                                onMouseLeave={peopleLimitDilogBoxFunc}    
                            >?</FormStyled.QuestionIcon>
                            {peopleLimitDilogBox&& 
                                <FormStyled.DescriptionDilogBox>
                                    People Limit
                                </FormStyled.DescriptionDilogBox>
                            }
                        </FormStyled.Label>
                        <Styled.InputContainer
                            value={peopleLimit > 0 ? peopleLimit : ''}
                        >
                            <Styled.Input
                                id="peopleLimit"
                                name="peopleLimit"
                                onChange={(e) => setPeopleLimit(e.target.value)}
                                placeholder={peopleLimitPlaceholder}
                                value={peopleLimit > 0 ? peopleLimit : ''}
                                required ={peopleLimitPlaceholder==='0'}
                            />
                            <Styled.UnlimitedBoxContainer
                                onClick={unlimitedClicked}
                                value={peopleLimit > 0 ? peopleLimit : ''}
                            >
                                Unlimited
                            </Styled.UnlimitedBoxContainer>
                        </Styled.InputContainer>
                    </FormStyled.Fieldset>
                </FormStyled.FieldsetRow>

                <FormStyled.Fieldset marginBottom="30px">
                    <FormStyled.Label>Select a Task</FormStyled.Label>
                    <FormStyled.SubText>
                        You should select one task per key
                    </FormStyled.SubText>
                    <FormStyled.GridBox
                        onChange={(e) => setTaskLink(e.target.value)}
                    >
                        <FormStyled.BigRadio
                            id="task-1"
                            name="task"
                            value="quiz"
                            label="Create a Quiz"
                            checked={taskLink === 'quiz'}
                        />
                        <FormStyled.BigRadio
                            id="task-2"
                            name="task"
                            value="meeting-code"
                            label="Meeting Code"
                            checked={taskLink === 'meeting-code'}
                        />
                        <FormStyled.BigRadio
                            id="task-3"
                            name="task"
                            value="token"
                            label="Hold a Token"
                            checked={taskLink === 'token'}
                        />
                        <FormStyled.BigRadio
                            id="task-4"
                            name="task"
                            value="sc-interation"
                            label="Contract Interaction"
                            checked={taskLink === 'sc-interation'}
                        />
                        <FormStyled.BigRadio
                            id="task-5"
                            name="task"
                            value="governance"
                            label="Snapshot Governance"
                            checked={taskLink === 'governance'}
                        />
                        <FormStyled.BigRadio
                            id="task-6"
                            name="task"
                            value="manual"
                            label="Manual Task"
                            checked={taskLink === 'manual'}
                        />
                        <FormStyled.BigRadio
                            id="task-7"
                            name="task"
                            value="self-verify"
                            label="Self Verify"
                            checked={taskLink === 'self-verify'}
                        />
                    </FormStyled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Button type="submit">
                    {loading && <Loader color="white" />}
                    Next
                </FormStyled.Button>
            </FormStyled.FormBox>
        </Styled.AddNewKeyContainer>
    )
}

export default AddNewKey
