export enum FormTypeEnum {
  CREATE = "create",
  UPDATE = "update",
  SUB_TASK = "subTask",
}

export type task = {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  estimate: number;
  subtasks: task[];
  creationDate: Date;
  lastUpdated: Date;
  estimates: {
    totalPending: number;
    totalInProgress: number;
    overallTotal: number;
  };
};

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
