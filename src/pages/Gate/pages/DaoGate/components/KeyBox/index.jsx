import React, { useState } from 'react';
import * as Styled from './style';
import useKeyValidation from '../../../../../../hooks/useKeyValidation';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useGateAdmin } from '../../../../../../hooks/useAdmin';
import { useNavigate } from 'react-router-dom';
// import { FaPencilAlt } from 'react-icons/fa';

// Task Components
import MeetingCode from './components/MeetingCode';
import Snapshot from './components/Snapshot';
import ManualTask from './components/ManualTask';
import Loader from '../../../../../../components/Loader';

const KeyBox = (props) => {
    let navigate = useNavigate();
    const [opened, setOpened] = useState(false);
    const [startBox, setStartBox] = useState(false);
    const data = props.data;
    const keyValidation = useKeyValidation(data, props.gateData);
    const { isAdmin } = useGateAdmin(props.gateData.admins);
    const testData = [
        { title: 'its a title', description: 'Its a description' },
        { title: 'its a title', description: 'Its a description' },
        { title: 'its a title', description: 'Its a description' },
        { title: 'its a title', description: 'Its a description' },
    ];
    const openedHandler = () => {
        setOpened((prev) => !prev);
    };

    const startHandler = () => {
        setOpened((prev) => !prev);
        setStartBox((prev) => !prev);
    };

    const editKey = () => {
        const link = '/gate/' + props.data.gateID + '/edit-key';
        navigate(link, {
            state: { data },
        });
    };

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
                        data={testData}
                        start={startBox}
                        show={opened}
                        setStart={setStartBox}
                        setOpened={setOpened}
                        keyValidation={keyValidation}
                    />
                );
            case 'QUIZ':
                break;
            case 'SELF_VERIFY':
                break;
            case 'SC_INTERACTION':
                break;
            default:
                return null;
        }
    };

    return (
        <Styled.ThirdDiv>
            <Styled.Box opened={opened} blocked={props.blocked}>
                <Styled.TextContainer>
                    <Styled.BoxHeading>
                        <Styled.BoxTitle>
                            {data.information[0].title}
                        </Styled.BoxTitle>
                        {/* isAdmin && !opened && (
                            <Styled.EditContainer onClick={editKey}>
                                <FaPencilAlt />
                            </Styled.EditContainer>
                        ) */}
                    </Styled.BoxHeading>
                    <Styled.BoxSubtitle opened={opened}>
                        {data.information[0].description}
                    </Styled.BoxSubtitle>
                </Styled.TextContainer>
                {opened && (
                    <Styled.TextContainer>
                        {data.information.slice(1).map((key) => (
                            <>
                                <Styled.BoxTitle>{key.title}</Styled.BoxTitle>
                                <Styled.BoxSubtitle opened={opened}>
                                    {key.description}
                                </Styled.BoxSubtitle>
                            </>
                        ))}

                        {startBox && <Task />}
                    </Styled.TextContainer>
                )}
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
                                        ? keyValidation.buttonBehavior.onClick
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
                            {/* <Styled.CompensationBox>
                                <Styled.InformationBoxHeading>
                                    Compensation
                                </Styled.InformationBoxHeading>
                                <Styled.InformationBoxInfoText>
                                    100 $BANK
                                </Styled.InformationBoxInfoText>
                            </Styled.CompensationBox> */}
                        </Styled.InformationDiv>
                    )}
                </Styled.BottonBox>
            </Styled.Box>
        </Styled.ThirdDiv>
    );
};

export default React.memo(KeyBox);
