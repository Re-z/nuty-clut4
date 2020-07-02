<template>
	<div class="items section-centered" id="items">
		<div class="items__box">
			<h2 class="section-title">Каталог товаров</h2>
			<div  class="items__wrap">
				<Item></Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
			</div>
			<div class="items__btns">
				<button class="items__btn btn btn_solid btn_med">Показать еще 20</button>
				<button class="items__btn btn btn_dark btn_med">Показать все</button>
			</div>
		</div>
	</div>
	
</template>



<script>
import Item from '@/components/item.vue';
export default {
	components: {
		Item
	}
}
</script>