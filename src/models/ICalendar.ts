
interface IEventCalendar {
	id: string;
	sequence: number;
	code: string;
	shortName: string;
	sponsoredName: string;
	circuit: {
		id: number;
		name: string;
		location: string;
	},
	schedule: {
		localTime: {
			dateOfStart: string;
			dateOfEnd: string;
		}
	}
}

export interface ICalendar {
    id: string;
    season: number;
    name: string;
    sequence: number;
    dateOfStart: string;
    dateOfEnd: string;
    events: Array<IEventCalendar>;
    
}