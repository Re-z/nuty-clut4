<template>
	<div class="main-wrap">
		<Intro></Intro>
		<Items></Items>
		<Footer></Footer>
	</div>
</template>

<script lang="ts">
import Intro from '@/components/intro.vue';
import Items from '@/components/items.vue';
import Footer from '@/components/footer.vue';
export default {
	components: {
		Intro,
		Items,
		Footer
	}
}
</script>