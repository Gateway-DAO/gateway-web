import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardBox = styled.div`
    background-color: white;
    border-radius: 20px;
    display: grid;
    // With the card bottom => grid-template-rows: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    cursor: pointer;
    // With the card bottom => height: 30em;
    height: 25em;

    @media only screen and (max-width: 1170px) {
        height: 27em;
        min-width: 15em;
    }

    @media only screen and (max-width: 300px) {
        min-width: 200px;
        max-width: 200px;
    }
`

export const CardBanner = styled.div`
  position: relative;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  grid-row: 1 / span 2;
`;

export const CardLogo = styled.img`
  position: absolute;
  border-radius: 100%;
  width: 50px;
  top: 15px;
  left: 15px;
  background-color: white;
`;

export const CardBody = styled.div`
  grid-row: 3 / span 2;
  padding: 15px;
  margin-bottom: 15px;
`;

export const CardTitle = styled.h1`
  font-family: "Be Vietnam";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #170627;
`;


export const CategoryList = styled.ul`
  margin-top: 25px;
  // margin-bottom: 15px;
  margin-left: 15px;
  display:flex;
  align-items:center;
  @media only screen and (max-width: 380px) {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items:start;
    justify-content:center;
    text-align: left;
  }
`;

export const Category = styled.li`
  border: 1px solid #170627;
  box-sizing: border-box;
  border-radius: 20px;
  display: inline-block;

  font-family: Be Vietnam;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: 0.05em;

  color: #170627;

  padding: 2px 6px;
  margin-right: 10px;

  @media only screen and (max-width: 380px) {
    margin: 5px;
  }
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  color: #170627;
`;

export const CardDesc = styled.div`
  font-family: "Be Vietnam", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  color: #170627;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardInfoBox = styled.div`
  border-top: 1px solid rgba(229, 229, 229, 0.5);
  background-color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 15px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const CardInfoTitle = styled.h2`
  font-family: "Be Vietnam", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
`;

export const CardInfoValue = styled.p`
  font-family: "Be Vietnam", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
`;