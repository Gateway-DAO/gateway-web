import React, { useState, createContext, useContext } from 'react';

// Components
import Modal from '../components/Modal';

// Styling
import styled from 'styled-components';

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
`;

const Title = styled.h3`
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
    text-transform: uppercase;
`;

const Body = styled.p`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.05em;
    text-align: left;
    margin-top: 15px;
`;

const Error = ({ children }) => (
    <>
        <Title>An Error Occurred</Title>
        <Body>{children}</Body>
    </>
);

export const ModalContext = createContext({});
const { Provider } = ModalContext;

export const useModal = () => {
    return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
    // State
    const [show, setShow] = useState(false);
    const [modalElements, setModalElements] = useState(null);

    const discardModal = () => {
        setShow(false);
        setModalElements(null);
    };

    const showModal = (children, config = {}) => {
        discardModal();
        setModalElements(children);
        setShow(true);
    };

    const showErrorModal = (children, config = {}) =>
        showModal(<Error>{children}</Error>, config);

    return (
        <Provider
            value={{
                showModal,
                discardModal,
                showErrorModal,
            }}
        >
            <Modal show={show} toggle={discardModal}>
                <ModalBox>{modalElements}</ModalBox>
            </Modal>
            {children}
        </Provider>
    );
};
