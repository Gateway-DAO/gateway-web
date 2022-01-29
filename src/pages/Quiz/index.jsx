import React, { useState, useEffect } from 'react'
import * as Styled from './style'
import { FormStyled } from '../../components/Form'
import space from '../../utils/canvas'
import CreateQuestion from './Component/CreateQuestion'
import { useNavigate } from 'react-router-dom'

const CreateQuiz = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [showComponent, setShowComponent] = useState(true)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    )

    // quiz data
    // const [data, setData] = useState([])
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
            noOfCorrectAnswer: 0,
        },
    ])

    const showShowComponent = () => {
        if (title.length === 0 || description.length === 0) {
            alert('Please enter title and description')
        } else {
            setShowComponent(!showComponent)
        }
    }

    const onSave = e => {
        e.preventDefault()
        setLoading(true)
        try {
            if (data.length === 0) {
                alert('Please enter at least one question')
                return false
            }
            alert('Questions are added')
            let validData = true
            data.map((value, idx) => {
                if (value.question.length === 0) {
                    alert(`In question ${idx + 1} please enter question title`)
                    validData = false
                    return false
                }
                if (value.options.length === 0) {
                    alert(
                        `In question ${idx + 1} please enter atleast one option`
                    )
                    validData = false
                    return false
                }
                if (
                    value.noOfCorrectAnswer === 0 ||
                    value.noOfCorrectAnswer > value.options.length
                ) {
                    alert(`In question ${idx + 1} no correct answer is there`)
                    validData = false
                    return false
                }
            })

            if (!validData) {
                alert('Fill the quiz properly')
                return false
            }

            alert('Question added are correct')

            const finalData = {
                title: title,
                description: description,
                questions: data,
            }

            console.log(finalData)

            navigate(`/`)
        } catch (err) {
            alert(err)
            console.log(err)
        }
        setLoading(true)
    }
    return (
        <FormStyled.FormBox onSubmit={onSave}>
            <Styled.SpaceBox id="space-canvas" />
            <FormStyled.H1>Add Quiz</FormStyled.H1>
            {showComponent ? (
                <>
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor="name">QUIZ TITLE</FormStyled.Label>
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
                        Next
                    </FormStyled.Button>
                </>
            ) : (
                <CreateQuestion questions={data} setQuestions={setData} />
            )}
        </FormStyled.FormBox>
    )
}

export default CreateQuiz
