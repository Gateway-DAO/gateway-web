import styled from 'styled-components'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

export const Page = styled.main`
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
    // flex:.5;
    // display: grid;
    // grid-template-columns: 3fr 6fr 3fr;
    margin: 50px 0;
`

export const Heading = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 100px;
    /* or 94% */

    text-align: center;
    letter-spacing: -0.05em;

    /* Background */
    background: linear-gradient(
        88.04deg,
        #ee787b 22.54%,
        #e153f2 41.08%,
        #495be0 65.25%,
        #6a39f3 86.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    grid-column: 1/4;
`
export const SpaceBox = styled.canvas`
    position: absolute;
    top: 90px;
    z-index: -1;
`

export const Text = styled.p`
    margin: 50px auto;
    color: white;
    font-family: Poppins;
    font-style: normal;
`