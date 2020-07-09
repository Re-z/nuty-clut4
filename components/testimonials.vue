<template>
	<div class="testi section-centered">
		<div class="testi__box">
			<h2 class="section-title">Последние комментарии</h2>
			<div class="testi__wrap">
				<blockquote 
					class="testi__item"
					v-for="item in items"
					:key="item.author"
				>
					<img class="testi__img" :src="item.img" :alt="item.author">
					<p class="testi__author">{{item.author}}</p>
					<time class="testi__time">{{item.time}}</time>
					<p class="testi__comment">{{item.comment}}</p>
				</blockquote>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	data() {
		return {
			items: [
				{
					img: 'https://www.placecage.com/100/100',
					author: 'Ivan',
					time: '15.07.2020 в 20:50',
					comment: 'Классная сумочка, мне очень понравилась. Тем более за такие деньги.'
				},
				{
					img: 'https://www.placecage.com/100/101',
					author: 'Anton',
					time: '15.07.2021 в 20:50',
					comment: 'Cegth'
				},
				{
					img: 'https://www.placecage.com/100/102',
					author: 'Anton2',
					time: '15.07.2021 в 20:50',
					comment: 'Cegth'
				},
				// {
				// 	img: 'https://www.placecage.com/100/103',
				// 	author: 'Anton3',
				// 	time: '15.07.2021 в 20:50',
				// 	comment: 'Cegth'
				// },
			]
		}
	}	
}
</script>