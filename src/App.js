import React, { useState } from "react";
function App() {
  const [typedNum, setTypedNum] = useState("");
  const [result, setResult] = useState(null);

  const operations = ["/", "*", "+", "-", "."];

  const handleClick = (value) => {
    if (
      (operations.includes(value) && typedNum === "") ||
      (operations.includes(value) && operations.includes(typedNum.slice(-1)))
    ) {
      return;
    }
    setTypedNum(typedNum + value);

    if (!operations.includes(value)) {
      setResult(eval(typedNum + value).toString());
    }
  };

  const handleDelete = () => {
    const value = typedNum.slice(0, -1);
    setTypedNum(value);
  };

  return (
    <div className="App">
      <div className="calc-container">
        <div className="calc">
          <div className="calc-display">
            {typedNum ? <p>{typedNum}</p> : <p>0</p>}
            {result ? <p>{result}</p> : <p>0</p>}
          </div>
          <div className="calc-body">
            <div className="calc-row">
              <button onClick={() => handleClick("1")}>1</button>
              <button onClick={() => handleClick("2")}>2</button>
              <button onClick={() => handleClick("3")}>3</button>
              <button
                onClick={() => handleClick("/")}
                style={{ backgroundColor: "#cf9fff" }}
              >
                /
              </button>
            </div>
            <div className="calc-row">
              <button onClick={() => handleClick("4")}>4</button>
              <button onClick={() => handleClick("5")}>5</button>
              <button onClick={() => handleClick("6")}>6</button>
              <button
                onClick={() => handleClick("*")}
                style={{ backgroundColor: "#cf9fff" }}
              >
                *
              </button>
            </div>
            <div className="calc-row">
              <button onClick={() => handleClick("7")}>7</button>
              <button onClick={() => handleClick("8")}>8</button>
              <button onClick={() => handleClick("9")}>9</button>
              <button
                onClick={() => handleClick("+")}
                style={{ backgroundColor: "#cf9fff" }}
              >
                +
              </button>
            </div>
            <div className="calc-row">
              <button onClick={() => handleClick(".")}>.</button>
              <button onClick={() => handleClick("0")}>0</button>
              <button
                onClick={() => handleDelete()}
                style={{ backgroundColor: "#cf9fff" }}
              >
                DEL
              </button>
              <button
                onClick={() => handleClick("-")}
                style={{ backgroundColor: "#cf9fff" }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
