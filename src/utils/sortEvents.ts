import { IEvent } from "../models/IEvent";

export function sortEventsByDateOfStart(data: Array<IEvent> ): Array<IEvent> {
	return data.sort((a, b) => {
        const aDate: number = a.schedule.localTime.dateOfStart.getTime();
        const bDate: number = b.schedule.localTime.dateOfStart.getTime();;

        if (aDate > bDate) return 1;
        if (aDate < bDate) return -1;
        
        return 0;
    });
}