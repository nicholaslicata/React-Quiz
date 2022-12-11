
function Quiz({ questionList, questionIndex, answerSelect }) {
    return (
        <main className='quiz-container'>
            <div className='quiz-question-container'>
                <h1 className='question'>{questionList[questionIndex].question}</h1>
            </div>
            <div className='quiz-answer-container'>
               {questionList[questionIndex].choices.map((choice) => (
                  <button className='answer-btn' onClick={() => answerSelect(choice.isCorrect)} key={choice.id}>{choice.choice}</button>
                ))}
            </div>
        </main>
    )
}

export default Quiz;