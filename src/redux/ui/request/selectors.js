import { REQUEST_STATUS } from '../../../constants/statuses.js';

export const selectRequestModule = (state) => state.request;

export const selectRequestStatus = (state, requestId) =>
    selectRequestModule(state)[requestId]?.status || REQUEST_STATUS.idle;