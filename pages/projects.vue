<script lang="ts" setup></script>
<template>
	<main class="projects">
		<div class="container">
			<Breadcump title="projects" desc="List of my projects" />

			<!-- completed projects -->
			<section class="completed">
				<h3 class="completed__title main-title main-title--no-line">
					<span>#</span>complete-apps
				</h3>
				<div class="completed__row">
					<article class="project" v-for="i in 4" :key="i">
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
							<a href="#" class="project__demo">Live <~></a>
						</div>
					</article>
				</div>
			</section>
			<!-- completed projects -->

			<!-- small projects -->
			<div class="small">
				<h3 class="small__title main-title main-title--no-line">
					<span>#</span>small-projects
				</h3>
				<div class="small__row">
					<div class="small-project" v-for="item in 7" :key="item">
						<div class="small-project__stacks">
							<h6 class="small-project__stack">Discord.js</h6>
							<h6 class="small-project__stack">TS</h6>
							<h6 class="small-project__stack">JS</h6>
						</div>
						<div class="small-project__main">
							<h4 class="small-project__name">Bot boilerplate</h4>
							<p class="small-project__desc">
								Start creating scalable discord.js bot with typescript in
								seconds
							</p>
							<NuxtLink to="/projects" class="small-project__demo">
								Figma <~>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
			<!-- small projects -->
		</div>
	</main>
</template>
<style></style>
