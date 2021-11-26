import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 140px;
  color: white;
  font-family: Poppins sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  height: 250vh;
`
  
export const Fieldset = styled.fieldset`
  width: 130%;
  overflow-x: hidden;
  overflow-y:scroll;
  max-width:100%;
  // height:80vh;
`
export const RichEditor_root = styled.div` 
 font-family: Be Vietnam;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
max-width:900px;
position : relative;
// display: -webkit-box;
// display: -webkit-flex;
display: -ms-flexbox;
 display: flex;
 flex-direction : column;
// -webkit-align-items: center;
// -webkit-box-align: center;
// -ms-flex-align: center;
// align-items: center;
// -webkit-letter-spacing: 0.05em;
// -moz-letter-spacing: 0.05em;
// -ms-letter-spacing: 0.05em;
letter-spacing: 0.05em;
border-radius: 10px;
width: 100vw;
height: 400px;
    // border: 1px solid #ddd;
    // font-family: 'Georgia', serif;
    // font-size: 14px;
     padding: 15px;
    `