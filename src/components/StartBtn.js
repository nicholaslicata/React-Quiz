
function StartBtn({ startQuiz }) {
    return (
        <div className='start-container'>
            <button className='start-btn' onClick={startQuiz}>Start</button>
        </div>
    )
}

export default StartBtn;