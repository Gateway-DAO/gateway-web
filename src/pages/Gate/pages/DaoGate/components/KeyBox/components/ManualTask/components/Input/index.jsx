import React, { useState } from 'react';
import * as Styled from './style';
import {FormStyled} from '../../../../../../../../../../components/Form';
const Input = (props)=>{
    const [submissionURL, setSubmissionURL] = useState('');
    const [discordID, setDiscordID] = useState('');
    const [ETHAddress, setETHAddress] = useState('');
    const [comments, setComments] = useState('');
    
    const data = props.data;
    return (
        <Styled.Container>
            <FormStyled.Title>Submit Key 1 Infomations</FormStyled.Title>
            <FormStyled.Fieldset>
                <FormStyled.Label htmlFor='submissionURL'>SUBMISSION URL</FormStyled.Label>
                <FormStyled.Input 
                    id="submissionURL"
                    value={submissionURL}
                    onChange={e=>setSubmissionURL(e.target.value)}
                    placeholder='Enter a link to your submission/proof (ex. Dropbox/GDrive/Google Docs/etc.)'
                />
            </FormStyled.Fieldset>

            <FormStyled.Fieldset>
                <FormStyled.Label htmlFor='discordID'>Your DISCORD ID</FormStyled.Label>
                <FormStyled.Input 
                    id="discordID"
                    value={discordID}
                    onChange={e=>setDiscordID(e.target.value)}
                    placeholder='ex. Gateway#2022'
                />
            </FormStyled.Fieldset>
            
            <FormStyled.Fieldset>
                <FormStyled.Label htmlFor='ETHAddress'>Your ETH ADDRESS</FormStyled.Label>
                <FormStyled.Input 
                    id="ETHAddress"
                    value={ETHAddress}
                    onChange={e=>setETHAddress(e.target.value)}
                    placeholder='ex. name.eth or 0x3F226ce4AD8004A32206f4894A8755F1F35D1234'
                />
            </FormStyled.Fieldset>
            
            <FormStyled.Fieldset>
                <FormStyled.Label htmlFor='comments'>COMMENT</FormStyled.Label>
                <FormStyled.Textarea
                    id="comments"
                    height="200px"
                    value={comments}
                    onChange={e=>setComments(e.target.value)}
                    placeholder='In case you have additional comments.'
                />
            </FormStyled.Fieldset>
            
        </Styled.Container>
    )
}

export default ManualTask;