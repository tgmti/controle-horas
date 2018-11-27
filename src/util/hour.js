
//TODO: Validar horas
//TODO: Configurar como classe

/**
 * Hour Class
 * 
 * @constructor
 * 
 */
class Hour {

   /**
    * stringToFloat
    * 
    * @param {String} hourString - Hour
    */
   static stringToFloat(hourString, sumhours) {
       if (! Hour.isValid(hourString, sumhours) ) return 0;
       const fullHours = parseInt(hourString.slice(0,-3));
       const minutes = parseInt(hourString.slice(-2)) / 60;
       return parseFloat(parseFloat(fullHours + minutes).toFixed(2));
    }
    
   static stringSumToFloat(hourString) {
       return Hour.stringToFloat(hourString, true);
    }
    
    /**
     * floatToString
     * 
     * @param {float} hourFloat - Hour Float
     */
    static floatToString(hourFloat, sumhours) {
        const fullHours = parseInt(hourFloat);
        const minutes = parseInt( parseFloat( (hourFloat - fullHours) * 60 ).toFixed(0) );
        const length = sumhours ? fullHours.toString().length : 2;
        return Hour.lPad(fullHours, length) + ":" + Hour.lPad(minutes);
    }

    static floatSumToString(hourFloat) {
        return Hour.floatToString(hourFloat, true);
    }
    
    static diffHour(hourIni, hourEnd, sumhours, skipValidation) {
        if (! skipValidation) {
            if (! Hour.isValid(hourIni, sumhours) ) return null;
            if (! Hour.isValid(hourEnd, sumhours) ) return null;
        }
        return Hour.floatToString( Hour.diffHourToFloat(hourIni, hourEnd, sumhours, true) );
    }
    static diffHourToFloat(hourIni, hourEnd, sumhours, skipValidation) {
        if (! skipValidation) {
            if (! Hour.isValid(hourIni, sumhours) ) return null;
            if (! Hour.isValid(hourEnd, sumhours) ) return null;
        }
        return parseFloat( parseFloat( 
                Hour.stringToFloat(hourEnd, sumhours) - Hour.stringToFloat(hourIni, sumhours) 
            ).toFixed(2) );
    }

    static isValid(hour, sumhours) {
        if (! ( 
            typeof hour === 'string' &&
            (hour.length >= 4) &&
            (hour.indexOf(":") >= 1)
         ) )
            return false;
        
        const fullHours = parseInt(hour.slice(0,-3))
        const minutes = parseInt(hour.slice(-2))

        if  (! (
                fullHours >= 0 && 
                (sumhours || fullHours <= 23) &&
                minutes >= 0 && minutes <= 59
            ) )
            return false;

        return true;
    }
    
    static lPad(value, width, padding) {
        const length = width || 2
        return ( Array(length).join(padding || "0") + (value || 0) ).slice(-length)
    }
    
}

export default Hour;