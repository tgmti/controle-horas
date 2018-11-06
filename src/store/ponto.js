
import {db, COLLECTION_PONTO} from '@/store/firedb'

const state = {
	registros : [],
}

const formatPonto = (reg) => ({
	data : reg.data,
	ent1 : reg.ent1,
	sai1 : reg.sai1,
	ent2 : reg.ent2,
	sai2 : reg.sai2,
	obs : reg.obs
})


const mutations = {

	SET_REGISTRO (state, { ponto }) {
		const data = ponto.data()
		state.registros.push(formatPonto(data))
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
		
		let convoRef = db.collection(COLLECTION_PONTO)
		let convos = await convoRef.get()
		commit('RESET_REGISTRO')
		convos.forEach(ponto => commit('SET_REGISTRO', { ponto }))
	}
}

export default { namespaced: true, state, mutations, actions }