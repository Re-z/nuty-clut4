<template>
	<div class="wrap">
		<div class="section-centered">
			<h1>{{this.$route.params.id}}</h1>
			<Breadcrumbs></Breadcrumbs>
			<Product :item="currentItem"></Product>
			<Comments></Comments>
		</div>
	</div>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs.vue';
import Product from '@/components/product/product.vue';
import Comments from '@/components/comments.vue';

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
		Comments
	},
}
</script>