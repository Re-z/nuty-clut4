<template>
	<div class="wrap">
		<div class="section-centered">
			<Breadcrumbs></Breadcrumbs>
			<Product :item="item"></Product>
		</div>
		
	</div>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs.vue';
import Product from '@/components/product/product.vue';

export default {
	data() {
		return {
			item: {}
		}
	},
	components: {
		Breadcrumbs,
		Product
	},
	mounted() {
		this.item =  {
			imgs: ['400/400', '150/150', '150/151'],
			id: 1123,
			price: '100',
			name: 'Blablabla',
			code: 112451,
			size: '10/20/30',
			color: 'red',
			leather: 'Натуральная кожа',
			leatherType: 'Свинная кожа',
			avaliable: 'Есть в наличии',
			description: 'Blabla bla this is big description'
		};
	}
}
</script>