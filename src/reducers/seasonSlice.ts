import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISeason } from '../models/ISeason';
import { RootState } from '../redux/store';

const initialState: ISeason = {

};

export const seasonSlice = createSlice({
  name: 'season',
  initialState,
  reducers: {
    seasonSetData: (state, action: PayloadAction<ISeason>) => {
      state = action.payload;
    }
  },
});

export const { seasonSetData: seasonList } = seasonSlice.actions;

export const selectSeason = (state: RootState) => state.season;

export default seasonSlice.reducer;
