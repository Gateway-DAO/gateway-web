import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as Styled from './style'
import space from '../../utils/canvas'
import CreateQuestion from './Component/CreateQuestion'
import { ConfigService } from 'aws-sdk'
import { Navigate, useNavigate } from 'react-router-dom'

const CreateQuiz = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [showComponent, setShowComponent] = useState(true)
    const [loading, setLoading] = useState(false);
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
            options:[
                {
                    option: '',
                    correct: false
                },{
                    option: '',
                    correct: false
                },{
                    option: '',
                    correct: false
                },{
                    option: '',
                    correct: false
                }
            ],
            noOfCorrectAnswer: 0
        },
    ])

    const showShowComponent = ()=>{
        if(title.length===0 || description.length===0){
            alert("Please enter title and description");
        }else{
            setShowComponent(!showComponent)
        }
    }

    const onSave = ()=>{
        setLoading(true);
        try{
            if(data.length===0){
                alert("Please enter atleast one question");
                return false;
            }
            alert("Questions are added");
            var validData = data.map((value,idx)=>{
                if(value.question.length===0){
                    alert(`In question ${idx+1} please enter question title`);
                    return false;
                }
                if(value.options.length===0){
                    alert(`In question ${idx+1} please enter atleast one option`);
                    return false;
                }
                if(value.noOfCorrectAnswer===0 || value.noOfCorrectAnswer>value.options.length){
                    alert(`In question ${idx+1} no correct answer is there`);
                    return false;
                }
            })
            console.log(validData[0])
            if(!validData[0]){
                alert("till here");
                return false
            }
            alert("Question added are correct")
            const finalData = {
                title: title,
                description: description,
                questions: data
            }
            navigate(`/`)
        }catch(err){
            alert(err);
            console.log(err);
        }
        setLoading(true)
    }
    return (
        <Styled.Container onSubmit={onSave}>
            <Styled.SpaceBox id="space-canvas" />
            <Styled.Heading>Add Quiz</Styled.Heading>
            {showComponent ? (
                <>
                    <Styled.Fieldset>
                        <Styled.Label htmlFor="name">QUIZ TITLE</Styled.Label>
                        <Styled.Input
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            id="title"
                            name="title"
                            placeholder="This will be the title of your Gate "
                            value={title}
                            required
                        />
                    </Styled.Fieldset>
                    <Styled.Fieldset>
                        <Styled.Label htmlFor="description">
                            QUIZ Description
                        </Styled.Label>
                        <Styled.Textarea
                            height="100px"
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="This will be the description of your Gate. We reccommend maximum of 2 lines."
                            value={description}
                            required
                        ></Styled.Textarea>
                    </Styled.Fieldset>

                    <Styled.Button
                        id="submit_msg"
                        type="button"
                        onClick={showShowComponent}
                    >
                        Next
                    </Styled.Button>
                </>
            ) : (
                <CreateQuestion questions={data} setQuestions={setData}/>
            )}
        </Styled.Container>
    )
}

export default CreateQuiz
