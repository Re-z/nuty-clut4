<template>
	<div class="main-wrap">
		<Intro></Intro>
		<Items></Items>
		<Popular></Popular>
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

		<!-- <Testimonials></Testimonials> -->
	</div>
</template>

<script lang="ts">
import Intro from '@/components/intro.vue';
import Items from '@/components/items.vue';
import Popular from '@/components/popular.vue';
import About from '@/components/about.vue';

// import Testimonials from '@/components/testimonials.vue';
export default {
	components: {
		Intro,
		Items,
		About,
		// Testimonials,
		Popular
	},
	// mounted() {
	// 	console.log(this.$route);
	// }
}
</script>