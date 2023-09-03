import React from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";

function App() {
  const mainTitle = "Investment Calculator";
  return (
    <div className="container">
      <Header title={mainTitle} />
      <InvestmentForm />
    </div>
  );
}

export default App;
