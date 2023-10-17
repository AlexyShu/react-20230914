import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishIds} from '../selector.js';

export const getDishes = createAsyncThunk(
    'dishes/getDishes',
    async () => {
        const response = fetch('http://localhost:3001/api/dishes');

        return (await response).json();
    },
    {
        condition: (_, { getState }) => !selectDishIds(getState())?.length,
    }
);