
//TODO: Validar horas
//TODO: Configurar como classe

/**
 * Hour Class
 * 
 * @constructor
 * 
 */
class Hour {
   constructor() {
       this.hourDecimal = 0;
       this.hourString = "";
   }

   /**
    * stringToDecimal
    * 
    * @param {String} hourString - Hour
    */
   stringToDecimal(hourString) {
       const fullHours = parseInt(hourString.substr(0,2));
       const minutes = parseInt(hourString.substr(3)) / 60;
       this.hourString = hourString;
       this.hourDecimal = parseFloat(parseFloat(fullHours + minutes).toFixed(2));
       return this
   }

   /**
    * decimalToString
    * 
    * @param {float} hourDecimal - Hour decimal
    */
   decimalToString(hourDecimal) {
       const fullHours = parseInt(hourDecimal);
       const minutes = (hourDecimal - fullHours) * 60;
       this.hourString = lPad(fullHours) + ":" + lPad(minutes);
       return this;
   }


}

function lPad(value, width, padding) {
    const length = width || 2
    return ( Array(length).join(padding || "0") + (value || 0) ).slice(-length)
}

export default Hour;

export function DifHora(horaIni, horaFim) {
    return Decimal2Hora( DifHoraDecimal(Hora2Decimal(horaIni), Hora2Decimal(horaFim)) )
}

export function DifHoraDecimal(horaIni, horaFim) {
    return horaFim - horaIni
}

export function Hora2Decimal(hora) {
    const horaCheia = parseInt(hora.substring(0,2))
    const minutos = parseInt(hora.substring(3,5)) / 60
    return horaCheia + minutos;
}

export function Decimal2Hora(horaDecimal) {
    const horaCheia = parseInt(horaDecimal)
    const minutos = horaDecimal - horaCheia
    let hora = (horaCheia < 10 ? "0" : "") + horaCheia.toString()
    let minuto = (minutos * 60)
    minuto = (minuto < 10 ? "0" : "") + minuto.toString()
    return hora + ":" + minuto
}