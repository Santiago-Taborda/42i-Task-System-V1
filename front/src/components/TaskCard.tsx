import { task } from "@/types/types";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MouseEvent } from "react";

const taskCard = ({ task }: { task: task }) => {
  const { id, title, status, priority, estimate, creationDate } = task;

  return (
    <div>
      <h2>{title}</h2>
      <span>Status: {status}</span>
      <span>Priority: {priority}</span>
      <span>Estimate: {estimate}</span>
      <span>Created on: {creationDate.toDateString()}</span>
      <Link href={`/${id}`}>Details</Link>
    </div>
  );
};

export default taskCard;
