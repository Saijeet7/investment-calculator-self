import React from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import Result from "./components/Result";

function App() {
  const mainTitle = "Investment Calculator";
  return (
    <div className="container">
      <Header title={mainTitle} />
      <InvestmentForm />
      <Result />
    </div>
  );
}

export default App;
