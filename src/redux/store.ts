import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/user.reducer';
import {questionsApi} from './services/questions.api';

const rootReducer = combineReducers({
    auth: userReducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
