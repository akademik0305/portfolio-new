<script lang="ts" setup>
//props
const props = defineProps({
	title: {
		type: String,
		default: "Languages",
	},
	items: {
		type: Array,
		required: true,
	},
});

//===============================-< imports >-===============================
// locale
const { t } = useI18n()
</script>
<template>
	<div class="skill">
		<h4 class="skill__title">{{ props.title }}</h4>
		<div class="skill__main">
			<h5 class="skill__name" v-for="(item, index) in props.items" :key="index">
				{{ item }}
			</h5>
		</div>
	</div>
</template>
<style></style>
