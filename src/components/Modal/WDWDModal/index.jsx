import Modal from '../index'
import * as Styled from './style'
import * as ModalStyled from '../style'
import { FormStyled } from '../../Form'
import React, { useState } from 'react'
import RichEditor from '../../RichTextEditor'
import { useUpdateDAO } from '../../../api/database/useUpdateDAO'

const WDWDModal = (props) => {
    const [WDWD, setWDWD] = useState(props.data)
    const { updateDAO, data, error, loading } = useUpdateDAO()

    const submitToDB = async () => {
        await updateDAO({
            variables: {
                input: {
                    id: props.id,
                    whatDoWeDo: WDWD,
                },
            },
        })

        props.set(WDWD)
        props.toggle()

        window.location.reload()
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>What Do We Do</ModalStyled.Header>

                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor="information">
                        Information
                    </FormStyled.Label>
                    <RichEditor set={setWDWD} value={WDWD} />
                </FormStyled.Fieldset>

                <FormStyled.Button
                    id="submit_msg"
                    type="button"
                    onClick={submitToDB}
                >
                    Submit
                </FormStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default WDWDModal
