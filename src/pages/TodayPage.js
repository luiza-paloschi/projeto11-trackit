import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledFooter from "../components/Footer";
import StyledHeader from "../components/Header";
import { UserContext } from "../components/UserContext";

export default function TodayPage(){
    const {user} = useContext(UserContext)
    console.log(user)
    return(
        <ScreenContainer>
           <StyledHeader>
                <p>TrackIt</p>
                <img src={user.image} alt="userImg"></img>
           </StyledHeader>
            <StyledFooter>
                <Link to="/habitos">
                    <p>Hábitos</p>
                </Link>
                <Link to="/hoje">
                    <DivCircle><p>Hoje</p></DivCircle>
                </Link>
                <Link to="/historico">
                    <p>Histórico</p>
                </Link>
            </StyledFooter>
        </ScreenContainer>
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
    a{
        text-decoration: none;
        cursor: pointer;
    }
`
const DivCircle = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
    border-radius:50%;
    background: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
    }
`