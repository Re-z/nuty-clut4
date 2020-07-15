<template>
	<div class="overlay">
		<div class="popup">
			<h3 class="popup__title section-title section-title_small">{{popupData.title}}</h3>
			<p class="popup__text">
				{{popupData.text}}
			</p>

			<div class="popup__btn-wrap">
				<button 
					class="btn btn_gold btn_med"
					@click="closePopup()">
					ОК
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		closePopup() {
			const popupPayload = {
				isVisible: false,
				title: '',
				text: ''
			}
			this.$store.commit('setInfoPopup', popupPayload)
		}
	},
	props: [
		'popupData',
	]
}
</script>

