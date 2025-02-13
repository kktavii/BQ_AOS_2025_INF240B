import { RootState } from "..";
import { ITask } from "../../types/tasks";

// Select all tasks
export const selectAllTasks = (state: RootState): ITask[] => state.tasks.tasks;

// Select task by id
export const selectTaskById = (
  state: RootState,
  taskId: string
): ITask | undefined => state.tasks.tasks.find((task) => task.id === taskId);

// Select completed tasks
export const selectCompletedTasks = (state: RootState): ITask[] =>
  state.tasks.tasks.filter((task) => task.completed);

// Select incomplete tasks
export const selectIncompleteTasks = (state: RootState): ITask[] =>
  state.tasks.tasks.filter((task) => !task.completed);

// Select tasks count
export const selectTasksCount = (state: RootState): number =>
  state.tasks.tasks.length;
