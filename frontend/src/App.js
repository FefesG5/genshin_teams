import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import CharactersInfo from "./components/CharactersInfo";
import Authentication from "./components/Authentication";
import Team from "./components/Team";

function App() {
  // STATES

  // Characters Data
  const [charactersImages, setCharactersImages] = useState([]);
  const [charactersIcons, setCharactersIcons] = useState([]);
  const [charactersDetails, setCharactersDetails] = useState([]);

  // User Data
  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [currentPage, setCurrentPage] = useState("HOME");

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

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

  // GET icon_url images
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://genshin-teams.onrender.com/icon_images/characters"
        );
        const data = await response.json();
        setCharactersIcons(data);
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

  function handleTeamActive() {
    setCurrentPage("TEAM");
  }

  function handleRegistration(event) {
    const { name, value, type, checked } = event.target;
    setRegistrationData((previousRegistrationData) => ({
      ...previousRegistrationData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleLogin(event) {
    const { name, value } = event.target;
    setLoginData((previousLoginData) => ({
      ...previousLoginData,
      [name]: value,
    }));
  }

  // Simple Login State Switch
  // const handleSubmitLogin = async (event) => {
  //   event.preventDefault();
  //   if (
  //     registrationData.username === "" ||
  //     registrationData.password.length < 4 ||
  //     registrationData.email === ""
  //   ) {
  //     console.log("Invalid Input(s)");
  //     return;
  //   }
  //   try {
  //     const response = await fetch("https://genshin-teams.onrender.com/login", {
  //       method: "POST",
  //       header: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: loginData.username,
  //         password: loginData.password,
  //       }),
  //     });
  //     if (response.ok) {
  //       console.log("Login successful");
  //       setIsUserAuthenticated(true);
  //       setLoginData({
  //         username: "",
  //         password: "",
  //       });
  //     } else {
  //       console.error("Login failed");
  //     }
  //   } catch (error) {
  //     console.error("Error in the client: ", error);
  //   }
  // };

  const handleSubmitRegistration = async (event) => {
    event.preventDefault();
    if (
      registrationData.username === "" ||
      registrationData.password.length < 4 ||
      registrationData.email === ""
    ) {
      console.log("Invalid Input(s)");
      return;
    }
    if (registrationData.password === registrationData.confirmPassword) {
      console.log("Passwords matched. Registration will complete shortly");

      // Send Data to Backend
      try {
        setRegistrationData({
          username: registrationData.username,
          email: registrationData.email,
          password: registrationData.password,
        });
        const response = await fetch(
          "https://genshin-teams.onrender.com/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationData),
          }
        );
        if (response.ok) {
          // User registration successful
          console.log("User Registered sucessfully!");

          // Reset the form fields
          setRegistrationData((prevValue) => {
            return {
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            };
          });
        } else {
          console.error("User registration failed! Error2");
        }
      } catch (error) {
        console.error("Error1 registering user: ", error);
      }
    } else if (registrationData.password !== registrationData.confirmPassword) {
      console.log("Passwords do not match. Registration failed!");
    }
  };
  // ------------------------- //
  return (
    <div className="App">
      <Header
        handleHomeActive={handleHomeActive}
        handleLoginActive={handleLoginActive}
        handleCharactersActive={handleCharactersActive}
        handleTeamActive={handleTeamActive}
      />
      {currentPage === "HOME" && <Landing />}
      {currentPage === "CHARACTERS" && (
        <CharactersInfo
          charactersImages={charactersImages}
          charactersDetails={charactersDetails}
        />
      )}
      {currentPage === "TEAM" && (
        <Team
          charactersIcons={charactersIcons}
          charactersDetails={charactersDetails}
        />
      )}
      {currentPage === "LOGIN" && (
        <Authentication
          handleRegistration={handleRegistration}
          registrationData={registrationData}
          handleSubmitRegistration={handleSubmitRegistration}
          handleLogin={handleLogin}
          loginData={loginData}
          isUserAuthenticated={isUserAuthenticated}
        />
      )}
    </div>
  );
}

export default App;
