import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
    return (
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
    );
}

const StyledFooter = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 36px;
    overflow: visible;
    p{
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    }
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