import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8080';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsersAll',
  async (_, { rejectWithValue }) => {
    try {
      // const response = await userAPI.fetchById(userId);
      const { data } = await axios.get('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      // const response = await userAPI.fetchById(userId);
      await axios.delete(`/users/${id}`, {
        headers: {
          authorization: 'admin',
        },
      });

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users`, user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'users/editUser',
  async (user, { rejectWithValue }) => {
    try {
      await axios.put(`/users/${user.id}`, user);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
