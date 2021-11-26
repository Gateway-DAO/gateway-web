import styled from "styled-components";


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
height: 300px;
    // border: 1px solid #ddd;
    // font-family: 'Georgia', serif;
    // font-size: 14px;
     padding: 15px;
    `
  
export const RichEditor_editor = styled.div` 
    flex : 1;
    cursor: text;
    font-size: 16px;
    overflow-y:scroll;
    paddin-bottom:10px;
    margin-top: 10px;
    // width :100vw;
    margin-bottom: 25px;
   `
  
// const  RichEditor_editor_public_DraftEditorPlaceholder_root:RichEditor_editor_public_DraftEditor_content = styled.div `
//      margin: 0 -15px -15px;
//      padding: 15px;
//     `
  
// RichEditor_editor_public_DraftEditor_content `
//      min-height: 100px;
//    `
//     RichEditor_hidePlaceholder.public_DraftEditorPlaceholder_root `
//      display: none;
//    ` 
   
  
//  RichEditor_editor.RichEditor_blockquote `
//      border-left: 5px solid #eee;
//      color: #666;
//      font-family: 'Hoefler Text', 'Georgia', serif;
//      font-style: italic;
//      margin: 16px 0;
//      padding: 10px 20px;
//    `
   RichEditor_editor.public_DraftStyleDefault_pre = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
    font-size: 16px;export 
    padding: 20px;
   `
  
export  const RichEditor_controls =styled.div`
     font_family: 'Helvetica', sans_serif;
     font-size: 14px;
     margin-bottom: 5px;
     user-select: none;
   `
  
   export const RichEditor_styleButton =styled.div`
     color: #999;
     cursor: pointer;
     margin-right: 16px;
     padding: 2px 0;
   display: inline-block;
   `
  
   export const RichEditor_activeButton =styled.div`
     color: #5890ff;
   `

   export const Controls=styled.div`
   border-top: 1px solid #ddd;
   position :absolute;
   display : flex;
   justify-content: space-between;
   z-index:1;
   bottom :8px;
   width: 95%;
  //  position: relative;
   `
   export const EmojiPicketDiv = styled.div`
   position: absolute;
  //  top:555px;
   left:470px;
    // top:10px;
   `
