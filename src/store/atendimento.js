
import {db} from '@/store/firedb'

const COLLECTION_ATEND = 'atendimento';

const state = {
	registros : [],
	headers : [
		{ text: 'Data'      , value: 'dat', align: 'left', type: 'date' },
		{ text: 'Início'    , value: 'ini' },
		{ text: 'Fim'       , value: 'fim' },
		{ text: 'Desconto'  , value: 'des' },
		{ text: 'Translado' , value: 'tra' },
		{ text: 'Cliente'   , value: 'cli' },
		{ text: 'Chamado/OS', value: 'cha' },
		{ text: 'Observação', value: 'obs' },
		{ text: 'Tt.Hora'   , value: 'tth' },
		{ text: 'Tt.Decimal', value: 'ttd' }
	]
}

const formatReg = (reg) => ({
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
})


const mutations = {
	SET_REGISTRO (state, { ret }) {
		state.registros.push(formatReg( ret.data() ))
	},
	RESET_REGISTRO (state) {
		state.registros = [];
	}
}

const actions = {
	async get ({ commit }) {
		let convoRef = db.collection(COLLECTION_ATEND)
		let convos = await convoRef.get()
		commit('RESET_REGISTRO')
		convos.forEach(reg => commit('SET_REGISTRO', { reg }))
	}
}

export default { namespaced: true, state, mutations, actions }