import { Link } from "react-router-dom";
import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useContext } from "react";
import { ProgressContext } from "./ProgressContext";
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    const [progress] = useContext(ProgressContext);
    
    return (
        <StyledFooter data-test="menu">
            <Link data-test="habit-link" to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link data-test="today" to="/hoje">
                <DivCircle>
                    <CircularProgressbar value={progress} text="Hoje" background = "true" backgroundPadding= "6"
                    styles={buildStyles({
                        pathColor: `#FFFFFF`,
                        textColor: '#FFFFFF',
                        trailColor: '#52B6FF',
                        backgroundColor: '#52B6FF',
                      })}
                    />
                </DivCircle>
            </Link>
            <Link data-test="history-link" to="/historico">
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
    right: 0px;
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
`