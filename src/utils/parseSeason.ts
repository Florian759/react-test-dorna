import { ICalendar } from "../models/ICalendar";
import { ISeasonState } from "../reducers/seasonSlice";

export function parseSeason(data: ICalendar): ISeasonState {
    const result: ISeasonState = {
        props: {
            id: data.id,
            season: data.season,
            name: data.name,
            sequence: data.sequence,
            dateOfStart: new Date(data.dateOfStart),
            dateOfEnd: new Date(data.dateOfEnd),
        },
        events: data.events.map((item) => ({
            id: item.id,
            sequence: item.sequence,
            code: item.code,
            shortName: item.shortName,
            sponsoredName: item.sponsoredName,
            circuit: {
                id: item.circuit.id,
                name: item.circuit.name,    
                location: item.circuit.location,
            },
            schedule: {
                localTime: {
                    dateOfStart: new Date(item.schedule.localTime.dateOfStart),
                    dateOfEnd: new Date(item.schedule.localTime.dateOfEnd),
                }
            }    
        }))
    };

	return result;
}