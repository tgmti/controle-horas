
export default function moduleTemplate (COLLECTION_REF, state, getters) { return {    
    namespaced: true,
    state,
    getters,
    mutations : {
        ADD_REGISTRO (state, doc) {
            state.registros.push(state.formatReg( doc.id, doc.data() ))
        },
        RESET_REGISTRO (state) {
            state.registros = [];
        },
        EDIT_REGISTRO (state, payload) {
            state.editedItem = Object.assign({}, payload);
        },
        RESET_EDIT (state) {
            state.editedItem = Object.assign({}, state.defaultItem());
        },
        UPDATE_EDITED (payload) {
            state.editedItem = Object.assign(state.editedItem, payload);
        }
    },
    actions : {
        async get ({ commit }) {
                    
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
        async edit ({ commit }, item ) {
            const id = item.id
            if (id) {
                COLLECTION_REF.doc(id).get().then( (resp) => {
                    commit('EDIT_REGISTRO', state.formatReg( id, resp.data() ) )
                })			
            }
        },
        async delete (context, item ) {
            if (item.id) {
                COLLECTION_REF.doc(item.id).delete()	
            }
        },
        async reset ({ commit }) {
            commit('RESET_EDIT')
        }
    }
}}