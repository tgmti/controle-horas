
import {db} from '@/store/firedb'

const COLLECTION_NAME = 'atendimento';

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
	ADD_REGISTRO (state, { doc }) {
		state.registros.push(formatReg( doc.data() ))
	},
	RESET_REGISTRO (state) {
		state.registros = [];
	}
}

const actions = {
	async get ({ commit }) {

		let collectionRef = db.collection(COLLECTION_NAME)
		collectionRef.onSnapshot(snapRef => {
			//let source = convo.metadata.hasPendingWrites ? 'Local' : 'Server'
			if (snapRef && snapRef.docs) {
				commit('RESET_REGISTRO')
				snapRef.docs.forEach(doc => commit('ADD_REGISTRO', { doc }) )
			}
		})
	}
}

export default { namespaced: true, state, mutations, actions }