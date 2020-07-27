<template>
	<ul class="breadcrumbs">
			<li><nuxt-link to="/">Главная</nuxt-link></li>
			<li>{{item.name}}</li>
	</ul>

</template>
<script>
export default {
	props: [
		'item'
	]
}
</script>
