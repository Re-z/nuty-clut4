<template>
	<div class="html-root" id="top">
		<Heading></Heading>
		<PromoFirst></PromoFirst>
		<PromoSecond></PromoSecond>

		<nuxt/>

		


		<Footer></Footer>
		<ToTopBtn></ToTopBtn>

		<InfoPopup
			v-if="infoPopupData.isVisible"
			:popupData="infoPopupData"></InfoPopup>
		<BuyPopup
			v-if="buyPopupData.isVisible"
			:popupData="buyPopupData"></BuyPopup>
	</div>
</template>
<script>

import Heading from '@/components/header';
import PromoFirst from '@/components/promo-first';
import PromoSecond from '@/components/promo-second';
import Footer from '@/components/footer.vue';
import ToTopBtn from '@/components/toTop.vue';
import InfoPopup from '@/components/popups/infoPopup.vue';
import BuyPopup from '@/components/popups/buyPopup.vue';

export default {
	data() {
		return {

		}
	},
	components: {
		Heading,
		PromoFirst,
		PromoSecond,
		Footer,
		ToTopBtn,
		InfoPopup,
		BuyPopup
	},
	computed: {
		infoPopupData() {
			return this.$store.getters.getInfoPopup
		},
		buyPopupData() {
			return this.$store.getters.getBuyPopup
		}
	},
}
</script>