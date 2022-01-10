import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as Styled from './style'
import space from '../../utils/canvas'
import CreateQuestion from './Component/CreateQuestion'

const CreateQuiz = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [showComponent, setShowComponent] = useState(true)
    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    )

    // quiz data
    const [data, setData] = useState()

    return (
        <Styled.Page>
            <Header />
            <Styled.Container>
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
                            ></Styled.Textarea>
                        </Styled.Fieldset>

                        <Styled.Button
                            id="submit_msg"
                            type="button"
                            onClick={(e) => setShowComponent(!showComponent)}
                        >
                            Next
                        </Styled.Button>
                    </>
                ) : (
                    <CreateQuestion />
                )}
            </Styled.Container>
            <Footer />
        </Styled.Page>
    )
}

export default CreateQuiz
