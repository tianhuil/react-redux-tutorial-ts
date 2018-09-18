export enum Filter {
  SHOW_ALL        = "all",
  SHOW_COMPLETED  = "completed",
  SHOW_INCOMPLETE = "incomplete",
}

export type Todo = Readonly<{
  id: number;
  text: string;
  completed: boolean;
}>
