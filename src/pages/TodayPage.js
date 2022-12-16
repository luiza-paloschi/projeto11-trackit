import { useContext } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { UserContext } from "../components/UserContext";

export default function TodayPage(){
    const {user} = useContext(UserContext)
    console.log(user)
    return(
        <>
        <Header />
        <ScreenContainer>
            
        </ScreenContainer>
        <Footer />
        </>
    );
}

const ScreenContainer = styled.div`
    background-color: #F2F2F2;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: 70px 0px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
`