import styled from "styled-components"
import play from "../img/seta_play.png"
import turn from "../img/seta_virar.png"
import zap from "../img/icone_certo.png"
import forgot from "../img/icone_erro.png"
import almost from "../img/icone_quase.png"
export default function ContentQuestion({ i, closed, answer, card, toggleCloseCard, turnCard, classifyCard }) {
    const GREEN = "#2FBE34"
    const YELLOW = "#FF922E"
    const RED = "#FF3030"
    const refObjAnswers = {
        "forgot": { color: RED, src: forgot, dataTest: "no-icon" },
        "almost": { color: YELLOW, src: almost, dataTest: "partial-icon" },
        "zap": { color: GREEN, src: zap, dataTest: "zap-icon" },
    }

    if (closed) {
        if (answer === "unanswered") {
            return <><p data-test="flashcard-text">{`Pergunta ${i}`} </p> <img data-test="play-btn" onClick={() => toggleCloseCard(i)} src={play} alt="" /></>
        } else {
            return (
                <>
                    <AnsweredQuestion   color={refObjAnswers[answer].color}
                                        data-test="flashcard-text">{`Pergunta ${i}`}
                    </AnsweredQuestion>
                    <img data-test={refObjAnswers[answer].dataTest} src={refObjAnswers[answer].src} alt="" /></>
            )
        }
    } else {
        if (answer === "unanswered") {
            return <><p data-test="flashcard-text">{card.question}</p> <img data-test="turn-btn" onClick={() => turnCard(i, "answered")} src={turn} alt="" /></>
        } else {
            return (
                <>
                    <p data-test="flashcard-text">{card.answer}</p>
                    <ButtonConteiner>
                        <InnerButton data-test="no-btn" onClick={() => classifyCard(i, "forgot")} color={RED}>Não Lembrei</InnerButton>
                        <InnerButton data-test="partial-btn" onClick={() => classifyCard(i, "almost")} color={YELLOW}>Quase não lembrei</InnerButton>
                        <InnerButton data-test="zap-btn" onClick={() => classifyCard(i, "zap")} color={GREEN}>Zap!</InnerButton>
                    </ButtonConteiner>
                </>
            )
        }
    }

}

const ButtonConteiner = styled.div`
    display:flex;
    justify-content: space-between;
`
const InnerButton = styled.button`
    width: 90px;
    font-family: 'Recursive';
    display:inline;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.color};
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    padding:5px;
`
const AnsweredQuestion = styled.p`
    text-decoration-line: line-through;
    color: ${props => props.color};    
`