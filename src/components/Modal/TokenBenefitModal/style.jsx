import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 140px;
  color: white;
  font-family: Poppins sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`
export const TokenBenefitHeader = styled.label `
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
export const Fieldset = styled.fieldset`
  width: 100%;
`

export const TokenBenefitButton = styled.button`
  background: #170627;
  border: 1px solid #A5A5A5;
  box-sizing: border-box;
  border-radius: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 9px 65px;
  color: #E5E5E5;
  margin-top:15px;
`
