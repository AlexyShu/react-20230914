import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {getRestaurants} from './thunks/get-restaurants.js';

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            })
});

export default reducer;