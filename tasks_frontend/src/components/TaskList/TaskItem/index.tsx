import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectTaskById } from "../../../store/tasks/taskSelectors";
import type { RootState } from "../../../store";
import {
  toggleTaskCompleted,
  deleteTask,
  updateTask,
} from "../../../store/tasks/tasksSlice";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";

interface TaskItemProps {
  taskId: string;
}

const TaskItem = ({ taskId }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const task = useAppSelector((state: RootState) =>
    selectTaskById(state, taskId)
  );

  useEffect(() => {
    setEditedTitle(task?.title || "");
  }, [task]);

  const dispatch = useAppDispatch();

  const handleToggleCompleted = () => {
    dispatch(toggleTaskCompleted(taskId));
  };

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(
        updateTask({
          id: taskId,
          title: editedTitle,
          completed: task?.completed || false,
        })
      );
    }
    setIsEditing((prev) => !prev);
  };

  return (
    <li className="task-item">
      <div className="task-item-content">
        <input
          type="checkbox"
          checked={task?.completed || false}
          onChange={handleToggleCompleted}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          task?.title
        )}
      </div>
      <div className="task-item-actions">
        <button className="action-button edit-button" onClick={handleEdit}>
          {isEditing ? (
            <FontAwesomeIcon icon={faSave} color="white" />
          ) : (
            <FontAwesomeIcon icon={faEdit} color="white" />
          )}
        </button>
        <button className="action-button delete-button" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} color="white" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
