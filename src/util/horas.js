
//TODO: Validar horas
//TODO: Configurar como classe

export default {
    
}

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