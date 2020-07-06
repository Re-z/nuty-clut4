<template>
	<div class="items section-centered">
		<div class="items__box">
			<h2 class="section-title">Самые популярные модели</h2>
			<div class="items__wrap">
				<Item
					v-for="item in items"
					:key="item.id"
					:itemObj="item"
				></Item>
			</div>
		</div>
	</div>
</template>

<script>
import Item from '@/components/item.vue';
export default {
	data() {
		return {
			items: []
		}
	},
	mounted() {
		const itemsNumber = 4;
		for(let iterator = 1; iterator <= itemsNumber; iterator++) {
			const newObj = {
				imgs: ['https://kengyry.com.ua/image/cache/catalog/fa-1342-3md/389374.970x0-262x334.jpg', 'https://www.placecage.com/262/334', 'https://www.placecage.com/262/335'],
				id: iterator,
				price: '100грн',
				name: 'Blablabla' + iterator,
				code: iterator + 111,
				size: '10/20/30',
				color: 'red',
				leather: 'Натуральная кожа',
				leatherType: 'Свинная кожа'
			};
			this.items.push(newObj);
		};
	},
	components: {
		Item
	}
}
</script>