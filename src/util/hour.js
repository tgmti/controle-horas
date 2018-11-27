
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
   static stringToFloat(hourString) {
       if (! Hour.isValid(hourString) ) return 0;
       const fullHours = parseInt(hourString.substr(0,2));
       const minutes = parseInt(hourString.substr(3)) / 60;
       return parseFloat(parseFloat(fullHours + minutes).toFixed(2));
    }
    
    /**
     * floatToString
     * 
     * @param {float} hourFloat - Hour Float
     */
    static floatToString(hourFloat) {
        const fullHours = parseInt(hourFloat);
        const minutes = parseInt( parseFloat( (hourFloat - fullHours) * 60 ).toFixed(0) );
        return Hour.lPad(fullHours) + ":" + Hour.lPad(minutes);
    }
    
    static diffHour(hourIni, hourEnd, skipValidation) {
        if (! skipValidation) {
            if (! Hour.isValid(hourIni) ) return null;
            if (! Hour.isValid(hourEnd) ) return null;
        }
        return Hour.floatToString( Hour.diffHourToFloat(hourIni, hourEnd, true) );
    }
    static diffHourToFloat(hourIni, hourEnd, skipValidation) {
        if (! skipValidation) {
            if (! Hour.isValid(hourIni) ) return null;
            if (! Hour.isValid(hourEnd) ) return null;
        }
        return parseFloat( parseFloat( Hour.stringToFloat(hourEnd) - Hour.stringToFloat(hourIni) ).toFixed(2) );
    }

    static isValid(hour) {
        if (! ( 
            typeof hour === 'string' &&
            (hour.length === 5 || hour.length === 4) &&
            (hour.indexOf(":") >= 1 && hour.indexOf(":") <= 2)
         ) )
            return false;
        
        const fullHours = parseInt(hour.slice(0,2))
        const minutes = parseInt(hour.slice(3))

        if  (! (
                fullHours >= 0 && fullHours <= 23 &&
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