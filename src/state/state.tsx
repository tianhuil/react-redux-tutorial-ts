export enum Filter {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
};

export type State =  Readonly<{
  filter: Filter;
  todos: ReadonlyArray<Todo>;
}>;

export type Todo =  Readonly<{
  id: number;
  text: string;
  completed: boolean;
}>;
