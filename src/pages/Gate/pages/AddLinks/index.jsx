import * as Styled from './style'
import BackButton from '../../../../components/BackButton'
import { FormStyled } from '../../../../components/Form'
import { FaTrashAlt } from 'react-icons/fa'
import { useState } from 'react'
import { set } from 'date-fns'

const AddLinks = () => {
    const [daoDeck, setDaoDeck] = useState('')
    const [brandAssest, setBrandAssest] = useState('')
    const [faq, setFAQ] = useState('')

    const onSave = () => {
        setDaoDeck('')
        setBrandAssest('')
        setFAQ('')
    }

    return (
        <Styled.Container>
            <BackButton>Go back</BackButton>
            <Styled.Box>
                <Styled.HeadingContainer>Add Links</Styled.HeadingContainer>
                <Styled.LinksContainer>
                    <Styled.LinksElements>
                        <FormStyled.Label htmlFor="name">Name</FormStyled.Label>
                        <FormStyled.Label htmlFor="link">Link</FormStyled.Label>
                    </Styled.LinksElements>
                    <Styled.LinksElements>
                        <Styled.NameContainer>DAO Deck</Styled.NameContainer>
                        <Styled.Input
                            placeholder="enter your link over here"
                            onChange={(e) => setDaoDeck(e.target.value)}
                            value={daoDeck}
                        />
                        <Styled.TrashContainer>
                            <FaTrashAlt onClick={(e) => setDaoDeck('')} />
                        </Styled.TrashContainer>
                    </Styled.LinksElements>
                    <Styled.LinksElements>
                        <Styled.NameContainer>
                            Brand Assets
                        </Styled.NameContainer>
                        <Styled.Input
                            placeholder="enter your link over here"
                            onChange={(e) => setBrandAssest(e.target.value)}
                            value={brandAssest}
                        />
                        <Styled.TrashContainer>
                            <FaTrashAlt onClick={(e) => setBrandAssest('')} />
                        </Styled.TrashContainer>
                    </Styled.LinksElements>
                    <Styled.LinksElements>
                        <Styled.NameContainer>FAQ </Styled.NameContainer>
                        <Styled.Input
                            placeholder="enter your link over here"
                            onChange={(e) => setFAQ(e.target.value)}
                            value={faq}
                        />
                        <Styled.TrashContainer>
                            <FaTrashAlt onClick={(e) => setFAQ('')} />
                        </Styled.TrashContainer>
                    </Styled.LinksElements>
                </Styled.LinksContainer>
                <Styled.SaveButton onClick={onSave}>SAVE</Styled.SaveButton>
            </Styled.Box>
        </Styled.Container>
    )
}

export default AddLinks
