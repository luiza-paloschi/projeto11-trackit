import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "./UserContext";



export default function Header(){
    const {user} = useContext(UserContext);
    return(
        <StyledHeader>
                <p>TrackIt</p>
                <img src={user.image} alt="userImg"></img>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 18px;
    p{
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`