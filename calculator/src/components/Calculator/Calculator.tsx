import React, { useState } from "react";
import "./Calculator.css";
import Footer from "../Footer/Footer";
import Display from "../Display";
import Button from "../Button";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>(""); // Current input
  const [previousInput, setPreviousInput] = useState<string>(""); // Previous input (old value)
  const [lastResult, setLastResult] = useState<string>(""); // Last result for the ANS button
  
  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      const result = eval(input).toString(); 
      setPreviousInput(input); 
      setInput(result); 
      setLastResult(result);
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    { label: "C", action: clearInput },
    { label: "DEL", action: () => setInput(input.slice(0, -1)) },
    { label: "Ans", action: () => setInput(input + lastResult) },
    { label: "÷", action: () => handleClick("/") },
    { label: "7", action: () => handleClick("7") },
    { label: "8", action: () => handleClick("8") },
    { label: "9", action: () => handleClick("9") },
    { label: "×", action: () => handleClick("*") },
    { label: "4", action: () => handleClick("4") },
    { label: "5", action: () => handleClick("5") },
    { label: "6", action: () => handleClick("6") },
    { label: "+", action: () => handleClick("+") },
    { label: "1", action: () => handleClick("1") },
    { label: "2", action: () => handleClick("2") },
    { label: "3", action: () => handleClick("3") },
    { label: "−", action: () => handleClick("-") },
    { label: "0", action: () => handleClick("0") },
    { label: ".", action: () => handleClick(".") },
    { label: "=", action: calculate },
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Display value={input} previousInput={previousInput}/>
        <div className="buttons">
        {buttons.map((button, index) => (
            <Button
              key={index}
              number={button.label}
              onClick={button.action}
              className={
                button.label === "C" || button.label === "DEL" || button.label === "Ans"
                  ? "special-btn"
                  : button.label === "="
                  ? "equals-btn"
                  : button.label === "÷" || button.label === "×" || button.label === "+" || button.label === "−"
                  ? "operator-btn"
                  : ""
              }
            />
          ))}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calculator;
