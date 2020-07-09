<template>
	<div class="main-wrap">
		<Intro></Intro>
		<Items></Items>
		<Popular></Popular>
		<Testimonials></Testimonials>
	</div>
</template>

<script lang="ts">
import Intro from '@/components/intro.vue';
import Items from '@/components/items.vue';
import Popular from '@/components/popular.vue';
import Testimonials from '@/components/testimonials.vue';
export default {
	components: {
		Intro,
		Items,
		Testimonials,
		Popular
	}
}
</script>