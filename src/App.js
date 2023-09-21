import React, { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import Result from "./components/Result";

function App() {
  const [inputValue, setInputValue] = useState(null);

  const calculateHandler = (inputValue) => {
    setInputValue(inputValue);
  };

  const yearlyData = [];
  if (inputValue) {
    let currentSavings = inputValue["current"];
    const yearlyContribution = inputValue["yearly"];
    const expectedReturn = inputValue["expected"] / 100;
    const duration = inputValue["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  const mainTitle = "Investment Calculator";
  return (
    <div className="container">
      <Header title={mainTitle} />
      <InvestmentForm onCalculate={calculateHandler} />
      {!inputValue && <p>No Investment Calculated</p>}
      {inputValue && <Result result={yearlyData} />}
    </div>
  );
}

export default App;
