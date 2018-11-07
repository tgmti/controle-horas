
import {db} from '@/store/firedb'

const COLLECTION_NAME = 'ponto'
const COLLECTION_REF = db.collection(COLLECTION_NAME)

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



const mutations = {

	ADD_REGISTRO (state, doc) {
		state.registros.push(state.formatReg( doc.id, doc.data() ))
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
		
		//console.log(COLLECTION_REF)
		//let convos = await COLLECTION_REF.get()
		
		//convos.forEach(ponto => commit('SET_REGISTRO', { ponto }))
		
		COLLECTION_REF.onSnapshot(snapRef => {
			//let source = convo.metadata.hasPendingWrites ? 'Local' : 'Server'
			if (snapRef && snapRef.docs) {
				commit('RESET_REGISTRO')
				snapRef.docs.forEach(doc => commit('ADD_REGISTRO', doc) )
			}
		})
	},

	save (context, editedItem ) {
		const reg = state.formatReg(null, editedItem);
		const id = editedItem.id
		const promisse = id ? COLLECTION_REF.doc(id).update(reg) : COLLECTION_REF.add(reg)
		return promisse;
	},

	async edit (context, item ) {
		const id = item.id
		if (id) {
            COLLECTION_REF.doc(id).get().then( (resp) => {
                return state.formatReg( id, resp.data() )
            })			
		}
	},

	async delete (context, item ) {
		if (item.id) {
            COLLECTION_REF.doc(item.id).delete()	
		}
	}
}

export default { namespaced: true, state, mutations, actions }