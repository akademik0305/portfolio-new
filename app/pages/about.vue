<script lang="ts" setup>
//===============================-< imports >-===============================
// locale
const { t } = useI18n()
</script>
<template>
	<main class="about">
		<div class="container">
			<Breadcump :title="t('about-title')" :desc="t('about-subtitle')" />

			<!-- about main -->
			<div class="about__main">
				<div class="home-about__row">
					<div class="home-about__main">
						<p class="home-about__text">{{ t("about-greeting") }}</p>
						<p class="home-about__text">
							{{ t("about-text-1") }}
						</p>
						<p class="home-about__text">
							{{ t("about-text-2") }}
						</p>
					</div>
					<div class="home-about__image">
						<img src="~/assets/images/png/about-img.png" alt="about" />
					</div>
				</div>
			</div>
			<!-- about main -->

			<!-- skills -->
			<!-- skills -->
			<section class="about-skills">
				<h2 class="about-skills__title main-title main-title--no-line">
					<span>#</span>{{ t("skills") }}
				</h2>
				<div class="about-skills__row">
					<Skill
						title="Languages"
						:items="['TypeScript', 'JavaScript', 'Python']"
					/>
					<Skill
						title="Frameworks"
						:items="['Vue.js', 'Nuxt.js', 'Node.js', 'TailwindCSS', 'Express']"
					/>
					<Skill
						title="Databases"
						:items="['PostgreSQL', 'MongoDB', 'Redis']"
					/>
					<Skill title="Tools" :items="['VS Code', 'Git', 'Docker']" />
					<Skill title="Other" :items="['REST API', 'GraphQL', 'WebSockets']" />
				</div>
			</section>
			<!-- skills -->

			<!-- facts -->
			<section class="facts">
				<h2 class="facts__title main-title main-title--no-line">
					<span>#</span>{{ t("my-fun-facts") }}
				</h2>

				<div class="facts__row">
					<div class="facts__main">
						<p class="fact">{{ t("fact-1") }}</p>
						<p class="fact">
							{{ t("fact-2-prefix") }}
							<span>{{ t("fact-2-highlight-1") }}</span>
							{{ t("fact-2-middle") }}
							<span>{{ t("fact-2-highlight-2") }}</span>
							{{ t("fact-2-suffix") }}
						</p>
						<p class="fact">{{ t("fact-3") }}</p>
						<p class="fact">{{ t("fact-4") }}</p>
					</div>

					<div class="facts__image">
						<img src="~/assets/images/png/facts.png" alt="image" />
					</div>
				</div>
			</section>
			<!-- facts -->
		</div>
	</main>
</template>
<style></style>
