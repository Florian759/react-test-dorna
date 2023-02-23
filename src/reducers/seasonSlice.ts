import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICalendar } from '../models/ICalendar';
import { IEvent } from '../models/IEvent';
import { ISeason } from '../models/ISeason';
import { RootState } from '../redux/store';
import { filterEvents } from '../utils/filterEvents';
import { parseSeason, ParseSeasonResultType } from '../utils/parseSeason';
import { sortEventsByDateOfStart } from '../utils/sortEvents';

export interface ISeasonState {
  filter: string;
  season?: ISeason;
  events: Array<IEvent>;
  eventsFiltered: Array<IEvent>;
}

const initialState: ISeasonState = {
	filter: '',
	events: [],
	eventsFiltered: []
};

export const seasonSlice = createSlice({
	name: 'season',
	initialState,
	reducers: {
		seasonSetData: (state, action: PayloadAction<Array<ICalendar>>) => {
			const data: ParseSeasonResultType = parseSeason(action.payload[0]);

			state.season = {...data.season};
			state.events = sortEventsByDateOfStart([...data.events]);
			state.eventsFiltered = filterEvents({filter: state.filter, events: [...data.events]});
		},
		eventsSetFilter: (state, action: PayloadAction<string>) => {
			state.filter = action.payload;   
		},
		eventsFilterEvents: (state) => {
			state.eventsFiltered = filterEvents({filter: state.filter, events: [...state.events]});        
		}
	},
});

export const { seasonSetData, eventsSetFilter, eventsFilterEvents } = seasonSlice.actions;

export const selectSeason = (state: RootState) => state.season;

export default seasonSlice.reducer;
