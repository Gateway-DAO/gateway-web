import { useState } from 'react'; 
import * as Styled from './style';
import { FormStyled } from '../../../../components/Form'

const Persentage=({persentage,setPersentage})=>{
    const [arr, setArr] = useState([0,25,50,75,100])
    return(
        <>
            <FormStyled.Fieldset>
                <FormStyled.Label>
                    Percentage necessary to pass the Quiz?
                </FormStyled.Label>
                <Styled.Array>
                    <Styled.Block onClick={()=>setPersentage(0)} checked={persentage===0}>
                        0%
                    </Styled.Block>
                    <Styled.Block onClick={()=>setPersentage(25)} checked={persentage===25}>
                        25%
                    </Styled.Block>
                    <Styled.Block onClick={()=>setPersentage(50)} checked={persentage===50}>
                        50%
                    </Styled.Block>
                    <Styled.Block onClick={()=>setPersentage(75)} checked={persentage===75}>
                        75%
                    </Styled.Block>
                    <Styled.Block onClick={()=>setPersentage(100)} checked={persentage===100}>
                        100%
                    </Styled.Block>
                </Styled.Array>
            </FormStyled.Fieldset>
            <FormStyled.Button type='submit'>Submit</FormStyled.Button>
            
        </>
    )
}
export default Persentage;