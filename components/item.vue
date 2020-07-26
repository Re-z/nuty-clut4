<template>
	<div class="item"
		@click="goToProduct"
	>
		<div class="item__inner">
			<div class="item__img-wrap">
				<div 
					class="item__img-prev"
					@click.stop="prevImg()">
				</div>
				<img class="item__img" :src="itemObj.imgs[visibleImgPosition]" alt="">
				<div 
					class="item__img-next"
					@click.stop="nextImg()">
				</div>
			</div>
			<div class="item__rows">
				<div class="item__rows-visible">
					<div class="item__row">
						<div class="item__row-el">{{itemObj.name}}</div>
						<div class="item__row-el text-right"> {{itemObj.price}} </div>
					</div>
					<div class="item__row">
						<div class="item__row-el">Код товара</div>
						<div class="item__row-el text-right ">{{itemObj.code}}</div>
					</div>
					<div class="item__row">
						<div class="item__row-el">Доступность</div>
						<div class="item__row-el text-right is-avaliable">Есть в наличии</div>
					</div>
				</div>
				<div class="item__rows-hidden">
					<div class="item__row">
						<div class="item__row-el">Размеры (д/в/ш) :</div>
						<div class="item__row-el text-right">{{itemObj.size}}</div>
					</div>

					<div class="item__row">
						<div class="item__row-el">Материал:</div>
						<div class="item__row-el text-right">{{itemObj.leather}}</div>
					</div>
					<div class="item__row">
						<div class="item__row-el">Тип кожи:</div>
						<div class="item__row-el text-right">{{itemObj.leatherType}}</div>
					</div>
					<div class="item__row">
						<div class="item__row-el">Цвет:</div>
						<div class="item__row-el text-right">{{itemObj.color}}</div>
					</div>
				</div>	
				<button class="btn btn_gold item__btn">Подробнее</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				visibleImgPosition: 0
			}
		},
		methods: {
			goToProduct() {
				this.$router.push({
					path: `/products/${this.itemObj.id}`,
					params: {
						id: this.itemObj.id
					}
				})
			},
			prevImg () {
				this.visibleImgPosition--;
				//creating loop on last img
				this.visibleImgPosition < 0 ? this.visibleImgPosition = this.itemObj.imgs.length - 1 : null
			},
			nextImg() {
				this.visibleImgPosition++;
				//creating loop on last img
				this.visibleImgPosition > this.itemObj.imgs.length - 1 ? this.visibleImgPosition = 0 : null
			}
		},
		props: ['itemObj']
	}
</script>