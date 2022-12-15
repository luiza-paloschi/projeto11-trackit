import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Logo.png";

export default function SignUpPage(){
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        image: '',
      });

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value,
          }) ;
    }

    function signUp(event){
        event.preventDefault();
        setIsDisabled(true)
        const body = {...form}
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        promise.then((res)=>{
            console.log(res);
            navigate("/");
        });
        promise.catch((err) => {
            alert(err.message);
            setIsDisabled(false);
        }); 
    }

    return(
        <ScreenContainer>
        <img src={logo} alt="logo"/>
        <FormSignUp onSubmit={signUp}>
            <input name="email" type="email" placeholder="email" required onChange={handleForm} value={form.email} disabled={isDisabled}/>
            <input name="password" type="password" placeholder="senha" required onChange={handleForm} value={form.password} disabled={isDisabled}/>
            <input name="name" type="text" placeholder="nome" required onChange={handleForm} value={form.name} disabled={isDisabled}/>
            <input name="image" type="url" placeholder="foto" required onChange={handleForm} value={form.image} disabled={isDisabled}/>
            <button disabled={isDisabled} type="submit">
                {isDisabled? 
                <ThreeDots
                height="40" 
                width="40" 
                radius="9"
                color="#FFFFFF" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                 /> : "Cadastrar"}
                </button>
        </FormSignUp>
        <Link to="/">
            <p>Já tem uma conta? Faça login!</p>
        </Link>
    </ScreenContainer>
);
}

const ScreenContainer = styled.div`
background-color: #FFFFFF;;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
margin: 0px;
padding: 0px 35px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
p{
    text-align:center;
    font-size: 13.976px;
    line-height: 17px;
}
a{
   color: #52B6FF;
}
`
const FormSignUp = styled.form`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
row-gap:6px;
margin: 30px  0px;

input{
    max-width: 303px;
    width: 100%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display:flex;
    align-items:center;
    font-size: 19.976px;
    line-height: 25px;
    padding-left:10px;
    &::placeholder{
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
    &:disabled{
        background: #F2F2F2;
    }
}
button{
    max-width: 303px;
    width: 100%;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    border:none;
    opacity:1;
    display:flex;
    justify-content:center;
    align-items:center;
    &:disabled{
        opacity: 0.7;
    }
}
`
    