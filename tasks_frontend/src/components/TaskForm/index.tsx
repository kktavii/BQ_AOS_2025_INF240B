import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addTask } from "../../store/tasks/tasksSlice";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleCreateTask = () => {
    if (taskTitle.trim() === "") return;
    dispatch(addTask({ id: uuidv4(), title: taskTitle, completed: false }));
    setTaskTitle("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCreateTask();
    }
  };

  return (
    <div className="task-form-container">
      <div className="header">
        <img src="/tasks-logo.svg" alt="Tasks Logo" width={40} />
        <h1>Tarefas</h1>
      </div>
      <h2>Crie uma nova tarefa</h2>
      <div className="task-form">
        <input
          type="text"
          className="task-input"
          placeholder="Digite a tarefa"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="add-task-button" onClick={handleCreateTask}>
          Criar
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
