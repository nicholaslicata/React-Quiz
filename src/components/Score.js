
function Score({ score, questionList, restart }) {
    return (
        <div className='score-container'>
          <h1 className='score'>You scored {score} out of {questionList.length}!</h1>
          <button className='restart-btn' onClick={restart}>Restart</button>
        </div>
    )
}

export default Score;