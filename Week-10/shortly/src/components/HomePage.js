import React, { useState } from "react";
import Shortner from "./Shortner";
import DisplayResult from "./DisplayResult";

function HomePage() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <Shortner setInputValue={setInputValue} />
      <DisplayResult inputValue={inputValue} />
    </div>
  );
}
export default HomePage;
