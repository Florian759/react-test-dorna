import { IEvent } from "../models/IEvent";

export type PropstType = {
    filter: string
    events: Array<IEvent>;
}

export function filterEvents({filter, events}: PropstType): Array<IEvent> {
    const search: string = filter.replace(' ', '[\\w\\s]*').toLowerCase()
    const result: Array<IEvent> = (!filter) ? events: events.filter(item => {
        const line: string = `${item?.code} ${item?.sequence} - ${item?.shortName}`;

        return line.toLowerCase().match(`(?<=[\\w]*)${search}(?=[\\w]*)`);
    }) || [];

	return result;
}
