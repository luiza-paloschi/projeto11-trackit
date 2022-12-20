
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import 'react-calendar/dist/Calendar.css';

export default function HistoricPage(){
    return (
        <>
        <Header />
        <ScreenContainer>
            <DivContent>
                <h1>Histórico</h1>
                <h2>Em breve você podeá ver o histórico dos seus hábitos aqui!</h2>
            </DivContent>
        </ScreenContainer>
        <Footer />
        </>
    );
}
const ScreenContainer = styled.div`
    background-color: #F2F2F2;
    max-width: 100vw;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px 0px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    padding: 0px 20px;
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
`;
const DivContent = styled.div`
    width:100%;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;