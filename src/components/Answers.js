import WordCheck from "./WordCheck";

const Answers = ({randomWords, setStartGame, startGame, setEndGame, endGame}) => {
    return (
        <div className="end-block">
            <h2>Write correct answers</h2>
            {randomWords.map((w, index) => {
                return <WordCheck word={w} index={index} />
            })}
            <div className="bottom-buttons">
                <button className="prev-btn" onClick={() => {setStartGame(!startGame); setEndGame(!endGame)}}>Back</button>
            </div>
        </div>
    );
}

export default Answers;
