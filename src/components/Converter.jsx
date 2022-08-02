import React, { useState, useRef, useEffect } from "react";

const map1 = new Map([
    ["decimal", 10],
    ["binary", 2],
    ["octal", 8],
    ["hexadecimal", 16],
    ["base-32", 32]
])

const convertNumber = (num, baseOg, baseConv) => {
    return parseInt(num, baseOg).toString(baseConv);
}

function Converter() {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    //radio button logic to decide the base to and from to convert to 
    const [inpChoice, setInpChoice] = useState('decimal');
    const [outChoice, setOutChoice] = useState('binary');
    const updateInpChoice = (event) => {
        setInpChoice(event.target.value)
        console.log(inpChoice)
    }
    const updateOutChoice = (event) => {
        setOutChoice(event.target.value)
        console.log(outChoice)
        updateOutputNumber();
    }

    const [outputNumber, setOutputNumber] = useState(0);


    const updateOutputNumber = (event) => {
        const num = event.target.value

        const a = map1.get(inpChoice);
        const b = map1.get(outChoice);

        setOutputNumber(convertNumber(num, a, b))
    }

    const checkNan = (value) => {
        if (value === "NaN") {
            return "Invalid Input"
        } else {
            return value
        }
    }

    return (
        <div id="converter" className="container">
            <div className="card">
                <div className="card-head">
                    <h3>Input</h3>
                </div>
                <div className="card-input-div">
                    <input type="text" onChange={updateOutputNumber} ref={inputRef} />
                </div>
                <div className="radbtns">
                    <input onChange={updateInpChoice} type="radio" className="card-btns" value="decimal" name="inp" defaultChecked /> decimal
                    <input onChange={updateInpChoice} type="radio" className="card-btns" value="binary" name="inp" /> binary
                    <input onChange={updateInpChoice} type="radio" className="card-btns" value="octal" name="inp" /> octal
                    <input onChange={updateInpChoice} type="radio" className="card-btns" value="hexadecimal" name="inp" /> hexadecimal
                </div>
            </div>
            <div className="card">
                <div className="card-head">
                    <h3>Output</h3>
                </div>
                <div className="card-input-div">
                <p type="number"><span>{checkNan(outputNumber)}</span></p>

                </div>
                {/* <p type="number">num: {number}</p> */}
                <div className="radbtns">
                    <input onChange={updateOutChoice} type="radio" className="card-btns" value="decimal" name="out" /> decimal
                    <input onChange={updateOutChoice} type="radio" className="card-btns" value="binary" name="out" defaultChecked /> binary
                    <input onChange={updateOutChoice} type="radio" className="card-btns" value="octal" name="out" /> octal
                    <input onChange={updateOutChoice} type="radio" className="card-btns" value="hexadecimal" name="out" /> hexadecimal
                </div>
            </div>
        </div>
    )
}

export default Converter;