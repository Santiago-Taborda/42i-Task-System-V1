import Image from "next/image";
import light_a from "../../public/light_a.png";
import dark_a from "../../public/dark_a.png";
import light_b from "../../public/light_b.png";
import dark_b from "../../public/dark_b.png";
import TaskCard from "@/components/TaskCard";
import { getAllTasks } from "@/services/taskService";
import Link from "next/link";

export default async function Home() {
  const taskList = await getAllTasks();

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
      <h1 className="text-4xl font-bold mb-1 text-center">Task Manager</h1>
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
      <Link href={"/NewTask?type=create"}>
        <button>Add new tasks</button>
      </Link>
      <p className="mt-2 mb-3">Task list</p>
      <div>
        {taskList.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}

// Desarrollar una aplicación web para gestionar tareas con las siguientes características y estructura:

// # Resumen de la arquitectura

// ## Front-End

// ### Vista principal

// - **Crear tarea**: los usuarios pueden añadir nuevas tareas
// - **Lista de tareas**: muestra las tareas existentes con:
// - ID
// - Título
// - Estado
// - Prioridad
// - Estimación
// - Fecha de creación
// - Botón Detalles: abre la **Vista de detalles de la tarea**

// ### Vista de detalles de la tarea

// - **Operaciones de la tarea**: permite a los usuarios actualizar o eliminar la tarea
// - **Información de la tarea**: cada tarea debe incluir:
// - ID único
// - Título
// - Descripción
// - Nivel de prioridad (campo opcional): uno de los siguientes: *Bajo*, *Media*, *Alto*, *Urgente*
// - Estado: uno de los siguientes: *Atrasado*, *Sin iniciar*, *Iniciado*, *Completado*, *Cancelado*
// - Valor estimado (campo opcional): un número positivo
// - Subtareas (0, 1 o varias): una lista de Tareas adicionales (nota: puede ser multinivel)
// - Estimaciones:
// - Estimación total de subtareas pendientes (*Atrasadas* y *Sin iniciar*)
// - Estimación total de subtareas en curso (*Iniciadas*)
// - Estimación total general (independientemente del estado)
// - Fechas: marcas de tiempo de creación y última actualización

// ## Back-End

// - **API**: proporcionar una API CRUD para las tareas
// - **Pruebas**: implementar pruebas unitarias para validar la lógica de negocio

// # Requisitos adicionales

// - **Léame**: incluir un archivo Léame con instrucciones sobre cómo ejecutar la aplicación y probarla

// # Aconsejable

// - **Contenedorización**: empaquetar la aplicación utilizando contenedores (p. ej., Docker, Podman, etc.)
// - **Herramientas de calidad de código**: integrar un linter y un formateador de código
// - **Diseño responsivo**: garantizar que la aplicación funcione correctamente en todos los dispositivos
// - **Paginación, ordenación y filtrado**: implementar estas funciones tanto en el front-end como en Back-end

// # Notas

// - Utilice cualquier lenguaje de programación y framework de su elección.
// - Utilice cualquier tipo de persistencia (p. ej., en memoria, base de datos, etc.).
// - Siéntase libre de usar una plantilla o su propio diseño.
