import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Styling
import * as Styled from './style'
import { FormStyled } from '../../components/Form'

// Components
import space from '../../utils/canvas'
import CreateQuestion from './Component/CreateQuestion'

// Hooks
import { useLocation, useNavigate } from 'react-router-dom'
import { useCreateQuiz } from '../../api/database/useCreateKey'
import Loader from '../../components/Loader'
import GateSuccessPage from '../GateSuccessPage'

/**
 * This function is responsible for creating a quiz.
 */
const CreateQuiz = () => {
    // State
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('Processing your Quiz');
    const [data, setData] = useState([
        {
            question: '',
            options: [
                {
                    answer: '',
                    correct: false,
                },
                {
                    answer: '',
                    correct: false,
                },
            ],
            noOfCorrectAnswer:0
        },
    ])
    const [showComponent, setShowComponent] = useState(true)
    const [loading, setLoading] = useState(false)
    const { state } = useLocation()

    // Hooks
    const navigate = useNavigate()
    const { createQuiz } = useCreateQuiz()

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    )

    /**
     * * If the title and description are empty, alert the user.
     * * Otherwise, set the showComponent to true.
     */
    const showShowComponent = () => {
        if (title.length === 0 || description.length === 0) {
            alert('Please enter title and description')
        } else {
            setShowComponent(!showComponent)
        }
    }

    /**
     * This function is used to create a quiz.
     * @param e - event
     * @returns The mutation is returning the data of the quiz.
     */
    const onSave = async (e) => {
        e.preventDefault()
        setLoading(true)
        // TODO: find better alerts
        try {
            if (data.length === 0) {
                setMessage('Please enter at least one question')
                // setLoading(false)
                return false
            }

            let validData = true
            
            data.forEach((value, idx) => {
                if (value.question.length === 0) {
                    setMessage(`In question ${idx + 1} please enter question title`)
                    // setLoading(false)
                    validData = false
                    return false
                }
                if (value.options.length === 0) {
                    setMessage(
                        `In question ${idx + 1} please enter atleast one option`
                    )
                    // setLoading(false)
                    validData = false
                    return false
                }
                if (
                    value.noOfCorrectAnswer === 0 ||
                    value.noOfCorrectAnswer > value.options.length
                ) {
                    setMessage(`In question ${idx + 1} no correct answer is there`)
                    validData = false
                    return false
                }
            })

            if (!validData) {
                setTimeout(()=>{
                    setLoading(false)
                    setMessage('Processing your Quiz')
                },5000);
                return false
            }

            const finalData = {
                title: title,
                description: description,
                questions: data,
            }

            console.log(finalData)

            await createQuiz({
                variables: {
                    input: {
                        id: uuidv4(),
                        gateID: state.gateData.id,
                        information: state.titleDescriptionPair,
                        token: state.token,
                        tokenAmount: state.amount,
                        keys: state.keysRewarded,
                        peopleLimit: state.peopleLimit,
                        task: {
                            type: 'QUIZ',
                            questions: data,
                            passedAt: 0
                        },
                    },
                },
            })
            setMessage("Quiz is successfully added");
            navigate(`/gate/${state.gateData.id}`)
        } catch (err) {
            alert(err)
            console.log(err)
        }
        // finally{
        //     setLoading(false)
        // }
        setLoading(false)
    }

    return (
        <FormStyled.FormBox onSubmit={onSave}>
            {loading?
                <GateSuccessPage heading={message}/>
            :
                <Styled.Container>
                <Styled.SpaceBox id="space-canvas"/>
                <FormStyled.H1>Add Quiz</FormStyled.H1>
                {showComponent ? (
                    <>
                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor="name">
                                QUIZ TITLE
                            </FormStyled.Label>
                            <FormStyled.Input
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                id="title"
                                name="title"
                                placeholder="This will be the title of your Gate "
                                value={title}
                                required
                            />
                        </FormStyled.Fieldset>

                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor="description">
                                QUIZ Description
                            </FormStyled.Label>
                            <FormStyled.Textarea
                                height="100px"
                                id="description"
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="This will be the description of your Gate. We reccommend maximum of 2 lines."
                                value={description}
                                required
                            ></FormStyled.Textarea>
                        </FormStyled.Fieldset>

                        <FormStyled.Button
                            id="submit_msg"
                            type="button"
                            onClick={showShowComponent}
                        >
                            {loading && <Loader color="white" />}
                            Next
                        </FormStyled.Button>
                    </>
                ) : (
                    <CreateQuestion questions={data} setQuestions={setData} />
                )
                }
            </Styled.Container>
        }
        </FormStyled.FormBox>
    )
}

export default CreateQuiz
