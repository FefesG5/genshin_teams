import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import CharactersInfo from "./components/CharactersInfo";

function App() {
  // STATES
  // Buttons
  const [isHomeLinkActive, setIsHomeLinkActive] = React.useState(true);
  const [isCharacters, setIsCharactersActive] = React.useState(false);

  // Data
  const [characters, setCharacters] = useState([]);
  // ------------------------- //

  // USE EFFECTS

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://genshin-teams.onrender.com/characters"
        );
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.log("Error fetching characters:", error);
      }
    };
    fetchData();
  }, []);

  // ------------------------- //

  // HANDLE FUNCTIONS
  function handleHomeActive() {
    setIsHomeLinkActive((currentBoolean) => !currentBoolean);
    console.log(isHomeLinkActive);
  }
  // ------------------------- //
  return (
    <div className="App">
      <Header handleHomeActive={handleHomeActive} />
      {isHomeLinkActive ? (
        <Landing />
      ) : (
        <CharactersInfo characters={characters} />
      )}
    </div>
  );
}

export default App;
