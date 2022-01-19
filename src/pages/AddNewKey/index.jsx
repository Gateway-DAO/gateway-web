import React,{useState,useEffect} from 'react';
import BackButton from '../../components/AddNewKeyComponents/BackButtonDiv';
import Heading from '../../components/AddNewKeyComponents/Heading';
import {SingleLineInputs,MultiLineInputs} from '../../components/Inputs';
import SelectTask from '../../components/AddNewKeyComponents/SelectTask';
import SubmitButton from '../../components/AddNewKeyComponents/SubmitButton';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useHistory } from 'react-router-dom';
import * as Styled from './style';
import { FormStyled } from "../../components/Form";
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import space from '../../utils/canvas'

const AddNewKey = (props)=>{
    const [taskLink, setTaskLink] = useState("");
    const [titleDescriptionPair,setTitleDescriptionPair] = useState([{
        title:'',
        description:''
    }])
    const [token,setToken] = useState("");
    const [amount, setAmount] = useState(0);
    const [keysRewarded, setKeysRewarded] = useState(0);
    const [peopleLimit, setPeopleLimit] = useState(0);

    //Update the title 
    const updateTitle=(idx, newValue)=>{
        const add= titleDescriptionPair.map((value,i)=>{
            if(idx===i){
                return{
                    ...value,
                    title:newValue,
                }
            }
            return value
        })
        setTitleDescriptionPair(add);
    }
    // Update the description
    const updateDescription=(idx, newValue)=>{
        const add= titleDescriptionPair.map((value,i)=>{
            if(idx===i){
                return{
                    ...value,
                    description:newValue
                }
            }
            return value
        })
        setTitleDescriptionPair(add);
    }
    const addTitleDescription = ()=>{
        setTitleDescriptionPair([
            ...titleDescriptionPair,
            {
                title:'',
                description:''
            }
        ])
    }
    
    useEffect(
        () => space(window.innerHeight, window.innerWidth)
        ,[window.innerHeight, window.innerWidth]
    )

    return (
        <Styled.AddNewKeyContainer>
            <Header />
            <BackButton />
            <Styled.MarginWrapper>
                <Styled.SpaceBox id="space-canvas" />
                <Heading text="Add a New Key" />
                {titleDescriptionPair.map((pair,idx)=>{
                    return(
                        <FormStyled.Fieldset>
                            <FormStyled.Fieldset marginBottom="0px">
                                <FormStyled.Label htmlFor='title'>Key Title*</FormStyled.Label>
                                <FormStyled.Input 
                                    id={`title-${idx}`}
                                    name="title"
                                    onChange={e=>updateTitle(idx,e.target.value)}
                                    value={pair.title}
                                    placeholder='This will be the title of your Key'
                                    required
                                />
                            </FormStyled.Fieldset>
                            <FormStyled.Fieldset marginBottom="0px">
                                <FormStyled.Label>Description*</FormStyled.Label>
                                <FormStyled.Textarea 
                                    id={`description-${idx}`}
                                    onChange={e=>updateDescription(idx,e.target.value)}
                                    value={pair.description}
                                    height="120px"
                                    placeholder='This will be the description of your Key. We reccommend maximum of 2 lines.'
                                    required
                                />
                            </FormStyled.Fieldset>
                        </FormStyled.Fieldset>
                    )
                })}
                <FormStyled.Wrapper marginTop="-20px">
                <FormStyled.IconButton
                    onClick={addTitleDescription}
                    style={{
                        width: 'fit-content',
                        alignSelf: 'left',
                    }}
                >
                    <FaPlus />
                </FormStyled.IconButton>
                <FormStyled.TextLabel marginLeft="10px">Add another title and description</FormStyled.TextLabel>
                </FormStyled.Wrapper>
                <FormStyled.FieldsetWrapper marginBottom="0">
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor='token'>TOKEN</FormStyled.Label>
                        <FormStyled.SmallInput 
                            id="token"
                            name="token"
                            onChange={(e)=>setToken(e.target.value)}
                            placeholder='Search'
                            value={token}
                            required
                        />
                    </FormStyled.Fieldset>
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor='amount'>AMOUNT</FormStyled.Label>
                        <FormStyled.SmallInput 
                            id="amount"
                            name="amount"
                            onChange={(e)=>setAmount(e.target.value)}
                            placeholder='amount'
                            value={amount>0?amount:""}
                            required
                        />
                    </FormStyled.Fieldset>
                </FormStyled.FieldsetWrapper>
                <FormStyled.FieldsetWrapper>
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor='kayRew'>Keys REWARDED <FormStyled.QuestionIcon>?</FormStyled.QuestionIcon></FormStyled.Label>
                        <FormStyled.SmallInput 
                            id="kayRew"
                            name="kayRew"
                            onChange={(e)=>setKeysRewarded(e.target.value)}
                            placeholder='0'
                            value={keysRewarded>0?keysRewarded:""}
                            required
                        />
                    </FormStyled.Fieldset>
                    <FormStyled.Fieldset>
                        <FormStyled.Label htmlFor='pepleLimit'>PEOPLE LIMIT <FormStyled.QuestionIcon>?</FormStyled.QuestionIcon></FormStyled.Label>
                        <FormStyled.SmallInput 
                            id="pepleLimit"
                            name="pepleLimit"
                            onChange={(e)=>setPeopleLimit(e.target.value)}
                            placeholder='0'
                            value={peopleLimit>0?peopleLimit:""}
                            required
                        />
                    </FormStyled.Fieldset>
                </FormStyled.FieldsetWrapper>

                <SelectTask setLink={setTaskLink}/>
                <SubmitButton link={taskLink}/>
            </Styled.MarginWrapper>
            <Footer />
        </Styled.AddNewKeyContainer>
    )
};

export default AddNewKey ;