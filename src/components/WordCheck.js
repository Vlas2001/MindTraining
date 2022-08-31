import {useState} from "react";

const WordCheck = ({word, index}) => {
    const [col, setCol] = useState("red")

    return (
        <p>
	        <span className="input">
		        <input className="inp" type={"text"} onChange={val => setCol(val.target.value == word ? "green" : "red")} style={{borderColor: col} } />
		        <span></span>
	        </span>
        </p>
    );
};

export default WordCheck;
