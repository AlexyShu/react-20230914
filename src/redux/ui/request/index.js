import { REQUEST_STATUS } from '../../../constants/statuses.js';
import { createSlice } from '@reduxjs/toolkit';

const { reducer } = createSlice({
    name: 'request',
    initialState: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state, { meta }) => {
                    state[meta.requestId] = {
                        status: REQUEST_STATUS.loading,
                    };
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/fulfilled'),
                (state, { meta }) => {
                    state[meta.requestId] = {
                        status: REQUEST_STATUS.finished,
                    };
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, { meta, error }) => {
                    state[meta.requestId] = {
                        status: REQUEST_STATUS.failed,
                        error,
                    };
                }
            ),
});

export default reducer;