import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICalendar } from '../models/ICalendar';
import { IEvent } from '../models/IEvent';
import { ISeason } from '../models/ISeason';
import { RootState } from '../redux/store';
import { parseSeason } from '../utils/parseSeason';

export interface ISeasonState {
  props?: ISeason;
  events?: Array<IEvent>;
}

const initialState: ISeasonState = {

};

export const seasonSlice = createSlice({
  name: 'season',
  initialState,
  reducers: {
    seasonSetData: (state, action: PayloadAction<Array<ICalendar>>) => {
      const data: ISeasonState = parseSeason(action.payload[0])

      state.props = data.props;
      state.events = data.events;
    }
  },
});

export const { seasonSetData } = seasonSlice.actions;

export const selectSeason = (state: RootState) => state.season;

export default seasonSlice.reducer;