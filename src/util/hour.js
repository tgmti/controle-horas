
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
       const minutes = (hourFloat - fullHours) * 60;
       return Hour.lPad(fullHours) + ":" + Hour.lPad(minutes);
   }
   
   static diffHour(hourIni, hourEnd) {
       return d2S( floatDiff(hourIni, hourEnd) );
    }
    static diffHourToFloat(hourIni, hourEnd) {
        return s2F(hourEnd) - s2F(hourIni);
    }
    
    static lPad(value, width, padding) {
        const length = width || 2
        return ( Array(length).join(padding || "0") + (value || 0) ).slice(-length)
    }
    
}

export const d2S = Hour.floatToString;
export const s2F = Hour.stringToFloat;
export const floatDiff = Hour.diffHourToFloat;
export const stringDiff = Hour.diffHour;
export const lPad = Hour.lPad;

export default Hour;