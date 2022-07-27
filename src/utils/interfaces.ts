export interface IToDo {
  id: number,
  title: string,
  descr?: string,
  completed: boolean,
  groupID?: number,
  priority?: number,
  creationDate?: Date,
  deadline?: Date,
};