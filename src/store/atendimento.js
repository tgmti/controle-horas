import {db} from '@/store/firedb'
import template from '@/store/template'
import Hour from '@/util/hour'

const COLLECTION_NAME = 'atendimento';

const getters = {
	tth : (state) => {
		const e = state.editedItem
		return Hour.diffHour(e.ini, e.fim);
	},
	ttd : (state) => {
		const e = state.editedItem
		return Hour.diffHourToFloat(e.ini, e.fim);
	},
	filteredReg : (state) => state.registros.filter(
		(e) => (!state.datIni || e.dat >=state.datIni ) && 
				(!state.datFim || e.dat <= state.datFim) 
	)
	,
	totHours : (state, getters) => 
		Hour.floatToString(
			getters.filteredReg.reduce( 
				(sum, reg) => sum + reg.ttd
			, 0)
		, true)
}

const state = {
	registros : [],
	headers : [
		{ text: 'Data'      , value: 'dat', align: 'left', type: 'date' },
		{ text: 'Início'    , value: 'ini', type: 'time' },
		{ text: 'Fim'       , value: 'fim', type: 'time' },
		{ text: 'Desconto'  , value: 'des', type: 'time' },
		{ text: 'Translado' , value: 'tra', type: 'time' },
		{ text: 'Cliente'   , value: 'cli' },
		{ text: 'Chamado/OS', value: 'cha' },
		{ text: 'Observação', value: 'obs' },
		{ text: 'Tt.Hora'   , value: 'atendimento/tth', type: 'time' },
		{ text: 'Tt.Decimal', value: 'atendimento/ttd', type: 'text' }
	],
	listHeaders : [
		{ text: 'Data'      , value: 'dat', align: 'left', type: 'date' },
		{ text: 'Início'    , value: 'ini', type: 'time' },
		{ text: 'Fim'       , value: 'fim', type: 'time' },
		{ text: 'Desconto'  , value: 'des', type: 'time' },
		{ text: 'Translado' , value: 'tra', type: 'time' },
		{ text: 'Cliente'   , value: 'cli' },
		{ text: 'Chamado/OS', value: 'cha' },
		{ text: 'Observação', value: 'obs' },
		{ text: 'Tt.Hora'   , value: 'tth', type: 'time' },
		{ text: 'Tt.Decimal', value: 'ttd', type: 'text' }
	],
	datIni: '2018-01-01',
	datFim: '2018-12-31',
	editedItem : {},
	computedItem : { tth: getters.tth },
	defaultItem : () => ({
		id: null,
		dat: ( (new Date()).toLocaleDateString().split('/').reverse().join('-') ),
		ini: null,
		fim: null,
		des: null,
		tra: null,
		cli: null,
		cha: null,
		obs: null		
	}),
	formatReg : (id, reg) => {
		let ret = {
			dat : reg.dat,
			ini : reg.ini,
			fim : reg.fim,
			des : reg.des,
			tra : reg.tra,
			cli : reg.cli,
			cha : reg.cha,
			obs : reg.obs,
			tth : Hour.diffHour(reg.ini, reg.fim),
			ttd : Hour.diffHourToFloat(reg.ini, reg.fim)
		}
		if (id) ret.id = id;
		return ret;
	}
}

const moduleTemplate = template
export default moduleTemplate(db.collection(COLLECTION_NAME), state, getters)