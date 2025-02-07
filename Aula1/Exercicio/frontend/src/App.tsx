import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = "http://localhost:3000";

  const getTasks = async () => {
    console.log("hey");
    const response = await fetch(`${baseUrl}/tarefas`);
    const tasks = await response.json();
    setTasks(tasks);
    setIsLoading(false);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="container">
      <h1>Tarefas</h1>
      {isLoading ? (
        <h2>Carregando...</h2>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
