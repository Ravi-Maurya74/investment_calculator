import { useState } from "react";
import Header from "./compoents/Header";
import UserInput from "./compoents/UserInput";
import Results from "./compoents/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...userInput, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a valid duration (in years)</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
