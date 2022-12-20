import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProgressContext } from "../components/ProgressContext";
import { UserContext } from "../components/UserContext";
import checkIcon from "../assets/checkIcon.png";

const updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekdays: [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
  ]
});

export default function TodayPage(){
    const {user} = useContext(UserContext);
    const [progress, setProgress] = useContext(ProgressContext);
    const [todayHabits, setTodayHabits] = useState(undefined);
    const [refresh, setRefresh] = useState(false);
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };
    useEffect(()=> {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then((res)=>{
            setTodayHabits(res.data);
            if (res.data.length > 0){
                const doneHabits = res.data.filter((element) => element.done === true);
                const currentProgress = Math.round((doneHabits.length / res.data.length) * 100);
                setProgress(currentProgress);
                localStorage.setItem("progress", JSON.stringify(currentProgress));
            }
        })
    }, [refresh]);

    function checkHabit(habit){
        const isDone = habit.done;
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${isDone? "uncheck" : "check"}`, {}, config);
            promise.then(()=>{
                setRefresh(!refresh);
            });
    }
    if(todayHabits === undefined){
        return(
            <>
            <Header />
            <ScreenContainer>
                <div style={{marginTop: 50 + "px"}}>Carregando...</div>
            </ScreenContainer>
            <Footer />
            </>
        );
    }

    return(
        <>
        <Header />
        <ScreenContainer>
            <DivTitle p={progress}>
                <h2 data-test="today">{`${dayjs().format('dddd')}, ${dayjs().format('DD/MM')}`}</h2>
                <h3 data-test="today-counter">{todayHabits.length === 0 || progress === 0 ? "Nenhum hábito concluído ainda" : `${progress}% dos hábitos concluídos`}</h3>
            </DivTitle>
            {todayHabits.length !== 0 &&
                todayHabits.map((habit)=>
                <DivHabit data-test="today-habit-container" key={habit.id} current={habit.currentSequence} highest={habit.highestSequence} done={habit.done}>
                    <div>
                        <h4 data-test="today-habit-name">{habit.name}</h4>
                        <h5 data-test="today-habit-sequence">Sequência atual: <span>{`${habit.currentSequence} ${habit.currentSequence > 1 ? "dias" : "dia"}`}</span></h5>
                        <h5 data-test="today-habit-record">Seu recorde: <strong>{`${habit.highestSequence} ${habit.highestSequence > 1 ? "dias" : "dia"}`}</strong></h5>
                    </div>
                    <div>
                        <ButtonCheck data-test="today-habit-check-btn" onClick={()=> checkHabit(habit)} done={habit.done}>
                            <img src={checkIcon} alt="conclude habit"/>
                        </ButtonCheck>
                    </div>
                </DivHabit>)
            }
        </ScreenContainer>
        <Footer />
        </>
    );
}

const ButtonCheck = styled.button`
    background: ${props => props.done ? "#8FC549": "#E7E7E7"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    width: 69px;
    height: 69px;
    border: none;
`;

const DivHabit = styled.div`
    width:100%;
    padding: 12px;
    color: #666666;
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 15px;
    h4{
        font-size: 19.976px;
        line-height: 25px;
    }
    h5{
        font-size: 12.976px;
        line-height: 16px;
    }
    span{
        color: ${props => props.done ? "#8FC549" : "#666666"};
    }
    strong{
        color: ${props => props.done && props.current === props.highest ? "#8FC549" : "#666666"};
    }
`
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
    padding: 0px 17px;
`

const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-top:22px;
    h2{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h3{
    font-size: 17.976px;
    line-height: 22px;
    color: ${props => props.p > 0 ? "#8FC549" : "#BABABA"};
    margin-bottom: 28px;
    }
`