let score = 0
let wicket = 0
let balls = []
let hit = 0
let message = React.createRef()
const root = ReactDOM.createRoot(document.getElementById("root"))
renderBoard()

function renderBoard()
{
    root.render(<ScoreBoard/>)
}

function ScoreBoard()
{
    return (
        <>
            <h2>Score: {score}/{wicket}</h2>
            <ScoreButtons/>
            <Form/>
            <hr/>
            <Result/>
        </>
    )
}

function ScoreButtons()
{
    return (
        <div className="score-buttons">
            <button onClick={() => addScore(0)}>0</button>
            <button onClick={() => addScore(1)}>1</button>
            <button onClick={() => addScore(2)}>2</button>
            <button onClick={() => addScore(3)}>3</button>
            <button onClick={() => addScore(4)}>4</button>
            <button onClick={() => addScore(5)}>5</button>
            <button onClick={() => addScore(6)}>6</button>
            <button onClick={addWicket}>Wicket</button>
        </div>
    )
}

function Form()
{
    return (
        <form onSubmit={handleSubmit}>
            <input value={hit}/>
            <input ref={message}/>
            <button>Submit</button>
        </form>
    )
}

function Result()
{
    return (
        <>
            {
                balls.map((ball, index) => { return (
                    <p key={index}>{`${ball}, ${message.current.value}`}</p>
                )})
            }
        </>
    )
}

function handleSubmit(event)
{
    event.preventDefault()
    if(wicket >= 10)
    {
        return
    }
    balls.unshift(hit)
    if(hit != "W")
    {
        score += hit
    }
    else
    {
        wicket++
    }
    renderBoard()
    console.log(balls)
}

function addScore(num)
{
    hit = num
    renderBoard()
}

function addWicket()
{
    hit = "W"
    renderBoard()
}
