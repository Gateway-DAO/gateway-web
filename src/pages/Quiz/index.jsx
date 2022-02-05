import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

// Styling
import * as Styled from './style'
import { FormStyled } from '../../components/Form'

// Components
import space from '../../utils/canvas'
import CreateQuestion from './Component/CreateQuestion'
import Home from './Component/Home'
import GateSuccessPage from '../GateSuccessPage'
import Persentage from './Component/Persentage'

// Hooks
import { useLocation, useNavigate } from 'react-router-dom'
import { useCreateQuiz } from '../../api/database/useCreateKey'
// import Loader from '../../components/Loader'


/**
 * This function is responsible for creating a quiz.
 */
const CreateQuiz = () => {
    // State
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('Processing your Quiz');
    const [activeModal, setActiveModal] = useState('HOME');
    const [persentage, setPersentage] = useState(100);
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
        }
    ])
    const [showComponent, setShowComponent] = useState(true)
    const [loading, setLoading] = useState(false)
    const { state } = useLocation()

    // Hooks
    const navigate = useNavigate()
    const { createQuiz } = useCreateQuiz()

    // useEffect(
    //     () => space(window.innerHeight, window.innerWidth),
    //     [window.innerHeight, window.innerWidth]
    // )

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
    const ActiveModal = ()=>{
        switch(activeModal){
            case 'HOME':
                return <Home 
                            title={title} 
                            setTitle={setTitle} 
                            description={description} 
                            setDescription={setDescription}
                            setActiveModal={setActiveModal}
                        />
            case 'CREATE_QUIZ':
                return <CreateQuestion 
                            data={data} 
                            setData={setData} 
                            setActiveModal={setActiveModal}
                        />
            case 'PERSENTAGE_PAGE':
                return <Persentage 
                            persentage={persentage}
                            setPersentage={setPersentage}
                        />
            default:
                return <Home />
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
            if (title.length === 0 || description.length === 0) {
                setMessage('Please enter title and description')
                setTimeout(()=>{
                    setLoading(false)
                    setMessage('Processing your Quiz')
                    setActiveModal('HOME')
                },5000);

                return false
            }
            if (data.length === 0) {
                setMessage('Please enter at least one question')
                setTimeout(()=>{
                    setLoading(false)
                    setMessage('Processing your Quiz')
                    setActiveModal('CREATE_QUIZ')
                },5000);
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
                    setActiveModal('CREATE_QUIZ')
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
            setMessage("We are facing error in saving please try again");
            // alert(err)
            console.log(err)
        }
        setTimeout(()=>{
            setLoading(false)
            setMessage('Processing your Quiz')
        },5000);
    }

    return (
        <FormStyled.FormBox onSubmit={onSave}>
            {loading?
                <GateSuccessPage heading={message}/>
            :
                <Styled.Container>
                    {/* <Styled.SpaceBox id="space-canvas"/> */}
                    <FormStyled.H1>Add Quiz</FormStyled.H1>
                    <ActiveModal />
                </Styled.Container>
        }
        </FormStyled.FormBox>
    )
}

export default CreateQuiz
