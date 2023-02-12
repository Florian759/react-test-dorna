import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import seasonSlice from '../reducers/seasonSlice';

export const store = configureStore({
  reducer: {
    season: seasonSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
