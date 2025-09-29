import taskList from "@/helpers/taskList";
import { task } from "@/types/types";

export const getAllTasks = async (): Promise<task[]> => {
  // const response = await fetch("http://localhost:3001/tasks");
  // if (!response.ok) {
  //   throw new Error("Failed to fetch tasks");
  // }
  // return response.json();
  return taskList;
};

export const getTaskById = async (id: string): Promise<task | undefined> => {
  return taskList.find((task) => task.id === id);
}