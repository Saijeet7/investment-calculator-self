import React from "react";
import Header from "./components/Header";

function App() {
  const mainTitle = "Investment Calculator";
  return (
    <div className="container">
      <Header title={mainTitle} />
    </div>
  );
}

export default App;
