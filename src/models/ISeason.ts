import { IEvent } from "./IEvent";

export interface ISeason {
    id?: string;
    season?: number;
    name?: string;
    sequence?: number;
    dateOfStart?: Date;
    dateOfEnd?: Date;
    events?: Array<IEvent>;
}