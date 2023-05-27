import React from "react";
import Header from "./components/Header";

function App() {
  // STATES
  const [isHomeActive, setIsHomeActive] = React.useState(true);
  // ------------------------- //

  // USE EFFECTS

  // ------------------------- //

  // HANDLE FUNCTIONS
  function handleHomeActive() {
    setIsHomeActive((currentBoolean) => !currentBoolean);
    console.log(isHomeActive);
  }
  // ------------------------- //
  return (
    <div className="App">
      <Header handleHomeActive={handleHomeActive} />
      {isHomeActive ? "Hello" : "Not Hello"}
    </div>
  );
}

export default App;
