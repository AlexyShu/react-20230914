import { createAsyncThunk } from '@reduxjs/toolkit';
import {selectReviewIds} from '../selector.js';

export const getReviews = createAsyncThunk(
    'reviews/getReviews',
    async () => {
        const response = fetch('http://localhost:3001/api/reviews/');

        return (await response).json();
    },
    {
        condition: (_, { getState }) => !selectReviewIds(getState())?.length,
    }
);