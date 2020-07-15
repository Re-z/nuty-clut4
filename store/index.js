import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
new Vuex.Store({
	state: {
		infoPopup: {
			isVisible: false,
			title: '',
			text: '',
		}
	},
	mutations: {
		setInfoPopup(state, payload) {
			state.infoPopup.isVisible = payload.isVisible;
			state.infoPopup.title = payload.title;
			state.infoPopup.text = payload.text;
		}
	},
	getters: {
		getInfoPopup(state) {
			return state.infoPopup
		}
	},
})

export default store
