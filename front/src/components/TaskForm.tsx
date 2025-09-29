"use client";
import { getTaskById } from "@/services/taskService";
import { FormTypeEnum, task } from "@/types/types";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";

interface TaskFormProps {
  type?: FormTypeEnum;
  taskId?: string;
}

export const TaskForm: React.FC<TaskFormProps> = ({ type, taskId }) => {
  const [values, setValues] = useState<task>({
    id: new Date().toISOString(),
    title: "",
    description: "",
    priority: "",
    status: "",
    estimate: 1,
    subtasks: [],
    creationDate: new Date(),
    lastUpdated: new Date(),
    estimates: { totalPending: 0, totalInProgress: 0, overallTotal: 0 },
  });

  const valuesUpdateHandler = async (id: string) => {
    const task = await getTaskById(id);
    if (task) setValues(task);
  };
  if (type === FormTypeEnum.UPDATE && taskId) valuesUpdateHandler(taskId);

  useEffect(() => {
    console.log(values);
  }, [values]);
  const { title, description, priority, status, estimate, subtasks } = values;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] space-y-8"
    >
      <div className="flex flex-nowrap rounded-md shadow-[0_0px_18px_-5px_#cacaca] px-1">
        <label htmlFor="title">Title -</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          required
          className="flex flex-1 pl-1 outline-none"
        />
      </div>
      <div className="flex flex-nowrap rounded-md shadow-[0_0px_18px_-5px_#cacaca] px-1">
        <label htmlFor="description">Description -</label>
        <textarea
          id="description"
          value={description}
          style={{ minHeight: "1.5rem", height: "1.5rem", overflow: "hidden" }}
          onChange={(e) => {
            setValues({ ...values, description: e.target.value });
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "1.5rem";
            target.style.height = target.scrollHeight + "px";
          }}
          required
          className="flex flex-1 pl-1 outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-nowrap rounded-md shadow-[0_0px_18px_-5px_#111214] dark:shadow-[0_0px_18px_-5px_#f3f3f3] px-1">
          <label htmlFor="priority">*Priority -</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setValues({ ...values, priority: e.target.value })}
            className="flex flex-1 outline-none"
          >
            <option className="text-dark-background dark:text-light-background dark:bg-[#1b1c1d]" value="Low">
              Low
            </option>
            <option className="text-dark-background dark:text-light-background dark:bg-[#1b1c1d]" value="Medium">
              Medium
            </option>
            <option className="text-dark-background dark:text-light-background dark:bg-[#1b1c1d]" value="High">
              High
            </option>
            <option className="text-dark-background dark:text-light-background dark:bg-[#1b1c1d]" value="Urgent">
              Urgent
            </option>
          </select>
        </div>
        <div className="flex flex-nowrap rounded-md shadow-[0_0px_18px_-5px_#111214] dark:shadow-[0_0px_18px_-5px_#f3f3f3] px-1">
          <label htmlFor="status">Status -</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setValues({ ...values, status: e.target.value })}
            className="flex flex-1 outline-none"
          >
            <option className="text-dark-background dark:text-light-background dark:bg-[#1b1c1d]" value="Backlog">
              Backlog
            </option>
            <option className="text-dark-background dark:text-light-background dark:bg-[#1b1c1d]" value="Unstarted">
              Unstarted
            </option>
            <option className="text-dark-background dark:text-light-background dark:bg-[#1b1c1d]" value="Started">
              Started
            </option>
            <option className="text-dark-background dark:text-light-background dark:bg-[#1b1c1d]" value="Completed">
              Completed
            </option>
            <option className="text-dark-background dark:text-light-background dark:bg-[#1b1c1d]" value="Canceled">
              Canceled
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-nowrap rounded-md shadow-[0_0px_18px_-5px_#cacaca] px-1">
        <label htmlFor="estimate">*Estimate value - $</label>
        <input
          type="number"
          id="estimate"
          value={estimate}
          onChange={(e) => setValues({ ...values, estimate: Number(e.target.value) })}
          required
          className="flex flex-1 pl-0.5 outline-none"
        />
      </div>
      <div className="flex flex-nowrap rounded-md shadow-[0_0px_18px_-5px_#cacaca] px-1">
        <label htmlFor="subtasks">Subtasks -</label>
        <Link href={""}>
          Add subtask
        </Link>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
