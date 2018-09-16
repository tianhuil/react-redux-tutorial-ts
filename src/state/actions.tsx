import { createAction } from 'typesafe-actions';
import { Filter } from './'


export const addTodo = createAction("@todo/ADD_TODO", resolve => {
  return (text: string) => resolve(text)
})

export const toggleTodo = createAction("@todo/TOGGLE_TODO", resolve => {
  return (id: number) => resolve(id)
})

export const setFilter = createAction("@todo/SET_FILTER", resolve => {
  return (filter: Filter) => resolve(filter)
})
