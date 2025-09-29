import { task } from "@/types/types";

export const taskList: task[] = [
  {
    id: "1",
    title: "Design homepage",
    description: "Create a modern and responsive design for the homepage.",
    priority: "High",
    status: "Started",
    estimate: 8,
    creationDate: new Date("2024-10-01T10:00:00Z"),
    lastUpdated: new Date("2024-10-02T12:00:00Z"),
    subtasks: [],
    estimates: {
      totalPending: 0,
      totalInProgress: 8,
      overallTotal: 8,
    },
  },
  {
    id: "2",
    title: "Implement authentication",
    description: "Set up user login and registration functionality.",
    priority: "High",
    status: "In Progress",
    estimate: 5,
    creationDate: new Date("2024-10-02T10:00:00Z"),
    lastUpdated: new Date("2024-10-03T14:00:00Z"),
    subtasks: [],
    estimates: {
      totalPending: 0,
      totalInProgress: 5,
      overallTotal: 5,
    },
  },
  {
    id: "3",
    title: "Database schema design",
    description: "Design the database schema for the application.",
    priority: "Medium",
    status: "Not Started",
    estimate: 3,
    creationDate: new Date("2024-10-03T10:00:00Z"),
    lastUpdated: new Date("2024-10-06T10:00:00Z"),
    subtasks: [
      {
        id: "3.1",
        title: "Define user table",
        description: "Create the user table with necessary fields.",
        priority: "Medium",
        status: "Not Started",
        estimate: 1,
        creationDate: new Date("2024-10-03T11:00:00Z"),
        lastUpdated: new Date("2024-10-06T10:00:00Z"),
        subtasks: [],
        estimates: {
          totalPending: 1,
          totalInProgress: 0,
          overallTotal: 1,
        },
      },
    ],
    estimates: {
      totalPending: 3,
      totalInProgress: 0,
      overallTotal: 3,
    },
  },
];

export default taskList;

// ### Main View

// - **Create task**: users can add new tasks
// - **Task list**: display existing tasks with:
//     - ID
//     - Title
//     - Status
//     - Priority
//     - Estimate
//     - Creation date
//     - Details button: opens the **Task Details View**

// ### Task Details View

// - **Task operations**: allow users to update or delete the task
// - **Task information**: each task should include:
//     - Unique ID
//     - Title
//     - Description
//     - Priority level (optional field): one of the following – *Low*, *Medium*, *High*, *Urgent*
//     - Status: one of the following – *Backlog*, *Unstarted*, *Started*, *Completed*, *Canceled*
//     - Estimate value (optional field): a non-negative number
//     - Subtasks (0, 1 or many): a list of additional tasks (note: it can be multilevel)
//     - Estimates:
//         - total estimate for subtasks in pending states (*Backlog* and *Unstarted*)
//         - total estimate for subtasks in progress (*Started*)
//         - overall total estimate (regardless of state)
//     - Dates: creation and last updated timestamps
