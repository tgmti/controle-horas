
import {db} from '@/store/firedb'

const COLLECTION_NAME = 'ponto'

const state = {
	registros : [],
	headers : [
		{ text: 'Data'      , value: 'data', align: 'left', type: 'date' },
		{ text: 'Entrada'   , value: 'ent1' },
		{ text: 'Almoço'    , value: 'sai1' },
		{ text: 'Retorno'   , value: 'ent2' },
		{ text: 'Saída'     , value: 'sai2' },
		{ text: 'Observação', value: 'obs'  }
	]
}

const formatReg = (reg) => ({
	data : reg.data,
	ent1 : reg.ent1,
	sai1 : reg.sai1,
	ent2 : reg.ent2,
	sai2 : reg.sai2,
	obs : reg.obs
})


const mutations = {

	ADD_REGISTRO (state, { doc }) {
		state.registros.push(formatReg( doc.data() ))
	},

	RESET_REGISTRO (state) {
		state.registros = [];
	}
	
	/* 	
	ADD_MESSAGE (state, { conversationId, message }) {
		if (!state.allMsgIds.includes(message.id)) {
			state.all[conversationId].messages.push(message)
			state.allMsgIds.push(message.id)
		}
	}, */
}

const actions = {
/* 	sendMessage ({ commit, rootState }, { text, created, sender, conversationId }) {
		const convoRef = rootState.db.collection('conversations').doc(conversationId)

		convoRef.update({
			messages: [...state.all[conversationId].messages, { id: uuidv4(), created, sender, text }]
		})
		.then(res => console.log('Message sent.'))
		.catch(err => console.log('Error', err))
	},
	
	seed ({ rootState }) {
		let convoRef = rootState.db.collection('conversations')

		convoRef.add({
			created: Date.now(),
			users: ['mr_a', 'mr_b'],
			messages: [
				{ id: uuidv4(), text: 'Hi there', sender: 'mr_a', created: Date.now() },
				{ id: uuidv4(), text: 'Hi to you too!', sender: 'mr_b', created: Date.now() }
			]
		})

		convoRef.add({
			created: Date.now(),
			users: ['mr_a', 'mr_c'],
			messages: []
		})
	},
	*/

	async get ({ commit }) {
		
		let collectionRef = db.collection(COLLECTION_NAME)

		//console.log(collectionRef)
		//let convos = await collectionRef.get()
		
		//convos.forEach(ponto => commit('SET_REGISTRO', { ponto }))
		
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