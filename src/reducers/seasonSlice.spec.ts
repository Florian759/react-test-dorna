import { ICalendar } from '../models/ICalendar';
import { ISeason } from '../models/ISeason';
import { parseSeason } from '../utils/parseSeason';
import seasonSlice, { eventsFilterEvents, eventsSetFilter, ISeasonState, seasonSetData } from './seasonSlice';
  
describe('season reducer', () => {
	const initialState: ISeasonState = { 
		filter: '',
		events: [],
		eventsFiltered: []
	};

	const calendarFile: Array<ICalendar> = [{
		'id': '61b2411cb2800280f183f71f',
		'season': 2023,
		'name': '2023',
		'sequence': 1,
		'dateOfStart': '12/27/2022 12:00:00',
		'dateOfEnd': '11/26/2023 16:00:00',
		'events': [
			{
				'id': '6002b0fa4ea5d4488ca9f3fe',
				'sequence': 1,
				'code': 'POR',
				'shortName': 'GRAN PRÉMIO DE PORTUGAL',
				'sponsoredName': 'Grande Prémio de Portugal',
				'circuit': {
					'id': '5f6201915af11a07a9372777',
					'name': 'Algarve International Circuit',
					'location': 'Portugal'
				},
				'schedule': {
					'localTime': {
						'dateOfStart': '03/19/2023 12:00:00',
						'dateOfEnd': '03/26/2023 15:45:00'
					}
				}
			},
		]
	}];

	const season2: ISeason = {
		id: '0000000000',
		season: 2020,
		name: '2020',
		sequence: 2,
		dateOfStart: new Date('11/27/2022 12:00:00'),
		dateOfEnd: new Date('10/27/2022 12:00:00'),
	};

	const { season, events} = parseSeason(calendarFile[0]);

	it('should handle initial state', () => {
		expect(seasonSlice(undefined, { type: 'unknown' })).toEqual(initialState);
	});

      
	it('should handle season', () => {
		const actual = seasonSlice(initialState, seasonSetData(calendarFile));
		expect(actual.season).toMatchObject(season);
	});

	it('should handle season error', () => {
		const actual = seasonSlice(initialState, seasonSetData(calendarFile));
		expect(actual.season).not.toMatchObject(season2);
	});

	it('should handle events', () => {
		const actual = seasonSlice(initialState, seasonSetData(calendarFile));
		expect(actual.events).toMatchObject(events);
	});

	it('should handle events error', () => {
		const actual = seasonSlice(initialState, seasonSetData(calendarFile));
		expect(actual.events).not.toMatchObject([]);
	});

	it('should handle filter', () => {
		const actual = seasonSlice(initialState, eventsSetFilter('filter'));
		expect(actual.filter).toEqual('filter');
	});

	it('should handle filter error', () => {
		const actual = seasonSlice(initialState, eventsSetFilter('filter'));
		expect(actual.filter).not.toEqual('potato');
	});

	it('should handle filter events', () => {
		const initial = { 
			filter: 'GRAN PRÉMIO DE PORTUGAL',
			events: events,
			eventsFiltered: []
		};

		const actual = seasonSlice(initial, eventsFilterEvents());
		expect(actual.eventsFiltered).toMatchObject(events);
	});

	it('should handle filter events error', () => {
		const initial = { 
			filter: 'potato',
			events: events,
			eventsFiltered: []
		};

		const actual = seasonSlice(initial, eventsFilterEvents());
		expect(actual.eventsFiltered).not.toMatchObject(events);
	});

});
  