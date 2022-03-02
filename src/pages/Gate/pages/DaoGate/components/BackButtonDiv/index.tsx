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
import useUpdateGate from '../../../../../../api/database/useUpdateGate';
import useDeleteGate from '../../../../../../api/database/useDeleteGate';
import { useGateAdmin } from '../../../../../../hooks/useAdmin';
// import { useModal } from '../../../../../../contexts/ModalContext';
// import { useModal } from '../../../../../../contexts/ModalContext';
import { useWeb3 } from '../../../../../../hooks/useWeb3';

// Types
import {
    DAO,
    Gate,
    PublishedState,
    TaskStatus,
    User,
} from '../../../../../../graphql/API';
import { gql, MutationFunctionOptions, useMutation } from '@apollo/client';
import { useModal } from '../../../../../../contexts/ModalContext';
import ConfirmationModal from '../../../../../../components/Modal/ConfirmationModal';
import {
    generatedNonceSignature,
    streamToCeramic,
    updateDao,
} from '../../../../../../graphql/mutations';
import { useAuth } from '../../../../../../contexts/UserContext';

/* This is a type definition for the GateData interface. It is used to make sure that the data that is
passed to the component is of the correct type. */
interface GateData extends Gate {
    holders: number;
    keysDone: number;
    keysNumber: number;
    taskStatus: TaskStatus[];
    adminList: User[];
    preRequisitesList: Gate[];
}

/* A type definition for the GateData interface. It is used to make sure that the data that is passed
to the component is of the correct type. */
interface Props {
    id: string;
    url?: number | string;
    children: string | React.ReactNode;
    gateData: Gate;
    daoData: DAO;
    published: PublishedState;
}

const BackButton: React.FC<Props> = ({
    url = -1,
    children = 'Go Back',
    ...props
}) => {
    const gateData: GateData = props.gateData;

    //States
    const [published, setPublished] = useState<PublishedState>(props.published);
    const [showDelete, setShowDelete] = useState<boolean>(false);
    const [showPublish, setShowPublish] = useState<boolean>(false);

    //Hooks
    const {
        updateGate,
    }: { updateGate(options: MutationFunctionOptions): Promise<any> } =
        useUpdateGate();
    const navigate = useNavigate();
    const { userInfo }: Record<string, any> = useAuth();
    const { isAdmin } = useGateAdmin(gateData.admins);
    const { deleteGate } = useDeleteGate();
    // const { showModal } = useModal();
    const { showErrorModal, discardModal }: Record<string, any> = useModal();
    const { mintNFTContract, batchMint }: Record<string, any> = useWeb3();
    const [updateDAO] = useMutation(gql(updateDao));
    const [signNonce] = useMutation(gql(generatedNonceSignature));
    const [streamData] = useMutation(gql(streamToCeramic));

    /**
     * It navigates to the edit-gate page.
     */
    const editGate = () => {
        const link = '/dao/' + props.daoData.dao + '/edit-gate';
        navigate(link, {
            state: { gateData },
        });
    };

    const confirm = async () => {
        try {
            const published_INTERNAL =
                published === PublishedState.NOT_PUBLISHED
                    ? PublishedState.PUBLISHED
                    : published === PublishedState.PUBLISHED
                    ? PublishedState.PAUSED
                    : published === PublishedState.PAUSED
                    ? PublishedState.PUBLISHED
                    : published;

            if (
                published === PublishedState.NOT_PUBLISHED &&
                published_INTERNAL === PublishedState.PUBLISHED
            ) {
                // Published for the first time
                const nftType = gateData.nftType;
                const dao = gateData.dao;

                let contract: string | null =
                    dao.nftContracts[(nftType as string).toLowerCase()];

                // Step 1. check if there's the contract
                if (
                    dao.nftContracts == null ||
                    (dao.nftContracts &&
                        dao.nftContracts[(nftType as string).toLowerCase()] ==
                            null)
                ) {
                    // There's no contract for the current NFT type
                    contract = await mintNFTContract(
                        nftType,
                        gateData.badge.name,
                        [
                            ...gateData.adminList.map((admin) => admin.wallet),
                            userInfo.wallet,
                        ]
                    );

                    // Update DAO with the new contract information
                    await updateDAO({
                        variables: {
                            input: {
                                id: dao.id,
                                nftContracts: {
                                    contributor: dao.nftContracts.contributor,
                                    reward: dao.nftContracts.reward,
                                    [(nftType as string).toLowerCase()]:
                                        contract,
                                },
                            },
                        },
                    });
                }

                // Step 2. mint the NFT

                // Step 2.1. get the authorization
                const { data: nonceData } = await signNonce();

                console.log(nonceData);

                // Step 2.2. stream the credential to Ceramic
                const credential = {
                    issuerId:
                        'did:key:z6Mkjeb28dgUpbAEMgjiP3KcVmVgNNUqynimDBKS4G1K1fUe',
                    competencies: [],
                    issueeId: '',
                    name: gateData.badge.name,
                    description: gateData.description,
                    organization: gateData.dao.id,
                };

                gateData.retroactiveEarners.length &&
                    (await batchMint(
                        contract,
                        gateData.retroactiveEarners.map((re) => credential),
                        gateData.retroactiveEarners
                    ));
            }

            /*
            setPublished(published_INTERNAL);

            await updateGate({
                variables: {
                    input: {
                        id: props.id,
                        published: published_INTERNAL,
                    },
                },
            });
            */
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
    const handleUpdate = () => {
        // const ConfirmModal = () => (
        //     <div>
        //         <Theam.MainText>
        //             Are you sure you want to publish
        //         </Theam.MainText>
        //         <p>
        //             After publishing, you will only be able to add new key,
        //             admins and pre-requisites. EveryThing else will be locked
        //         </p>
        //         <Theam.Buttom onClick={confirm}>Confirm</Theam.Buttom>
        //     </div>
        // );
        // showModal(<ConfirmModal />);
        confirm();
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
        navigate(url as To);
    };

    return (
        <>
            <ConfirmationModal
                show={showDelete}
                toggle={showDeleteModal}
                title={`Deleting "${gateData.name}"`}
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
                title={`Publishing "${gateData.name}"`}
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
                <Styled.Div onClick={() => navigate(url as To)}>
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
                            <Styled.ButtonWrapper onClick={editGate} ml='20'>
                                <MdModeEditOutline />
                            </Styled.ButtonWrapper>
                            <Styled.ButtonWrapper
                                onClick={showDeleteModal}
                                ml='20'
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
                    >
                        <img src={ShareIcon} alt='Share Icon' />
                    </Styled.ButtonWrapper>
                </Styled.Div>
            </Styled.Wrapper>
        </>
    );
};

export default BackButton;
