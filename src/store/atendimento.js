import {db} from '@/store/firedb'
import template from '@/store/template'

const COLLECTION_NAME = 'atendimento';

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
		{ text: 'Tt.Hora'   , value: 'tth', type: 'time' },
		{ text: 'Tt.Decimal', value: 'ttd', type: 'time' }
	],
	editedItem : {},
	defaultItem : () => ({
		id: null,
		dat: ( (new Date()).toLocaleDateString().split('/').reverse().join('-') ),
		ini: null,
		fim: null,
		des: null,
		tra: null,
		cli: null,
		cha: null,
		obs: null,
		tth: null,
		ttd: null		
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
			tth : reg.tth,
			ttd : reg.ttd
		}
		if (id) ret.id = id;
		return ret;
	}
}

const moduleTemplate = template
export default moduleTemplate(db.collection(COLLECTION_NAME), state)