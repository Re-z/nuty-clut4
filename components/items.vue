<template>
	<div class="items section-centered" id="items">
		<div class="items__box">
			<h2 class="section-title">Каталог товаров</h2>
			<div  class="items__wrap">
				<Item
					v-for="item in itemsToPrint"
					:key="item.id"
					:itemObj="item"
					>
				</Item>
				
			</div>
			<div class="items__btns">
				<button
					@click="showMoreItems" 
					class="items__btn btn btn_solid btn_med"
					:class="{'is-hidden': this.itemsToPrint.length === this.allItems.length}">
					Показать еще {{itemsLeft}} товаров
				</button>
				<button 
					@click="showAllItems"
					class="items__btn btn btn_dark btn_med"
					:class="{'is-hidden': this.itemsToPrint.length === this.allItems.length}">
					Показать все {{allItems.length}} товаров
				</button>
			</div>
		</div>
	</div>
	
</template>



<script>
import Item from '@/components/item.vue';
export default {
	data() {
		return {
			itemsToPrint: [], //items that will be displayed initialy in DOM,
			numberOfPrintedItems: 15,
			allItems: [], //all items recieved from DB 
			itemsCounter: 0, //number items that will be displayed initialy in DOM,

		}
	},
	computed: {
		itemsLeft() {
			const itemsLeftToPrint = this.allItems.length - this.itemsToPrint.length;
			return itemsLeftToPrint < this.numberOfPrintedItems ? itemsLeftToPrint : this.numberOfPrintedItems
		}
	},
	components: {
		Item
	},
	methods: {
		showMoreItems() {
			this.itemsCounter += this.numberOfPrintedItems;
			const updatedItemsToPrint = this.allItems.slice(0, this.itemsCounter);
			this.itemsToPrint = updatedItemsToPrint;
		},
		showAllItems() {
			this.itemsToPrint = this.allItems
		}
	},

	mounted() {
		const itemsNumber = 22;
		for(let iterator = 1; iterator <= itemsNumber; iterator++) {
			const newObj = {
				img1: 'https://kengyry.com.ua/image/cache/catalog/fa-1342-3md/389374.970x0-262x334.jpg',
				img2: 'https://www.placecage.com/262/334',
				img3: 'https://www.placecage.com/262/335',
				id: iterator,
				price: '100грн',
				name: 'Blablabla' + iterator,
				code: iterator + 111,
				size: '10/20/30',
				color: 'red',
				leather: 'Натуральная кожа',
				leatherType: 'Свинная кожа'
			};
			this.allItems.push(newObj);
		};
		this.showMoreItems()
	}
}
</script>