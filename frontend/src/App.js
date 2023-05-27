import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import CharactersInfo from "./components/CharactersInfo";

function App() {
  // STATES
  // Buttons

  // Data
  const [charactersImages, setCharactersImages] = useState([]);
  const [charactersDetails, setCharactersDetails] = useState([]);

  const [currentPage, setCurrentPage] = useState("HOME");
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
    setCurrentPage("HOME");
  }

  function handleLoginActive() {
    setCurrentPage("LOGIN");
  }

  function handleCharactersActive() {
    setCurrentPage("CHARACTERS");
  }
  // ------------------------- //

  // ------------------------- //
  return (
    <div className="App">
      <Header
        handleHomeActive={handleHomeActive}
        handleLoginActive={handleLoginActive}
        handleCharactersActive={handleCharactersActive}
      />
      {currentPage === "HOME" && <Landing />}
      {currentPage === "CHARACTERS" && (
        <CharactersInfo
          charactersImages={charactersImages}
          charactersDetails={charactersDetails}
        />
      )}
      {currentPage === "LOGIN" && "Login"}
    </div>
  );
  // <div className="App">
  //   <Header
  //     handleHomeActive={handleHomeActive}
  //     handleLoginClick={handleLoginClick}
  //   />
  //   {true ? (
  //     <Landing />
  //   ) : (
  //     <CharactersInfo
  //       charactersImages={charactersImages}
  //       charactersDetails={charactersDetails}
  //     />
  //   )}
  // </div>
}

export default App;
