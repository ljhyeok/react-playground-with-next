import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoState {
  todoList: Array<string>
}

const initialState = {
  todoList: []
} as TodoState

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoList: (state, action: PayloadAction<string>) => {
      state.todoList.push(action.payload)
    },
    removeTodoList: (state) => {
      state.todoList.pop()
    },
  }
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;

export type TodoSlice = {
  [todoSlice.name]: ReturnType<typeof todoSlice['reducer']>
}