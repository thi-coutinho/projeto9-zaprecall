import logo from "../img/logo.png"
import styled from "styled-components"
import Perguntas from "./Perguntas.js"
import Footer from "./Footer.js"
import cards from "../cards.js"
import { useState } from "react"

export default function Main() {
    const [answerCard,setAnswerCard] = useState(cards.map(()=>"unanswered")) // states [unanswered, answered,forgot, almost, zap]



    return (
        <Screen>
            <Logo>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </Logo>
            <Perguntas cards={cards}
            closedCards = {"open"}
            answerCard={answerCard}
            setAnswerCard = {setAnswerCard}
            />
            <Footer answerCard = {answerCard}
                    totalCards={cards.length}
                    totalRespondidos={answerCard.filter((c)=>c!=="unanswered" && c!=="answered").length}
            />
        </Screen>
    )
}

const Screen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
    width: 52px;
    }
    h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
    }
`
