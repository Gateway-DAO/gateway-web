import styled from 'styled-components'

/** CONTAINERS **/

export const SpaceBox = styled.canvas`
    position: absolute;
    top: 90px;
    left:0;
    right:0;
    right:0;
    z-index: -1;
`

/** TEXT **/

export const MainText = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 150px;
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

    width: 100%;
`

export const H2 = styled(MainText)`
    font-size: 48px;
    font-weight: bold;
`