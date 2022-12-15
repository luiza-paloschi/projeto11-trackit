import { useContext } from "react";
import styled from "styled-components";
import StyledHeader from "../components/Header";
import { UserContext } from "../components/UserContext";

export default function HistoricPage(){
    const {user} = useContext(UserContext)

    return (
        <ScreenContainer>
            <StyledHeader>
                <p>TrackIt</p>
                <img src={user.image} alt="userImg"></img>
            </StyledHeader>
            <DivContent>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </DivContent>
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
    margin: 70px 0px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    h1{
        font-size: 22.976px;
        line-height: 29px;
        /* identical to box height */
        color: #126BA5;
        margin-top: 28px;
        margin-bottom: 17px;
    }
    h2{
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding:0px;
    }
`
const DivContent = styled.div`
    width:100%;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
