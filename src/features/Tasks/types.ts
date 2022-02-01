export type TaskDocumentType = {
  authorId: string | undefined;
  title: string;
};

export type TaskPatchRequestType = TaskDocumentType & {
  id: string | undefined;
};

export type TaskDeleteRequestType = {
  authorId: string | undefined;
  taskId: string;
};

export type TaskType = {
  id: string;
  document: TaskDocumentType;
};

export type TaskStateType = {
  apiRequestInProgress: boolean;
  tasksList: TaskType[];
};
