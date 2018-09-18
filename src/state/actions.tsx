import { createAction } from 'typesafe-actions';

export const addTodo = createAction("@todo/ADD_TODO", resolve => {
  return (text: string) => resolve(text)
})

export const toggleTodo = createAction("@todo/TOGGLE_TODO", resolve => {
  return (id: number) => resolve(id)
})
