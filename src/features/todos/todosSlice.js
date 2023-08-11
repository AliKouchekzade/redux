import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    error: null,
    loading: true,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random(),
        title: action.payload,
        complete: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === action.payload),
        1
      );
    },
    completeTodo: (state, action) => {
      const selected = state.todos.find((todo) => todo.id === action.payload);
      selected.complete = !selected.complete;
    },
  },
  extraReducers: {
    [getAsyncTodos.pending]: (state, action) => {
      return { todos: [], loading: true, error: null };
    },
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { todos: action.payload, loading: false, error: null };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return { todos: [], loading: false, error: action.error.message };
    },
  },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
