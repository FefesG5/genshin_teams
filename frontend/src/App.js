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
  const [charactersImages, setCharactersImages] = useState([]);
  const [charactersDetails, setCharactersDetails] = useState([]);
  // ------------------------- //

  // USE EFFECTS
  // GET main_url images
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://genshin-teams.onrender.com/main_images/characters"
        );
        const data = await response.json();
        setCharactersImages(data);
      } catch (error) {
        console.log("Error fetching characters:", error);
      }
    };
    fetchData();
  }, []);

  // GET characters details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://genshin-teams.onrender.com/characters"
        );
        const data = await response.json();
        setCharactersDetails(data);
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
        <CharactersInfo
          charactersImages={charactersImages}
          charactersDetails={charactersDetails}
        />
      )}
    </div>
  );
}

export default App;
