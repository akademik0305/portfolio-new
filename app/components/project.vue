<script lang="ts" setup>
//props
const props = defineProps({
	project: {
		type: Object,
		required: true
	}
})

//===============================-< imports >-===============================
// locale
const { t } = useI18n()
</script>
<template>
	<article class="project">
		<div class="project__image">
			<img src="~/assets/images/jpg/project.jpg" alt="project name" />
		</div>
		<div class="project__stacks">
			<h5 class="project__stack">HTML</h5>
			<h5 class="project__stack">SCSS</h5>
			<h5 class="project__stack">Python</h5>
			<h5 class="project__stack">Flask</h5>
		</div>
		<div class="project__main">
			<h3 class="project__name">ChertNodes</h3>
			<p class="project__desc">Minecraft servers hosting</p>
		</div>
		<div class="project__footer">
			<a href="#" class="project__demo">{{ t('live-demo') }}</a>
		</div>
	</article>
</template>
<style></style>
