import { useState } from "react";
import "./App.css";

function App() {

  // state variable to keep track of user input
  const [userInput, setUserInput] = useState("");

  // function to handle user input. 
  // We will only accept alphabets.
  // any lower case alphabet will be converted into upper case
  const userInputHandler = (e) => {
    let char = e.target.value;
    let upperCaseChar = char.toUpperCase();
    let charIndex = upperCaseChar.charCodeAt() - 64;
    if (
      (userInput.length === 0 && charIndex < 27 && charIndex > 0) ||
      e.target.value === ""
    ) {
      setUserInput(upperCaseChar);
    }
  };

  // Create spaces
  const spaceCreator = (num) => {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: new Array(num).fill("&nbsp;").join(""),
        }}
      />
    );
  };

  // function to create row for Diamond pattern based on the current index
  const rowCreator = (index) => {
    let charIndexReference = userInput.charCodeAt() - 65;
    let spaceBeforeFirstCharacter = charIndexReference - index;

    // There should be no space if entered alphabet is 'A'
    if (index === 0) {
      return <p>{spaceCreator(spaceBeforeFirstCharacter)}A</p>;
    } else {
      let spaceAfterFirstCharacter = index + index - 1;
      let currentChar = String.fromCharCode(index + 65);
      return (
        <p>
          {spaceCreator(spaceBeforeFirstCharacter)}
          {currentChar}
          {spaceCreator(spaceAfterFirstCharacter)}
          {currentChar}
        </p>
      );
    }
  };

  const diamondUpperPart = [
    ...new Array(userInput ? userInput.charCodeAt() - 64 : 0),
  ];

  const diamondLowerPart = [
    ...new Array(userInput ? userInput.charCodeAt() - 65 : 0),
  ];

  return (
    <div className="App">
      <h1 className="title">Diamond Kata</h1>
      <div className="userInputContainer">
        <label htmlFor="userInput">Enter an alphabet : </label>
        <input id="userInput" value={userInput} onChange={userInputHandler} />
      </div>
      <div className="diamondContainer">
        {userInput && diamondUpperPart.map((value, index) => rowCreator(index))}
        {userInput &&
          diamondLowerPart.map((value, index) =>
            rowCreator(diamondLowerPart.length - 1 - index)
          )}
      </div>
    </div>
  );
}

export default App;
