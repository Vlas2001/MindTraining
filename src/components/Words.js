import {useState} from "react";
import data from "./data";
import WordCheck from "./WordCheck";
import './styles.css'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import GameSettings from "./GameSettings";
import RememberWords from "./RememberWords";
import Answers from "./Answers";

const Words = () => {

    const [words] = useState(data);
    const [countOfWords, setCountOfWords] = useState(5);
    const [randomWords, setRandomWords] = useState([]);
    const [wordIndex, setWordIndex] = useState(0);

    const [parameters, setParameters] = useState(true);
    const [startGame, setStartGame] = useState(false);
    const [endGame, setEndGame] = useState(false);

    return (
        <div className="main-block">
            <div className="center-block">
                {parameters && <GameSettings words={words}
                                             countOfWords={countOfWords}
                                             setCountOfWords={setCountOfWords}
                                             setParameters={setParameters}
                                             setRandomWords={setRandomWords}
                                             setStartGame={setStartGame}/>}

                {startGame && <RememberWords parameters={parameters}
                                             setStartGame={setStartGame}
                                             setParameters={setParameters}
                                             randomWords={randomWords}
                                             setEndGame={setEndGame}
                                             setWordIndex={setWordIndex}
                                             startGame={startGame}
                                             wordIndex={wordIndex}/>}

                {endGame && <Answers startGame={startGame}
                                     setEndGame={setEndGame}
                                     randomWords={randomWords}
                                     setStartGame={setStartGame}
                                     endGame={endGame}/>}
            </div>
        </div>
    );
};

export default Words;
