import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import personMap from "../features/personMap/personMap";

export const store = configureStore({
  reducer: {
    personMap
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
