import {db} from '@/store/firedb'
import template from '@/store/template'
import {sDiff,dDiff} from '@/util/hour'

const COLLECTION_NAME = 'atendimento';

const getters = {
	tth : (state) => {
		const e = state.editedItem
		return sDiff(e.ini, e.fim);
	},
	ttd : (state) => {
		const e = state.editedItem
		return dDiff(e.ini, e.fim);
	}
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
			tth : sDiff(reg.ini, reg.fim),
			ttd : dDiff(reg.ini, reg.fim)
		}
		if (id) ret.id = id;
		return ret;
	}
}

const moduleTemplate = template
export default moduleTemplate(db.collection(COLLECTION_NAME), state, getters)