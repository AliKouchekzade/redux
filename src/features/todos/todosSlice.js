import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue( error);
    }
  }
);

export const addAsyncTodo = createAsyncThunk(
  "todos/addAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3001/todos", {
        title: payload,
        complete: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const toggleAsyncTodo = createAsyncThunk(
  "todos/toggleAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/todos/${payload.id}`,
        {
          ...payload,
          complete: !payload.complete,
        }
      );
      return response.data.id;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const deleteAsyncTodo = createAsyncThunk(
  "todos/deleteAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
        await axios.delete(
        `http://localhost:3001/todos/${payload}`
      );
      return payload;
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
      return { todos: [], loading: false, error: action.payload.message };
    },
    [addAsyncTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload)
    },
    [toggleAsyncTodo.fulfilled]: (state, action) => {
      const selected = state.todos.find((todo) => todo.id === action.payload);
      selected.complete = !selected.complete;
    },
    [deleteAsyncTodo.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === action.payload),
        1
      );
    },
  },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
