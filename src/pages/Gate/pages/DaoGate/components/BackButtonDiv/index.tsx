import React, { useState } from 'react';
import * as Styled from './style';

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

// Types
import { DAO, Gate } from '../../../../../../graphql/API';
import { MutationFunctionOptions } from '@apollo/client';

/* A type definition for the GateData interface. It is used to make sure that the data that is passed
to the component is of the correct type. */
interface Props {
    id: string;
    url?: number | string;
    children: string | React.ReactNode;
    gateData: Gate;
    daoData: DAO;
    published: boolean;
}

const BackButton: React.FC<Props> = ({
    url = -1,
    children = 'Go Back',
    ...props
}) => {
    const gateData: Gate = props.gateData;

    //States
    const [published, setPublished] = useState<boolean>(props.published);
    const [showDelete, setShowDelete] = useState<boolean>(false);

    //Hooks
    const {
        updateGate,
    }: { updateGate(options: MutationFunctionOptions): Promise<any> } =
        useUpdateGate();
    const navigate = useNavigate();
    const { isAdmin } = useGateAdmin(gateData.admins);
    const { deleteGate } = useDeleteGate();

    /**
     * It navigates to the edit-gate page.
     */
    const editGate = () => {
        const link = '/dao/' + props.daoData.dao + '/edit-gate';
        navigate(link, {
            state: { gateData },
        });
    };

    /**
     * It updates the published state of the gate.
     */
    const handleUpdate = async () => {
        try {
            setPublished(!published);
            await updateGate({
                variables: {
                    input: {
                        id: props.id,
                        published: !published,
                    },
                },
            });
        } catch (e) {
            alert('We are facing some issues. Please try again later.');
            console.log(e);
        }
    };

    /**
     * It toggles the showDelete state between true and false.
     */
    const showDeleteModal = () => {
        setShowDelete(!showDelete);
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
                            onClick={handleUpdate}
                            width='182px'
                            size='13px'
                        >
                            {published ? 'Unpublish' : 'Publish'}
                        </Styled.ButtonWrapper>
                        <Styled.ButtonWrapper onClick={editGate} ml='20'>
                            <MdModeEditOutline />
                        </Styled.ButtonWrapper>
                        <Styled.ButtonWrapper onClick={showDeleteModal} ml='20'>
                            <FaTrashAlt />
                        </Styled.ButtonWrapper>
                        {showDelete && (
                            <Styled.DeleteModal>
                                <Styled.DeleteContainer>
                                    <Styled.CloseBtn
                                        size={24}
                                        color='white'
                                        onClick={showDeleteModal}
                                    />
                                    <Styled.TextWrapper>
                                        <Styled.Text>
                                            Are you sure you want to delete the
                                            gate? This action is IRREVERSIBLE.
                                        </Styled.Text>
                                    </Styled.TextWrapper>
                                    <Styled.ButtonWrapper
                                        width='182px'
                                        size='13px'
                                        onClick={deleteGateFunc}
                                    >
                                        Delete
                                    </Styled.ButtonWrapper>
                                </Styled.DeleteContainer>
                            </Styled.DeleteModal>
                        )}
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
    );
};

export default BackButton;
