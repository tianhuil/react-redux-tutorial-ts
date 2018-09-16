import { action } from 'typesafe-actions';
import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from './constants'
import { Filter } from './state'

export const addTodo = (text: string) => action(ADD_TODO, text)

export const toggleTodo = (id: number) => action(TOGGLE_TODO, id)

export const setFilter = (filter: Filter) => action(SET_FILTER, filter)
