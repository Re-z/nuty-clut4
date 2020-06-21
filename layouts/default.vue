<template>
	<div class="main-wrap">
		<Heading></Heading>
		<PromoFirst></PromoFirst>
		<PromoSecond></PromoSecond>

		<nuxt/>


	</div>
</template>
<script>

import Heading from '@/components/header';
import PromoFirst from '@/components/promo-first';
import PromoSecond from '@/components/promo-second';

export default {
	components: {
		Heading,
		PromoFirst,
		PromoSecond
	}
}
</script>