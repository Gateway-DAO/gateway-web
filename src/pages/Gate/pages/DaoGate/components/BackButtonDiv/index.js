import React,{useState} from 'react'
import * as Styled from './style'
import BackIcon from '../../../../../../assets/icons/BackIcon.svg'
import ShareIcon from '../../../../../../assets/icons/share.svg'
import {MdModeEditOutline} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import useUpdateGate from '../../../../../../api/database/useUpdateGate'; 
import { useGateAdmin } from '../../../../../../hooks/useAdmin'
//import'./BackButton.css';

const BackButton = ({ url = -1, children = "Go Back", ...props}) => {
    const gateData = props.gateData;
    
    //States
    const [published, setPublished] = useState(props.published);

    //Hooks
    const {updateGate} = useUpdateGate();
    const navigate = useNavigate();
    const { isAdmin } = useGateAdmin(gateData.admins)

    const editGate = ()=>{
        const link = "/dao/"+props.daoData.dao+ "/edit-gate"
        navigate(link,{
            state:{gateData}
        })
    }
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
        }catch(e){
            alert("We are facing some issue");
            console.log(e);
        }
        // console.log(published);
    }
    return (
        <Styled.Wrapper>
            <Styled.Div>
                <Styled.ButtonWrapper onClick={() => navigate(url)}>
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
