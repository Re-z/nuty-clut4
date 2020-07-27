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
		},
		buyPopup: {
			isVisible: false,
			img: ''
		},

	},
	mutations: {
		setInfoPopup(state, payload) {
			state.infoPopup.isVisible = payload.isVisible;
			state.infoPopup.title = payload.title;
			state.infoPopup.text = payload.text;
		},
		setBuyPopup(state, payload) {
			state.buyPopup.isVisible = payload.isVisible;
			state.buyPopup.img = payload.img;
		}
	},
	getters: {
		getInfoPopup(state) {
			return state.infoPopup
		},
		getBuyPopup(state) {
			return state.buyPopup
		}
	},
})

export default store
