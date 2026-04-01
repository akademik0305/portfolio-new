<script lang="ts" setup>
const { t } = useI18n()

const completeProjects = [
	{
		name: "ChertNodes",
		desc: "Minecraft server hosting platform",
		stacks: ["HTML", "SCSS", "Python", "Flask"],
		demo: "https://chertnodes.com",
	},
	{
		name: "TaskFlow",
		desc: "Team task management web app",
		stacks: ["Vue.js", "Node.js", "PostgreSQL"],
		demo: "#",
	},
	{
		name: "CryptoTrack",
		desc: "Real-time crypto price tracker",
		stacks: ["Nuxt.js", "TypeScript", "REST API"],
		demo: "#",
	},
	{
		name: "DevBlog",
		desc: "Developer blog with markdown support",
		stacks: ["Nuxt.js", "TailwindCSS", "Supabase"],
		demo: "#",
	},
]

const smallProjects = [
	{
		name: "discord-bot-boilerplate",
		desc: "Scalable Discord.js bot starter with TypeScript",
		stacks: ["Discord.js", "TypeScript"],
		demo: "#",
	},
	{
		name: "vue-modal-plugin",
		desc: "Lightweight modal component for Vue 3",
		stacks: ["Vue.js", "TypeScript"],
		demo: "#",
	},
	{
		name: "nuxt-auth-starter",
		desc: "Nuxt 3 authentication boilerplate with JWT",
		stacks: ["Nuxt.js", "JWT"],
		demo: "#",
	},
	{
		name: "csv-to-json-cli",
		desc: "CLI tool to convert CSV files to JSON",
		stacks: ["Node.js", "JavaScript"],
		demo: "#",
	},
	{
		name: "weather-widget",
		desc: "Embeddable weather widget using OpenWeather API",
		stacks: ["JavaScript", "CSS"],
		demo: "#",
	},
	{
		name: "pomodoro-timer",
		desc: "Minimalist Pomodoro productivity timer",
		stacks: ["Vue.js", "TypeScript"],
		demo: "#",
	},
	{
		name: "color-palette-gen",
		desc: "Random accessible color palette generator",
		stacks: ["JavaScript", "Canvas API"],
		demo: "#",
	},
]
</script>

<template>
	<main class="projects">
		<div class="container">
			<Breadcump :title="t('projects-title')" :desc="t('projects-subtitle')" />

			<!-- completed projects -->
			<section class="completed">
				<h3 class="completed__title main-title main-title--no-line">
					<span>#</span>{{ t("complete-apps") }}
				</h3>
				<div class="completed__row">
					<article
						class="project"
						v-for="project in completeProjects"
						:key="project.name"
					>
						<div class="project__image">
							<img src="~/assets/images/jpg/project.jpg" :alt="project.name" />
						</div>
						<div class="project__stacks">
							<h5
								class="project__stack"
								v-for="stack in project.stacks"
								:key="stack"
							>
								{{ stack }}
							</h5>
						</div>
						<div class="project__main">
							<h3 class="project__name">{{ project.name }}</h3>
							<p class="project__desc">{{ project.desc }}</p>
						</div>
						<div class="project__footer">
							<a :href="project.demo" class="project__demo">{{
								t("live-demo")
							}}</a>
						</div>
					</article>
				</div>
			</section>

			<!-- small projects -->
			<div class="small">
				<h3 class="small__title main-title main-title--no-line">
					<span>#</span>{{ t("small-projects") }}
				</h3>
				<div class="small__row">
					<div
						class="small-project"
						v-for="project in smallProjects"
						:key="project.name"
					>
						<div class="small-project__stacks">
							<h6
								class="small-project__stack"
								v-for="stack in project.stacks"
								:key="stack"
							>
								{{ stack }}
							</h6>
						</div>
						<div class="small-project__main">
							<h4 class="small-project__name">{{ project.name }}</h4>
							<p class="small-project__desc">{{ project.desc }}</p>
							<a :href="project.demo" class="small-project__demo"> Live <~> </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
