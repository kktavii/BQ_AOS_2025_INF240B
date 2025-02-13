import TaskItem from "./TaskItem";
import { useAppSelector } from "../../store/hooks";
import { selectAllTasks } from "../../store/tasks/taskSelectors";
import "./styles.css";

const TaskList = () => {
  const tarefas = useAppSelector(selectAllTasks);
  return (
    <div className="task-list">
      <h2>Lista de tarefas</h2>
      <ul className="task-list-items">
        {tarefas.map((tarefa) => (
          <TaskItem key={tarefa.id} taskId={tarefa.id} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
