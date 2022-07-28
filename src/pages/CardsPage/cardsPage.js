import React, { useState } from "react";
import "./cardsPage.css"

const CardsPage = () => {

    const questions = [
        {
            id: 1,
            text: "What is the capital of America?",
            options: [
                { id: 5, text: "New York City", isCorrect: false },
                { id: 1, text: "Boston", isCorrect: false },
                { id: 2, text: "Santa Fe", isCorrect: false },
                { id: 3, text: "Washington DC", isCorrect: true },
            ],
            correctAnswerId: 3,
        },
        {
            id: 2,
            text: "What year was the Constitution of America written?",
            options: [
                { id: 5, text: "1787", isCorrect: true },
                { id: 1, text: "1776", isCorrect: false },
                { id: 2, text: "1774", isCorrect: false },
                { id: 3, text: "1826", isCorrect: false },
            ],
            correctAnswerId: 5,
        },
        {
            id: 3,
            text: "Who was the second president of the US?",
            options: [
                { id: 5, text: "John Adams", isCorrect: true },
                { id: 1, text: "Paul Revere", isCorrect: false },
                { id: 2, text: "Thomas Jefferson", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
            ],
            correctAnswerId: 5,
        },
        {
            id: 4,
            text: "What is the largest state in the US?",
            options: [
                { id: 5, text: "California", isCorrect: false },
                { id: 1, text: "Alaska", isCorrect: true },
                { id: 2, text: "Texas", isCorrect: false },
                { id: 3, text: "Montana", isCorrect: false },
            ],
            correctAnswerId: 1,
        },
        {
            id: 5,
            text: "Which of the following countries DO NOT border the US?",
            options: [
                { id: 5, text: "Canada", isCorrect: false },
                { id: 1, text: "Russia", isCorrect: true },
                { id: 2, text: "Cuba", isCorrect: false },
                { id: 3, text: "Mexico", isCorrect: false },
            ],
            correctAnswerId: 1,
        },
    ];

    const allQuestionsIds = questions.map(question => question.id)
    const randomQuestionId = allQuestionsIds[Math.floor(Math.random() * allQuestionsIds.length)];
    const selectedRandomQuestion = questions.find(question => question.id === randomQuestionId)

    const [currentQuestion, setCurrentQuestion] = useState(selectedRandomQuestion)
    const [selectedAnswearId, setSelectedAnswearId] = useState()

    const checkAnswerCorrect = (id) => currentQuestion.correctAnswerId === id


    const getClassForSelectedAnswer = (id) => {
        if (checkAnswerCorrect(id)) {
            return 'correct'
        } else {
            return 'incorrect'
        }
    }

    return (
        <div className="cardsPage">
            <h1>
                {currentQuestion.text}
            </h1>
            <ul>
                {currentQuestion.options.map(answer => (
                    <li
                        key={answer.id}
                        className={(answer.id === selectedAnswearId) && getClassForSelectedAnswer(answer.id)}
                        onClick={(e) => {
                            e.preventDefault()

                            if (!selectedAnswearId) {
                                setSelectedAnswearId(answer.id)
                            }
                        }}
                    >
                        {answer.text}
                    </li>
                ))}
            </ul>



            {selectedAnswearId && (
                <>
                    <h1>
                        {currentQuestion.text}
                    </h1>
                    <button onClick={() => {
                        setSelectedAnswearId(null)
                        setCurrentQuestion(selectedRandomQuestion)
                    }}>
                        Next question
                    </button>
                </>
            )}

            {/* {questions.map((question) => (
                <div key={question.id}>
                    {question.question}
                </div>
            ))} */}
        </div>
    )
}

export default CardsPage;