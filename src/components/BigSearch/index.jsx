import { useRef, useState, useEffect } from "react"
import { useHistory } from "react-router";
import styled from "styled-components"
import * as Styled from "./style"
import Typist from "react-typist";
import Typewriter from 'typewriter-effect/dist/core';

import { daos } from "../../api/algolia";
// const Placeholder = ()=>{
//   // const [count, setCount] = useState(1);
  
// }
const BigSearch = props => {
    const inputRef = useRef();
    const input = inputRef.current;
    const history = useHistory()
    // const [placeholder, setPlaceholder] = useState("Search for ");
    let placeHolder="Search for ";
    let txt="";
    let i=0;
    let j=0;
    const arr = ["Trending ","DeFi ","Investment ","Media ", "Social "];
    let speed = 300;

    const handleInput = async e => {
      if (e.key === "Enter") {
        history.push(`search/${e.target.value}`);
      }
    }

    const TypingEffect = ()=>{
      if(j<4){
        txt = arr[j];
        Type();
      }else{
        j=0;
        setTimeout(TypingEffect,speed);
      }
    }
    const Type = ()=>{
      placeHolder += txt.charAt(i);
      document.getElementById("searchID").setAttribute("placeholder",placeHolder);
      i++;
      // console.log(a);
      if(txt.length>i){
        setTimeout(Type,speed);
      }else{
        // setTimeout(BackSpace(),speed+200);
        BackSpace();
      }
      // setTimeout(Type,speed);
    }
    const BackSpace = ()=>{
      placeHolder = placeHolder.substring(0, placeHolder.length - 1);
      document.getElementById("searchID").setAttribute("placeholder",placeHolder);
      i--;
      // console.log(a);
      
      if(i>0){
        setTimeout(BackSpace,speed);
      }else{
        j++;
        // setTimeout(TypingEffect(),speed+100);
        TypingEffect()
      }
    }
    useEffect(()=>{
      TypingEffect();
      // Type();
    },[])


    return (
      <Styled.Box>
        <Styled.SearchInputBox>
          <Styled.SearchInput type="search" onKeyPress={handleInput} id="searchID"/>
          <Styled.WrappedFiSearch size={60} />
        </Styled.SearchInputBox>
      </Styled.Box>
    )
}

const WrappedBigSearch = styled(BigSearch)`
    background-color: white;
    padding: 20px;
`

export default WrappedBigSearch;