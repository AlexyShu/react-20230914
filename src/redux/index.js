import { configureStore } from '@reduxjs/toolkit';
import restaurant from './entities/restaurant';
import dish from './entities/dish';
import review from './entities/review/index.js';
import user from './entities/user';
import request from './ui/request';
import cart from './ui/cart';
import {loggerMiddleware} from './middlewares/logger.js';

const store = configureStore({
    reducer: {
        restaurant,
        dish,
        review,
        user,
        request,
        cart
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        loggerMiddleware,
    ],
});

export default store;