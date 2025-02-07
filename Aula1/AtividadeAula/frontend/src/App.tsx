import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [curiosity, setCuriosity] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = "https://aos-ff3x--3000--d20a0a75.local-credentialless.webcontainer.io"

  const getCuriosity = async () => {
    const response = await fetch(`${baseUrl}/curiosidades`);
    const text = await response.text();
    setCuriosity(text);
    setIsLoading(false);
  };

  useEffect(() => {
    getCuriosity();
  }, []);

  const handleButtonClick = () => {
    getCuriosity();
  };

  return (
    <div className="container">
      <h1>Curiosidades sobre a computação</h1>
      <h2>{isLoading ? "Carregando..." : curiosity}</h2>
      <button onClick={handleButtonClick}>Gerar curiosidade</button>
    </div>
  );
}

export default App;
