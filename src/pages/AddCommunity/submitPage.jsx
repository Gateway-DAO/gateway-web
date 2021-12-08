import React,{useEffect} from "react";
import { useParams, useHistory } from "react-router"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import space from '../../utils/canvas'
import * as Styled from "./style";

const SubmitPage = ()=>{
    const { name } = useParams();
    const history = useHistory();
    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    )
    const backToHome =()=>{
        history.push('/')
    }
    return(
        <Styled.Page>
            <Header />
            <Styled.SpaceBox id="space-canvas" />
            <Styled.Container>
                <Styled.Heading>We're Building Communities Together</Styled.Heading>
                <Styled.Text>Thank you, {name} Is Successfully Added.</Styled.Text>
                <Styled.Button 
                    id="submit_msg"
                    type="button"
                    onClick={backToHome}
                >
                    Back To Home
                </Styled.Button>
            </Styled.Container>
            {/* <Footer /> */}
        </Styled.Page>
    )
}

export default SubmitPage;