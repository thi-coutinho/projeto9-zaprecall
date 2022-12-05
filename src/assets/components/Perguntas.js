import { useState } from "react"
import Pergunta from "./Pergunta"
import ContentQuestion from "./ContentQuestion"


export default function Perguntas(props) {
  const [closedCards,setClosedCards] = useState(props.cards.map(()=>true)) // states [true,false]

  function toggleCloseCard(i) {
    const newClosedCards = [...closedCards]
    newClosedCards[i] = !newClosedCards[i]
    setClosedCards(newClosedCards)
  }
  function turnCard(i,newAnswer) {
    const newAnswerCards = [...props.answerCard]
    newAnswerCards[i] = newAnswer
    props.setAnswerCard(newAnswerCards)
  }
  function classifyCard(i,newAnswer) {
    toggleCloseCard(i)
    turnCard(i,newAnswer)
  }

  return (
        <div>
            {props.cards.map((c,i)=> (
            <Pergunta key={i}
                      closedCard={closedCards[i]}
              >
                <ContentQuestion i={i}
                                 closed={closedCards[i]}
                                 answer={props.answerCard[i]}
                                 card={props.cards[i]}
                                 toggleCloseCard = {toggleCloseCard}
                                 turnCard = {turnCard}
                                 classifyCard = {classifyCard}
                />
            </Pergunta>
            ))}
        </div>
        )
}