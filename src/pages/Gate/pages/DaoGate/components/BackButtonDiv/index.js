import React, { useState } from 'react'
import * as Styled from './style'

//Icons
import BackIcon from '../../../../../../assets/icons/BackIcon.svg'
import ShareIcon from '../../../../../../assets/icons/share.svg'
import {MdModeEditOutline} from 'react-icons/md'
import {FaTrashAlt} from 'react-icons/fa'

//Hooks
import { useNavigate } from 'react-router-dom'
import useUpdateGate from '../../../../../../api/database/useUpdateGate'; 
import useDeleteGate from '../../../../../../api/database/useDeleteGate'; 
import { useGateAdmin } from '../../../../../../hooks/useAdmin'
//import'./BackButton.css';

const BackButton = ({ url = -1, children = 'Go Back', ...props }) => {
    const gateData = props.gateData

    //States
    const [published, setPublished] = useState(props.published);
    const [showDelete, setShowDelete] = useState(false);

    //Hooks
    const { updateGate } = useUpdateGate()
    const navigate = useNavigate()
    const { isAdmin } = useGateAdmin(gateData.admins)
    const {deleteGate, data, loading} = useDeleteGate()

    const editGate = () => {
        const link = '/dao/' + props.daoData.dao + '/edit-gate'
        navigate(link, {
            state: { gateData },
        })
    }

    //Publish gates 
    const publishGate = async ()=>{
        try{
            setPublished(!published);
            await updateGate({
                variables: {
                    input: {
                        id: props.id,
                        published: !published,
                    },
                },
            })

            window.location.reload()
        } catch (e) {
            alert('We are facing some issue')
            console.log(e)
        }
    }

    const showDeleteModal = ()=>{
        setShowDelete(!showDelete);
    }
    const deleteGateFunc = async()=>{
        
        const {data} = await deleteGate({
            variables:{
                input:{
                    id: props.id
                }
            }
        })
        navigate(url);
    }
    return (
        <Styled.Wrapper>
            <Styled.Div onClick={() => navigate(url)}>
                <Styled.ButtonWrapper>
                    <img src={BackIcon} alt="Back" />
                </Styled.ButtonWrapper>
                <Styled.TextWrapper>
                    <Styled.Text>{children}</Styled.Text>
                </Styled.TextWrapper>
            </Styled.Div>

            <Styled.Div>
            {isAdmin
                &&
                <>
                    <Styled.ButtonWrapper onClick={publishGate} 
                    width="182px"
                    size="13px"
                    >
                        {published?'Unpublish':'Publish'}
                    </Styled.ButtonWrapper>
                    <Styled.ButtonWrapper onClick={editGate} ml="20" >
                        <MdModeEditOutline />
                    </Styled.ButtonWrapper>
                    <Styled.ButtonWrapper onClick={showDeleteModal} ml='20'>
                        <FaTrashAlt />
                    </Styled.ButtonWrapper>
                    {showDelete && 
                        <Styled.DeleteModal>
                            <Styled.DeleteContainer>
                                <Styled.CloseBtn size={24} color="white" onClick={showDeleteModal}/>
                                <Styled.TextWrapper>
                                    <Styled.Text>
                                        Are you sure you want to delete the gate? This action is IRREVERSIBLE.
                                    </Styled.Text>
                                </Styled.TextWrapper>
                                <Styled.ButtonWrapper width="182px" size="13px" onClick={deleteGateFunc}>
                                    Delete
                                </Styled.ButtonWrapper>
                            </Styled.DeleteContainer>
                        </Styled.DeleteModal>
                    }
                </>
                }
                <Styled.ButtonWrapper onClick={() => navigate(url)} ml="20">
                    <img src={ShareIcon} />
                </Styled.ButtonWrapper>
            </Styled.Div>
        </Styled.Wrapper>
    )
}

export default BackButton
