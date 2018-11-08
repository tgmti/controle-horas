import Hour from '@/util/hour'

describe('Class Hour Test', () => {
    const hourObject = new Hour()
    test('convert string To Decimal Hour', () => {
        expect(hourObject.stringToDecimal("08:30").hourDecimal).toEqual(8.5);
    })

    test('convert Decimal Hour to String', () => {
        expect(hourObject.decimalToString(8.5).hourString).toEqual("08:30");
    })
  })