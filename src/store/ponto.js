
import {db} from '@/store/firedb'
import template from '@/store/template'

const COLLECTION_NAME = 'ponto'

const state = {
	registros : [],
	headers : [
		{ text: 'Data'      , value: 'data', align: 'left', type: 'date' },
		{ text: 'Entrada'   , value: 'ent1', type: 'time' },
		{ text: 'Almoço'    , value: 'sai1', type: 'time' },
		{ text: 'Retorno'   , value: 'ent2', type: 'time' },
		{ text: 'Saída'     , value: 'sai2', type: 'time' },
		{ text: 'Observação', value: 'obs'  }
	],
	editedItem : {},
	defaultItem : () => ({
		id: null,
		data: ( (new Date()).toLocaleDateString().split('/').reverse().join('-') ),
		ent1: null,
		sai1: null,
		ent2: null,
		sai2: null,
		obs: null
	}),
	formatReg : (id, reg) => {
		let ret = {
			data : reg.data,
			ent1 : reg.ent1,
			sai1 : reg.sai1,
			ent2 : reg.ent2,
			sai2 : reg.sai2,
			obs : reg.obs
		}
		if (id) ret.id = id;
		return ret;
	}
}

const moduleTemplate = template
export default moduleTemplate(db.collection(COLLECTION_NAME), state)