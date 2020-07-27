<template>
	<div class="product">
		<div class="product__left" 
			v-if="item"
			:style='widthOfSmallImgsColumn'
			>

			<div
				v-for="img in item.imgs"
				:key="img"
				class="product__small-img"
				@click="changeActiveImg"
				:style="heightOfSmallImg"
				:class="{'is-active': img === activeImg}"
				>
				<img :src="img" alt="">
			</div>
			<div 
				class="product__big-img"
				:style="bigImgStyle"
				>

				<img :src="activeImg" alt="">
			</div>
		
		</div>
		<div class="product__right">
			<h1 class="product__title">{{item.name}}</h1>
			<p class="product__price">{{item.price}}<span>грн</span></p>
			<button 
				class="btn btn_green btn_med"
				@click="showBuyPopup()"
				>
				Купить сумочку
			</button>
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
				activeImg: this.item.imgs[0]
			}
		},
		computed: {
			computedBasis() {
				return 450/this.item.imgs.length
			},
			heightOfSmallImg() {
				return {
					width: this.computedBasis + 'px',
					height: this.computedBasis + 'px',
					// maxHeight: '150px',
				}
			},
			widthOfSmallImgsColumn() {
				return {
					gridTemplateColumns: this.computedBasis + 'px' + ' 1fr',
					gridTemplateRows: `repeat(${this.item.imgs.length}, ${this.computedBasis}px)`
				}
			},
			bigImgStyle(){
				return {
					gridRow: `1 / ${this.item.imgs.length}`
				}
			}
		},

		methods: {
			changeActiveImg(ev) {
				const clickedImg = ev.target.getAttribute('src')
				this.activeImg = clickedImg;				
			},
			showBuyPopup(){
				const payload = {
					img: this.activeImg,
					isVisible: true
				}
				this.$store.commit('setBuyPopup', payload)
			}
		},
		props: [
			'item'
		],
	
	}
</script>