<template>
	<div class="overlay">
		<div class="popup">
			<h3 class="popup__title section-title section-title_small">Спасибо за интерес!</h3>
			<p class="popup__text">Для совершения покупки вам необходимо позвонить по одному из номеров телефона:</p>
			<p>111111</p>
			<p>2222</p>
			<img :src="popupData.img" alt="">
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
				img: '',
			}
			this.$store.commit('setBuyPopup', popupPayload)
		}
	},
	props: [
		'popupData',
	]
}
</script>

