export interface IEvent {
	id: string;
	sequence: number;
	code: string;
	shortName: string;
	sponsoredName: string;
	circuit: {
		id: string;
		name: string;
		location: string;
	},
	schedule: {
		localTime: {
			dateOfStart: Date;
			dateOfEnd: Date;
		}
	}
}