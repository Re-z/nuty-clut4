<template>
	<div class="wrap">
		<div class="section-centered">
			<Breadcrumbs :item="currentItem"></Breadcrumbs>
			<Product :item="currentItem"></Product>
			<Comments :item="currentItem"></Comments>
			
		</div>
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
	</div>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs.vue';
import Product from '@/components/product/product.vue';
import Comments from '@/components/comments.vue';
import About from '@/components/about.vue';

import ItemsDB from '@/assets/js/base.js'

export default {
	data() {
		return {
			id: this.$route.params.id
		}
	},
	computed: {
		currentItem() {
			return ItemsDB.find(item => item.id == this.id);
		}
	},
	components: {
		Breadcrumbs,
		Product,
		Comments,
		About
	},
}
</script>