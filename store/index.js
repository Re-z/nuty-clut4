import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
new Vuex.Store({
	state: {
		infoPopup: {
			isVisible: false,
			heading: '',
			text: '',
		}
	},
	mutations: {
		setInfoPopup(state, payload) {
			state.infoPopup.isVisible = payload.isVisible;
			state.infoPopup.heading = payload.heading;
			state.infoPopup.text = payload.text;
		}
	},
	getters: {
		getInfoPopup(state) {
			return state.infoPopup
		}
	}
})

export default store
