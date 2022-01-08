import styled from "styled-components";

export const Page = styled.div`
// background-color: #170627;
    min-height: 100vh;
    // overflow-x: hidden;
    // width: 100vw;
    // display: flex;
    // justify-content: space-between;
    // flex-direction: column;
    background-color: transparent;
    height: 100%;
    position: relative;

    overflow-x: hidden;

    &:before {
        position: absolute;
        content: '';
        z-index: -2;
        background-color: #170627;
        height: 100%;
        width: 100%;
    }

`
export const Container = styled.div`
display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20%;
  margin: 40px 140px;
  color: white;
  font-family: Poppins sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 30px;
  margin: 10px 0;
` 
export const  description= styled.label`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #ffffff;
`
// body
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   background: #5256ad;
// }
export const drag_area=styled.button`
  // border: 2px dashed #fff;
  // height: 300px;
  // width: 500px;
  // margin:10px;
  // border-radius: 5px;
   display: flex;
   align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  width: 100%;
  height: ${(props) => props.height || '250px'};
  color: #e5e5e5;
  background: #170627;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px;
  margin: 12px 0;
  resize: vertical;
  
`
// export const drag_area.active{
//   border: 2px solid #fff;
// }
 export const icon= styled.div`
  font-size: 100px;
  color: #453852;
`
export const header= styled.div`
  
  color: #fff;
  font-family: Be Vietnam;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* or 162% */

text-align: center;

`
export const span=styled.span`
font-family: Be Vietnam;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
/* or 162% */

text-align: center;

  color: #FE02B9;
  margin: 10px 0 15px 0;
`
export const button=styled.div`
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 500;
  border: none;
  outline: none;
  background: #fff;
  color: #5256ad;
  border-radius: 5px;
  cursor: pointer;
`
export const img= styled.div`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`
// export const FileUploadContainer = styled.section`
//   position: relative;
//   margin: 25px 0 15px;
//   border: 2px dotted lightgray;
//   padding: 35px 20px;
//   border-radius: 6px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: white;
// `;

// export const FormField = styled.input`
//   font-size: 18px;
//   display: block;
//   width: 100%;
//   border: none;
//   text-transform: none;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   opacity: 0;

//   &:focus {
//     outline: none;
//   }
// `;

// export const InputLabel = styled.label`
//   top: -21px;
//   font-size: 13px;
//   color: black;
//   left: 0;
//   position: absolute;
// `;

// export const DragDropText = styled.p`
//   font-weight: bold;
//   letter-spacing: 2.2px;
//   margin-top: 0;
//   text-align: center;
// `;

// export const UploadFileBtn = styled.button`
//   box-sizing: border-box;
//   appearance: none;
//   background-color: transparent;
//   border: 2px solid #3498db;
//   cursor: pointer;
//   font-size: 1rem;
//   line-height: 1;
//   padding: 1.1em 2.8em;
//   text-align: center;
//   text-transform: uppercase;
//   font-weight: 700;
//   border-radius: 6px;
//   color: #3498db;
//   position: relative;
//   overflow: hidden;
//   z-index: 1;
//   transition: color 250ms ease-in-out;
//   font-family: "Open Sans", sans-serif;
//   width: 45%;
//   display: flex;
//   align-items: center;
//   padding-right: 0;
//   justify-content: center;

//   &:after {
//     content: "";
//     position: absolute;
//     display: block;
//     top: 0;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 0;
//     height: 100%;
//     background: #3498db;
//     z-index: -1;
//     transition: width 250ms ease-in-out;
//   }
//   i {
//     font-size: 22px;
//     margin-right: 5px;
//     border-right: 2px solid;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     width: 20%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }

//   @media only screen and (max-width: 500px) {
//     width: 70%;
//   }

//   @media only screen and (max-width: 350px) {
//     width: 100%;
//   }

//   &:hover {
//     color: #fff;
//     outline: 0;
//     background: transparent;

//     &:after {
//       width: 110%;
//     }
//   }

//   &:focus {
//     outline: 0;
//     background: transparent;
//   }

//   &:disabled {
//     opacity: 0.4;
//     filter: grayscale(100%);
//     pointer-events: none;
//   }
// `;
