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
import ItemsDB from '@/assets/js/base'
export default {
	data() {
		return {
			itemsToPrint: [], //items that will be displayed initialy in DOM,
			numberOfPrintedItems: 15,
			allItems: ItemsDB, //all items recieved from DB 
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
		this.showMoreItems()
	}
}
</script>