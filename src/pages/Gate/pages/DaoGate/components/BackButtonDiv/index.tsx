import React, { useState } from 'react';
import * as Styled from './style';
// import * as Theam from '../../../../../../theme/style';

//Icons
import BackIcon from '../../../../../../assets/icons/BackIcon.svg';
import ShareIcon from '../../../../../../assets/icons/share.svg';
import { MdModeEditOutline } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

//Hooks
import { To, useNavigate } from 'react-router-dom';
import { useGateAdmin } from '../../../../../../hooks/useAdmin';
import { useWeb3 } from '../../../../../../hooks/useWeb3';

// Types
import { gql, MutationFunctionOptions, useMutation } from '@apollo/client';
import { useModal } from '../../../../../../contexts/ModalContext';
import ConfirmationModal from '../../../../../../components/Modal/ConfirmationModal';
import { useAuth } from '../../../../../../contexts/UserContext';
import { Daos, Users, Key_Progress, Gates as Gate, GatePublishedStatus, useDeleteGateMutation, useUpdateGateMutation } from '../../../../../../graphql';

/* This is a type definition for the GateData interface. It is used to make sure that the data that is
passed to the component is of the correct type. */
interface GateData extends Gate {
    holders: number;
    keysDone: number;
    keysNumber: number;
    taskStatus: Key_Progress[];
    adminList: Users[];
    preRequisitesList: Gate[];
}

/* A type definition for the GateData interface. It is used to make sure that the data that is passed
to the component is of the correct type. */
interface Props {
    id: string;
    url?: number | string;
    children: string | React.ReactNode;
    gateData: GateData;
    daoData: Daos;
    published: GatePublishedStatus;
    state?: object;
}

const BackButton: React.FC<Props> = ({
    url = -1,
    children = 'Go Back',
    state = {},
    ...props
}) => {
    const gateData: GateData = props.gateData;

    //States
    const [published, setPublished] = useState<GatePublishedStatus>(props.published);
    const [showDelete, setShowDelete] = useState<boolean>(false);
    const [showPublish, setShowPublish] = useState<boolean>(false);

    //Hooks
    const [updateGate] = useUpdateGateMutation();
    const navigate = useNavigate();
    const { userInfo }: Record<string, any> = useAuth();
    const { isAdmin } = useGateAdmin(gateData.admins);
    const [deleteGate] = useDeleteGateMutation();
    // const { showModal } = useModal();
    const { showErrorModal, discardModal }: Record<string, any> = useModal();
    const { mintNFTContract, batchMint }: Record<string, any> = useWeb3();

    /**
     * It navigates to the edit-gate page.
     */
    const editGate = () => {
        const link = '/dao/' + props.daoData.slug + '/edit-gate';
        navigate(link, {
            state: { gateData },
        });
    };

    const confirm = async () => {
        try {
            const published_INTERNAL =
                published === GatePublishedStatus.not_published
                    ? GatePublishedStatus.published
                    : published === GatePublishedStatus.published
                        ? GatePublishedStatus.paused
                        : published === GatePublishedStatus.paused
                            ? GatePublishedStatus.published
                            : published;

            setPublished(published_INTERNAL);

            await updateGate({
                variables: {
                    input: {
                        id: props.id,
                        published: published_INTERNAL,
                    },
                },
            });

            discardModal();
        } catch (e) {
            setShowPublish(false);

            discardModal();

            showErrorModal(
                'We are facing some issues. Please try again later.'
            );
            console.log(e);
        }
    };

    /**
     * It updates the published state of the gate.
     */
    const handleUpdate = async () => {
        await confirm();
        setShowPublish(false);
    };

    /**
     * It toggles the showDelete state between true and false.
     */
    const showDeleteModal = () => {
        setShowDelete(!showDelete);
    };

    /**
     * It toggles the showPublish state between true and false.
     */
    const showPublishModal = () => {
        setShowPublish(!showPublish);
    };

    /**
     * It deletes a gate.
     */
    const deleteGateFunc = async () => {
        const { data } = await deleteGate({
            variables: {
                input: {
                    id: props.id,
                },
            },
        });
        navigate(url as To, { state: state });
    };

    return (
        <>
            <ConfirmationModal
                show={showDelete}
                toggle={showDeleteModal}
                title={`Deleting "${gateData.gate_name}"`}
                body='Are you sure you want to delete the gate? This action is IRREVERSIBLE.'
                buttons={[
                    { button: 'YES', handler: () => deleteGateFunc() },
                    {
                        button: 'NO',
                        handler: () => setShowDelete(false),
                    },
                ]}
            />
            <ConfirmationModal
                show={showPublish}
                toggle={showPublishModal}
                title={`Publishing "${gateData.gate_name}"`}
                body="Are you sure you want to publish the gate? You won't be able to change the majority of things in the future."
                buttons={[
                    { button: 'YES', handler: () => handleUpdate() },
                    {
                        button: 'NO',
                        handler: () => setShowPublish(false),
                    },
                ]}
            />
            <Styled.Wrapper>
                <Styled.Div onClick={() => navigate(url as To, { state: state })}>
                    <Styled.ButtonWrapper>
                        <img src={BackIcon} alt='Back' />
                    </Styled.ButtonWrapper>
                    <Styled.TextWrapper>
                        <Styled.Text>{children}</Styled.Text>
                    </Styled.TextWrapper>
                </Styled.Div>

                <Styled.Div>
                    {isAdmin && (
                        <>
                            <Styled.ButtonWrapper
                                onClick={
                                    published == PublishedState.NOT_PUBLISHED
                                        ? showPublishModal
                                        : handleUpdate
                                }
                                width='182px'
                                size='13px'
                            >
                                {published == PublishedState.PUBLISHED
                                    ? 'Unpublish'
                                    : 'Publish'}
                            </Styled.ButtonWrapper>
                            <Styled.ButtonWrapper
                                onClick={editGate}
                                ml='20'
                                data-title='Edit Gate'
                            >
                                <MdModeEditOutline />
                            </Styled.ButtonWrapper>
                            <Styled.ButtonWrapper
                                onClick={showDeleteModal}
                                ml='20'
                                data-title='Delete Gate'
                            >
                                <FaTrashAlt />
                            </Styled.ButtonWrapper>
                        </>
                    )}
                    <Styled.ButtonWrapper
                        onClick={() =>
                            navigator.clipboard.writeText(window.location.href)
                        }
                        ml='20'
                        data-title='copy shareable link '
                    >
                        <img src={ShareIcon} alt='Share Icon' />
                    </Styled.ButtonWrapper>
                </Styled.Div>
            </Styled.Wrapper>
        </>
    );
};

export default BackButton;
