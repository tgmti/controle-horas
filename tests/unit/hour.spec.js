import Hour from '@/util/hour'

describe('Class Hour Test', () => {
    test('convert string To Float Hour', () => {
        expect(Hour.stringToFloat("08:30")).toEqual(8.5);
    })

    test('convert Float Hour to String', () => {
        expect(Hour.floatToString(8.5)).toEqual("08:30");
    })

    test('Return diff hour', () => {
        expect(Hour.diffHour("08:30", "10:45")).toEqual("02:15");
    })

    test('Return diff hour in float', () => {
        expect(Hour.diffHourToFloat("08:30", "10:45")).toEqual(2.25);
    })

    test('Valid hour', () => {
        expect(Hour.isValid("08:30")).toBeTruthy()
        expect(Hour.isValid("test:xpto")).toBeFalsy()
        expect(Hour.isValid("tt:xx")).toBeFalsy()
        expect(Hour.isValid("08:62")).toBeFalsy()
        expect(Hour.isValid("24:01")).toBeFalsy()
        expect(Hour.isValid("test")).toBeFalsy()
    })
  })