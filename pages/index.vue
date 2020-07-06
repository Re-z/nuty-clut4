<template>
	<div class="main-wrap">
		<Intro></Intro>
		<Items></Items>
		<Popular></Popular>
	</div>
</template>

<script lang="ts">
import Intro from '@/components/intro.vue';
import Items from '@/components/items.vue';
import Popular from '@/components/popular.vue';
export default {
	components: {
		Intro,
		Items,
	
		Popular
	}
}
</script>