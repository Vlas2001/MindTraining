import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const GameSettings = ({countOfWords, setCountOfWords, words, setRandomWords, setParameters, setStartGame}) => {

    const game = () => {
        setRandomWords(words.sort(() => 0.5 - Math.random()).slice(0, countOfWords));
        setParameters(false);
        setStartGame(true);
    }

    return (
        <>
            <div className="config-block">
                <h2>Select count of words</h2>
                <div className="select-block">
                    <button className="prev-btn" onClick={() => setCountOfWords(countOfWords-1)} disabled={countOfWords === 0}><AiOutlineMinus/></button>
                    <span className="word-span">{countOfWords}</span>
                    <button className="next-btn" onClick={() => setCountOfWords(countOfWords+1)} disabled={countOfWords === words.length}><AiOutlinePlus/></button>
                </div>
                <div className="bottom-buttons">
                    <button className="next-btn" onClick={game}>Start</button>
                </div>
            </div>
        </>
    );
}

export default GameSettings;
