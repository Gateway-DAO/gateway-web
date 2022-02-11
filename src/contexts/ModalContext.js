import React, { useState, createContext, useContext } from 'react'

// Components
import Modal from '../components/Modal'

// Styling
import styled from 'styled-components'

const ModalBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 100px;

    & * {
        color: white;

        font-family: Be Vietnam;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;
    }
`

export const ModalContext = createContext({})
const { Provider } = ModalContext

export const useModal = () => {
    return useContext(ModalContext)
}

export const ModalProvider = ({ children }) => {
    // State
    const [show, setShow] = useState(false)
    const [modalElements, setModalElements] = useState(null)

    const showModal = (children, config = {}) => {
        setModalElements(children)
        setShow(true)
    }

    const discardModal = () => {
        setShow(false)
        setModalElements(null)
    }

    return (
        <Provider
            value={{
                showModal,
                discardModal,
            }}
        >
            <Modal show={show} toggle={discardModal}>
                <ModalBox>{modalElements}</ModalBox>
            </Modal>
            {children}
        </Provider>
    )
}
