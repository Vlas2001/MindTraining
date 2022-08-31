const RememberWords = ({setStartGame, setEndGame, setWordIndex, wordIndex, randomWords, startGame, setParameters, parameters}) => {

    const finish = () => {
        setStartGame(false);
        setEndGame(true);
    }

    return (
        <div className="g-block">
            <h2>Remember words</h2>
            <div className="select-block">
                <button className="prev-btn" onClick={() => setWordIndex(wordIndex-1)} disabled={wordIndex===0}>{'<'}</button>
                <span className="word-span">{randomWords[wordIndex]}</span>
                <button className="next-btn" onClick={() => setWordIndex(wordIndex+1)} disabled={wordIndex===randomWords.length-1}>{'>'}</button>
            </div>
            <div className="bottom-buttons">
                <button className="prev-btn" onClick={() => {setStartGame(!startGame); setParameters(!parameters)}}>Back</button>
                <button className="next-btn" onClick={finish}>Finish</button>
            </div>
        </div>
    );
}

export default RememberWords;
