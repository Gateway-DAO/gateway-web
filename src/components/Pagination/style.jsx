import styled from "styled-components";

export const List = styled.div`
    display: inline-block;
`
export const Page = styled.a`
    color: white;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    margin: 0 4px;
    cursor:pointer;
    border-radius:5px;
    &:hover{
        background-color: rgba(255,255,255,.2);
    }
`