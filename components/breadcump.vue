<script lang="ts" setup>
//props
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true
	}
})
</script>
<template>
	<div class="breadcump">
		<h2 class="breadcump__title"><span>/</span>{{ props.title }}</h2>
		<p class="breadcump__desc">{{ props.desc }}</p>
	</div>
</template>
<style></style>
