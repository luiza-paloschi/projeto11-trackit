import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { UserContext } from "../components/UserContext";
import deleteIcon from "../assets/delete.png";

export default function HabitsPage() {
    const { user } = useContext(UserContext);
    const [habits, setHabits] = useState(undefined);
    const [isDisabled, setIsDisabled] = useState(false);
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [createHabit, setCreateHabit] = useState(false);
    const [form, setForm] = useState({
        name: '',
        days: []
    });
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promise.then((res) => {
            setHabits(res.data);
        })
        promise.catch((err) => {
            alert(err.message);
        })
    }, [])

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleDay(index) {
        const newArray = [...form.days];
        if (!form.days.includes(index)) {
            newArray.push(index);
            setForm({ ...form, days: newArray });
        } else {
            const filtered = newArray.filter(element => element !== index);
            setForm({ ...form, days: filtered });
        }
    }

    function saveHabit(e) {
        e.preventDefault();
        setIsDisabled(true);
        const body = { ...form };
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
        promise.then((res) => {
            setForm({
                name: "",
                days: []
            });
            setHabits([...habits, res.data]);
            setCreateHabit(false);
            setIsDisabled(false);
        });
        promise.catch((err) => {
            alert(err.message);
            setIsDisabled(false);
        });
    }

    function deleteHabit(id) {
        if (window.confirm("Tem certeza de que quer deletar este hábito?")) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
            promise.then(() => {
                const filtered = habits.filter((element) => element.id !== id);
                setHabits(filtered);
            })
            promise.catch((err) => {
                alert(err.message);
            })
        }
    }

    if (habits === undefined) {
        return (
            <>
                <Header />
                <ScreenContainer>
                    <div style={{ marginTop: 50 + "px" }}>Carregando...</div>
                </ScreenContainer>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <ScreenContainer>
                <DivTitle>
                    <h2>Meus hábitos</h2>
                    <button data-test="habit-create-btn" onClick={(() => setCreateHabit(!createHabit))}>+</button>
                </DivTitle>
                {createHabit &&
                    <FormCreateHabit data-test="habit-create-container" onSubmit={saveHabit}>
                        <input data-test="habit-name-input" name="name" disabled={isDisabled} type="text" placeholder="nome do hábito" onChange={handleForm} value={form.name} />
                        <div>
                            {days.map((day, index) => <ButtonDay data-test="habit-day" disabled={isDisabled} form={form.days} day={index} type="button" onClick={() => handleDay(index)} key={index}>{day}</ButtonDay>)}
                        </div>
                        <DivButtons>
                            <ButtonCancel data-test="habit-create-cancel-btn" type="button" disabled={isDisabled} onClick={() => setCreateHabit(!createHabit)}>Cancelar</ButtonCancel>
                            <ButtonSave data-test="habit-create-save-btn" type="submit" disabled={isDisabled}>
                                {isDisabled ?
                                    <ThreeDots
                                        height="40"
                                        width="40"
                                        radius="9"
                                        color="#FFFFFF"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClassName=""
                                        visible={true}
                                    /> : "Salvar"}
                            </ButtonSave>
                        </DivButtons>
                    </FormCreateHabit>}
                {habits.length !== 0 ?
                    habits.map((habit) => <DivHabits data-test="habit-container" key={habit.id}>
                        <img data-test="habit-delete-btn" src={deleteIcon} onClick={() => deleteHabit(habit.id)} alt="deleteIcon" />
                        <p data-test="habit-name">{habit.name}</p>
                        <div>
                            {days.map((day, index) => <SpanDays data-test="habit-day" key={index} index={index} habit={habit.days}>{day}</SpanDays>)}
                        </div>
                    </DivHabits>)
                    :
                    <DivNoHabits>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </DivNoHabits>
                }
            </ScreenContainer>
            <Footer />
        </>
    );
}
const SpanDays = styled.span`
    width: 30px;
    height: 30px;
    background: ${props => props.habit.includes(props.index) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.habit.includes(props.index) ? "#FFFFFF" : " #DBDBDB"};
    display:flex;
    justify-content: center;
    align-items: center;
`;

const DivHabits = styled.div`
    width:100%;
    margin-top: 20px;
    position: relative;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left:15px;
    p{
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-top: 15px;
    }
    & > div {
        width: 100%;
        display:flex;
        column-gap: 4px;
        margin-top: 8px;
        margin-bottom: 15px;
    }
    img{
        position: absolute;
        top: 12px;
        right: 10px;
    }
`;
const DivNoHabits = styled.div`
    width: 100%;
    margin-top:30px;
    p{
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`;
const FormCreateHabit = styled.form`
    width: 100%;
    height: 180px;
    background: #FFFFFF;
    margin-top: 22px;
    border-radius: 5px;
    padding: 16px 16px;
    input{
        width: 100%;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 8px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        &::placeholder{
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        }
        &:disabled{
        background: #F2F2F2;
        }
    }
    & > div {
        width: 100%;
        display:flex;
        column-gap: 4px;
        
    }
`;
const DivButtons = styled.div`
        width: 100%;
        display:flex;
        margin-top: 29px;
        justify-content: flex-end;
        column-gap: 10px;
`;
const ButtonSave = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-size: 15.976px;
    line-height: 20px;
    color: #FFFFFF;
    border:none;
    display:flex;
    justify-content: center;
    align-items: center;
    &:disabled{
        opacity: 0.7;
    }
`;
const ButtonCancel = styled.button`
    width: 84px;
    height: 35px;
    background: #FFFFFF;
    color: #52B6FF;
    border-radius: 4.63636px;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    border:none;
`;
const ButtonDay = styled.button`
    width: 30px;
    height: 30px;
    background: ${props => props.form.includes(props.day) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.form.includes(props.day) ? "#FFFFFF" : " #DBDBDB"}; 
`;
const DivTitle = styled.div`
    display: flex;
    width:100%;
    margin-top:22px;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    button{
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
    border:none;
    }
`;

const ScreenContainer = styled.div`
    background-color: #F2F2F2;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px 0px;
    padding: 0px 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
`;