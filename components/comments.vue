<template>
	<div class="comments">
		<h2 class="section-title">Отзывы о товаре</h2>

		<div class="comments__box">

			<div class="comments__left">
				<div class="comments__yes"
					v-if="item.comments">
					<blockquote
						class="comment"
						v-for="(comment,index) in item.comments"
						:key="index">
						<img src="https://www.placecage.com/100/100" alt="">
						<h3>{{comment.author}} <span>оценил в <span>{{comment.rating}}</span> из 5</span></h3>
						<time>{{comment.time}}</time>
						<p>{{comment.text}}</p>
					</blockquote>
				</div>
				<div 
					class="comments__no"
					v-else>
					<p>Нету отзывов на этот товар</p>
				</div>

				
			</div>
			<div class="comments__right">
				<form action="" class="comments__form">
					<!-- <h2>Оцените товар</h2> -->
					<p class="comments__rating">
						<span>Рейтинг:</span> 
						<productRating></productRating>
					</p>
					<input 
						v-model.trim="name" 
						required 
						class="comments__name" 
						placeholder="Представтесь, пожалуйста">
					<textarea 
						v-model.trim="text"
						required class="comments__text"
						placeholder="Ваш комментарий" 
						name=""
						cols="30"
						rows="5">
					</textarea>
					<button 
						class="btn btn_med btn_gold"
						@click="submitComment"
						>
						Отправить
					</button>
					
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import productRating from '@/components/product/productRating';
	export default {
		data() {
			return {
				name: '',
				text: ''
			}
		},
		computed: {
			getInfoPopup() {
				return this.$store.getters.getInfoPopup;
			}
		},
		methods: {
			submitComment(ev) {
				if(this.name && this.text) {
					const popupData = {
						isVisible: true,
						title: 'Спасибо за отзыв!',
						text: 'Ваш комментарий отправлен на модерацию и вскоре будет опубликован.'
					}
					ev.preventDefault(); //prevent page reload
					//imitation of loading
					setTimeout(() => {
						this.$store.commit('setInfoPopup', popupData);
						this.name = this.text = ''; //reset form fields
					}, 1500)
					
				}

			}
		},
		components: {
			productRating
		},
		props: [
			'item'
		]
	}
</script>