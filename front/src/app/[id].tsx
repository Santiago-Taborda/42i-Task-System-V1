import { getTaskById } from "@/services/taskService";

export default async function taskId({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const task = await getTaskById(id);
  const { title, description, priority, status, estimate, subtasks } = task || {};

  return (
    <div className="mx-[4%] xl:mt-[5vh] 2xl:mt-[10vh]">
      {!task ? (
        <h2 className="w-full pt-[20vh] text-center">Error | Task not found</h2>
      ) : (
        <div className="flex justify-center items-center">
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
}
