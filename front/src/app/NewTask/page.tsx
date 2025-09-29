import Image from "next/image";
import light_a from "@/../public/light_a.png";
import dark_a from "@/../public/dark_a.png";
import light_b from "@/../public/light_b.png";
import dark_b from "@/../public/dark_b.png";
import TaskForm from "@/components/TaskForm";
import { FormTypeEnum } from "@/types/types";

export const NewTask = ({ searchParams }: { searchParams: { type?: FormTypeEnum, id?: string } }) => {
  const type = searchParams.type || FormTypeEnum.CREATE;
  let title = "Add new tasks to the log";
  if (type === FormTypeEnum.UPDATE) title = "Update task";
  if (type === FormTypeEnum.SUB_TASK) title = "Add a subtask to the main task";

  const id = searchParams.id

  return (
    <div className="bg-linear-to-t from-[#cacaca] to-white text-shadow-xs dark:from-[#0b0c0e] dark:via-dark-background dark:to-[#1b1c1d] h-full w-full p-[4%] flex flex-col items-center">
      <div className="relative h-[3vh] dark:h-[3.6vh] w-full">
        <Image
          src={light_a}
          alt="Light Mode Image 1"
          fill
          style={{ objectFit: "contain" }}
          className="hidden dark:block"
          priority
          unoptimized
        />
        <Image
          src={dark_a}
          alt="Dark Mode Image 1"
          fill
          style={{ objectFit: "contain" }}
          className="dark:hidden"
          priority
          unoptimized
        />
      </div>
      <h1 className="text-2xl font-bold mb-1 text-center">{title}</h1>
      <div className="relative h-[7vh] w-full">
        <Image
          src={light_b}
          alt="Light Mode Image 2"
          fill
          style={{ objectFit: "contain" }}
          className="hidden dark:block"
          priority
          unoptimized
        />
        <Image
          src={dark_b}
          alt="Dark Mode Image 2"
          fill
          style={{ objectFit: "contain" }}
          className="dark:hidden"
          priority
          unoptimized
        />
      </div>
      <p className="mt-2 mb-3">the * indicates an optional field</p>
      <TaskForm type={type as FormTypeEnum} taskId={id} />
    </div>
  );
}

export default NewTask;
