<template>
	<div class="product">
		<!-- <div class="product__left" v-if="item">
			<div class="product__small-img.is-active">
				<img :src="item.imgs[0]" alt="">
			</div>
			<div class="product__small-img">
				<img :src="item.imgs[2]" alt="">
			</div>
			<div class="product__small-img">
				<img :src="item.imgs[1]" alt="">
			</div>
			<div class="product__big-img">
				<img :src="item.imgs[0]" alt="">
			</div>
		</div> -->
		<div class="product__right">
			<h1 class="product__title">{{item.name}}</h1>
			<p class="product__price">{{item.price}}<span>грн</span></p>
			<button class="btn btn_green btn_med">Купить сумочку</button>
			<hr class="product__divider">
			<div class="product__features">
				<div class="product__features-row">
					<div class="product__features-el">Код товара:</div>
					<div class="product__features-el">{{item.code}}</div>
				</div>
				<div class="product__features-row">
					<div class="product__features-el">Размеры:</div>
					<div class="product__features-el">{{item.size}}</div>
				</div>
				<div class="product__features-row">
					<div class="product__features-el">Материал:</div>
					<div class="product__features-el">{{item.leather}}</div>
				</div>
				<div class="product__features-row">
					<div class="product__features-el">Тип кожи:</div>
					<div class="product__features-el">{{item.leatherType}}</div>
				</div>
				<div class="product__features-row">
					<div class="product__features-el">Цвет:</div>
					<div class="product__features-el">{{item.color}}</div>
				</div>
				<div class="product__features-row">
					<div class="product__features-el">Доступность:</div>
					<div class="product__features-el">{{item.avaliable}}</div>
				</div>
				<div class="product__features-description">
					<p>{{item.description}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import items from '@/js/base.js'
	export default {
		data() {
			return {

			}
		},
		props: [
			'item'
		],
		mounted() {
			console.log(this.item);
		}
	}
</script>