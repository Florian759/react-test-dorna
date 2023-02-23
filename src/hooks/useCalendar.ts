import { useEffect } from 'react';
import { ICalendar } from '../models/ICalendar';
import { seasonSetData, selectSeason } from '../reducers/seasonSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { calendarService } from '../services/calendarService';

export function useCalendar() {
	const season = useAppSelector(selectSeason) ;
	const dispatch = useAppDispatch();
    
	useEffect(() => {
		if (!season.season?.id) {
			calendarService().then(response => {
				const seasons: Array<ICalendar> = response.data;
				dispatch(seasonSetData(seasons));
			}).catch(e => {
				console.log(e);
			}); 
		}
	}, [season, dispatch]);

}