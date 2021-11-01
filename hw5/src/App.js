import Wrapper from "./components/wrapper";
import Screen from "./components/screen";
import ButtonBox from "./components/buttonBox";
import Button from "./components/button";
import React, { useState } from "react";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  const [num, setnum] = useState(0);
  const [signOn, setsignOn] = useState(false);
  const [process, setprocess] = useState("");

  const numClickHandler = (e) => {
    const value = e.target.innerHTML;
    setnum(num === 0 && value === "0"? "0" : num%1 === 0 ? Number(num + value) : num + value);
    setprocess(num === 0 && value === "0"? "0" : num%1 === 0 ? process+Number(value) : process + value);
    setsignOn(false);
  }
  
  const commaClickHandler = (e) => {
    const value = e.target.innerHTML;
    setnum(!num.toString().includes(".") ? num + value : num);
    setprocess(!num.toString().includes(".") && num != 0 ? process + "." : num == 0 ? process + "0." : process);
    setsignOn(false);
  }

  const signClickHandler = (e) => {
    const value = e.target.innerHTML;

    if(signOn === false){
      setprocess(process + value);
    }
    setsignOn(true);
    setnum(0);
  }

  const equalsClickHandler = (e) => {
    const value = e.target.innerHTML;

    if(signOn === false){
      setnum(eval(process));
      if(eval(process)%1 != 0){
        setnum(eval(process).toFixed(4));
      }
      setprocess(process + value);
    }
  }

  const resetClickHandler = (e) => {
    setnum(0);
    setsignOn(false);
    setprocess("");
  }

  const percentClickHandler = () => {
    setprocess(process + "*0.01");
    setnum(0);
  }

  return (
    <Wrapper>
      <Screen num = {num} process = {process}/>
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : `${btn === 0 ? "zero" : ""}`}
                value={btn}
                onClick={
                  btn === "%"?
                  percentClickHandler
                  : btn === "C"?
                  resetClickHandler
                  : btn === "="?
                  equalsClickHandler
                  : btn === "." ?
                  commaClickHandler
                  : btn === "/" || btn === "*" || btn === "-" || btn === "+" ?
                  signClickHandler
                  : numClickHandler
                }
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
};

export default App;