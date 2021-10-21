import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  color: white;
  font-family: Poppins sans-serif;
`

export const BountyHeader = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 90px;
  /* identical to box height, or 187% */
  text-align: center;
  letter-spacing: -0.05em; 
  /* Background */
    background: linear-gradient(88.04deg, #EE787B 22.54%, #E153F2 41.08%, #495BE0 65.25%, #6A39F3 86.1%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent; 
`
export const BountyLabel = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #FFFFFF
`

export const GridBox = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`