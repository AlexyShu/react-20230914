import { createAsyncThunk } from '@reduxjs/toolkit';
import {selectUserIds} from '../selector.js';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const response = fetch('http://localhost:3001/api/users/');

        return (await response).json();
    },
    {
        condition: (_, { getState }) => !selectUserIds(getState())?.length,
    }
);