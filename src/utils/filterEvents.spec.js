import { filterEvents } from "./filterEvents";
  
describe('filter events function', () => {

    const events = [
        {
            "id": "6002b0fa4ea5d4488ca9f3fe",
            "sequence": 1,
            "code": "POR",
            "shortName": "GRAN PRÉMIO DE PORTUGAL",
            "sponsoredName": "Grande Prémio de Portugal",
            "circuit": {
                "id": "5f6201915af11a07a9372777",
                "name": "Algarve International Circuit",
                "location": "Portugal"
            },
            "schedule": {
                "localTime": {
                    "dateOfStart": "03/19/2023 12:00:00",
                    "dateOfEnd": "03/26/2023 15:45:00"
                }
            }
        },
    ];
    
    it('should handle empty', () => {
        const filter = "";
        const actual = filterEvents({filter, events});
        expect(actual).toMatchObject(events);
    });

    it('should handle exist shortName', () => {
        const filter = "GRAN PRÉMIO DE PORTUGAL";
        const actual = filterEvents({filter, events});
        expect(actual).toMatchObject(events);
    });

    it('should handle not exist shortName', () => {
        const filter = "potato";
        const actual = filterEvents({filter, events});
        expect(actual).toMatchObject([]);
    });

    it('should handle exist code', () => {
        const filter = "POR";
        const actual = filterEvents({filter, events});
        expect(actual).toMatchObject(events);
    });
});
  