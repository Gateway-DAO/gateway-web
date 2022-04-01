import React, { useState } from 'react';
import * as Styled from './style';
import useKeyValidation from '../../../../../../hooks/useKeyValidation';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useGateAdmin } from '../../../../../../hooks/useAdmin';
import { useNavigate } from 'react-router-dom';
import parser from 'html-react-parser';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import ConfirmationModal from '../../../../../../components/Modal/ConfirmationModal';

// Task Components
import MeetingCode from './components/MeetingCode';
import Snapshot from './components/Snapshot';
import ManualTask from './components/ManualTask';
import Loader from '../../../../../../components/Loader';

// API
import { useMutation, gql } from '@apollo/client';
import { deleteKey } from '../../../../../../graphql/mutations';

const parsedKeyName = (name) => {
    switch (name) {
        case 'MEETING_CODE':
            return 'Meeting Code';
        case 'SNAPSHOT_GOVERNANCE':
            return 'Snapshot Governance';
        case 'MANUAL_TASK':
            return 'Manual';
        case 'QUIZ':
            return 'Quiz';
        case 'SELF_VERIFY':
            return 'Self Verify';
        case 'TOKEN_HOLD':
            return 'Hold A Token';
        case 'SC_INTERACTION':
        case 'CONTRACT_INTERACTION':
            return 'Contract Interaction';
        default:
            return null;
    }
};

const KeyBox = (props) => {
    let navigate = useNavigate();
    const [opened, setOpened] = useState(false);
    const [startBox, setStartBox] = useState(false);
    const data = props.data;
    const keyValidation = useKeyValidation(data, props.gateData);
    const { isAdmin } = useGateAdmin(props.gateData.admins);
    const [showModal, setShowModal] = useState(false);

    // API
    const [deleteMutation] = useMutation(gql(deleteKey), {
        variables: {
            input: {
                id: data.id,
            },
        },
    });

    /**
     * When the button is clicked, the opened state is toggled
     */
    const openedHandler = () => {
        setOpened((prev) => !prev);
    };

    /**
     * This function is used to toggle the start box on and off.
     */
    const startHandler = () => {
        setOpened((prev) => !prev);
        setStartBox((prev) => !prev);
    };

    /**
     * Navigates to the edit key page for the given gate.
     */
    const editKey = () => {
        const link = '/gate/' + props.data.gateID + '/edit-key';
        navigate(link, {
            state: { data },
        });
    };

    const toggleDeleteKeyModal = () => {
        setShowModal(!showModal);
    };

    /**
     * It returns the correct component based on the task type.
     * @returns The Task component is being returned.
     */
    const Task = () => {
        switch (data.task.type) {
            case 'MEETING_CODE':
                return (
                    <MeetingCode
                        data={data}
                        setInfo={(info) => keyValidation.setInfo(info)}
                    />
                );
            case 'SNAPSHOT_GOVERNANCE':
                return <Snapshot data={data} />;
            case 'MANUAL_TASK':
                return (
                    <ManualTask
                        data={data}
                        start={startBox}
                        show={opened}
                        setStart={setStartBox}
                        setOpened={setOpened}
                        keyValidation={keyValidation}
                    />
                );
            case 'QUIZ':
            case 'SELF_VERIFY':
            case 'SC_INTERACTION':
            default:
                return null;
        }
    };

    return (
        <>
            <ConfirmationModal
                show={showModal}
                toggle={toggleDeleteKeyModal}
                buttons={[
                    {
                        button: 'YES',
                        handler: async () => {
                            await deleteMutation();
                            toggleDeleteKeyModal();
                        },
                    },
                    {
                        button: 'NO',
                        handler: toggleDeleteKeyModal,
                    },
                ]}
            />
            <Styled.ThirdDiv>
                <Styled.Box opened={opened} blocked={props.blocked}>
                    <Styled.TextContainer>
                        <Styled.BoxHeading>
                            <Styled.BoxTitle>
                                {data.information[0].title}
                            </Styled.BoxTitle>
                            {isAdmin && !opened && (
                                <Styled.EditDeleteContainer>
                                    {/* <Styled.EditContainer
                                            onClick={editKey}
                                            data-title='Edit key'
                                        >
                                            <FaPencilAlt />
                                        </Styled.EditContainer> */}
                                    <Styled.DeleteContainer
                                        onClick={() => setShowModal(true)}
                                        data-title='Delete key'
                                    >
                                        <FaTrashAlt />
                                    </Styled.DeleteContainer>
                                </Styled.EditDeleteContainer>
                            )}
                        </Styled.BoxHeading>
                        <Styled.BoxSubtitle opened={opened}>
                            {parser(data.information[0].description)}
                        </Styled.BoxSubtitle>
                        {opened ? (
                            <>
                                {data.information.slice(1).map((key) => (
                                    <>
                                        <br />
                                        <br />
                                        <Styled.BoxTitle>
                                            {key.title}
                                        </Styled.BoxTitle>
                                        <Styled.BoxSubtitle opened={opened}>
                                            {parser(key.description)}
                                        </Styled.BoxSubtitle>
                                    </>
                                ))}
                                {startBox && <Task />}
                            </>
                        ) : null}
                    </Styled.TextContainer>
                    <Styled.BottonBox>
                        <Styled.ActionButton>
                            <Styled.StartButton
                                opened={opened}
                                blocked={props.blocked}
                                onClick={
                                    !props.blocked
                                        ? !opened
                                            ? startHandler
                                            : !keyValidation.loading
                                            ? keyValidation.buttonBehavior
                                                  .onClick
                                            : null
                                        : null
                                }
                            >
                                <Styled.ButtonText>
                                    {keyValidation.loading && (
                                        <Loader color='white' />
                                    )}
                                    {props.blocked && (
                                        <AiFillCheckCircle
                                            color='#27D5A2'
                                            size={24}
                                            style={{ marginRight: 10 }}
                                        />
                                    )}
                                    {props.blocked
                                        ? 'Completed'
                                        : startBox
                                        ? keyValidation.buttonBehavior.title
                                        : 'Start'}
                                </Styled.ButtonText>
                            </Styled.StartButton>
                            {(data.information.length > 1 || opened) && (
                                <Styled.StartButtonTwo
                                    onClick={
                                        startBox ? startHandler : openedHandler
                                    }
                                >
                                    <Styled.ButtonText>
                                        {opened ? 'Hide' : 'Details'}
                                    </Styled.ButtonText>
                                </Styled.StartButtonTwo>
                            )}
                        </Styled.ActionButton>
                        {!opened && (
                            <Styled.InformationDiv>
                                <Styled.KeyRewardBox>
                                    <Styled.InformationBoxHeading>
                                        Key Reward
                                    </Styled.InformationBoxHeading>
                                    <Styled.InformationBoxInfoText>
                                        {data.keys}
                                    </Styled.InformationBoxInfoText>
                                </Styled.KeyRewardBox>
                                <Styled.CompensationBox>
                                    <Styled.InformationBoxHeading>
                                        Key Type
                                    </Styled.InformationBoxHeading>
                                    <Styled.InformationBoxInfoText>
                                        {parsedKeyName(data.task.type)}
                                    </Styled.InformationBoxInfoText>
                                </Styled.CompensationBox>
                            </Styled.InformationDiv>
                        )}
                    </Styled.BottonBox>
                </Styled.Box>
            </Styled.ThirdDiv>
        </>
    );
};

export default React.memo(KeyBox);
