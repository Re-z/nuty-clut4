<template>
	<div class="main-wrap">
		<Heading></Heading>
		<PromoFirst></PromoFirst>
		<PromoSecond></PromoSecond>

		<nuxt/>
		<About>
			<h2 class="section-title">Про нас</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum aspernatur quibusdam repellat corrupti doloremque nam mollitia atque tenetur expedita.</p>
			<img src="@/assets/img/woman.jpeg" alt="">
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam illum doloribus hic magni earum, saepe quod modi, nihil exercitationem iure reprehenderit ratione amet possimus optio. Ut amet sapiente incidunt vitae tempora illo sint magnam perspiciatis sunt, unde modi quae porro tempore, assumenda eos nam omnis in commodi optio quos rem.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsa soluta repellat est sed nemo asperiores at molestiae dignissimos, hic quo labore reprehenderit. At aliquid natus corrupti voluptas velit rem?</p>
			<ul>
				<li>Lorem ipsum dolor sit amet.</li>
				<li>Lorem ipsum dolor sit amet.</li>
				<li>Lorem ipsum dolor sit amet.</li>
				<li>Lorem ipsum dolor sit amet.</li>
				<li>Lorem ipsum dolor sit amet.</li>
			</ul>
		</About>


		<Footer></Footer>
		<ToTopBtn></ToTopBtn>
		<InfoPopup
			v-if="infoPopupData.isVisible"
			:popupData="infoPopupData"></InfoPopup>
	</div>
</template>
<script>

import Heading from '@/components/header';
import PromoFirst from '@/components/promo-first';
import PromoSecond from '@/components/promo-second';
import Footer from '@/components/footer.vue';
import About from '@/components/about.vue';
import ToTopBtn from '@/components/toTop.vue';
import InfoPopup from '@/components/popups/infoPopup.vue';

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
		About,
		ToTopBtn,
		InfoPopup
	},
	computed: {
		infoPopupData() {
			return this.$store.getters.getInfoPopup
		}
	},
}
</script>