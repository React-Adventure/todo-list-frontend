import { IToDo } from "./interfaces";

export type TodoListProps = {
  todos: IToDo[],
  onToggle(id: number): void,
  onRemove: (id: number) => void
};

export type TPriority = {
  id: number,
  name: string,
  color: string,
}