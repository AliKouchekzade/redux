import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "task 1", complete: false },
    { id: 2, title: "task 2", complete: true },
    { id: 3, title: "task 3", complete: false },
    { id: 4, title: "task 4", complete: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Math.random(), title: action.payload, complete: false });
    },
    deleteTodo: (state, action) => {
      state.splice(state.findIndex((todo) => todo.id === action.payload),1);
    },
    completeTodo: (state, action) => {
      const selected = state.find((todo) => todo.id === action.payload);
      selected.complete = !selected.complete;
    },
  },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
