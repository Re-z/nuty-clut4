<template>
	<div class="item">
		<div class="item__img-wrap">
			<div class="item__img-prev"></div>
			<img class="item__img" :src="itemObj.img2" alt="">
			<div class="item__img-next"></div>
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
			</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props: ['itemObj']
	}
</script>