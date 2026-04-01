<script lang="ts" setup>
//===============================-< imports >-===============================
// locale
const { t } = useI18n()

//===============================-< projects swiper >-===============================
//> variables
const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
	breakpoints: {
		320: {
			slidesPerView: 1.1,
		},
		640: {
			slidesPerView: 2,
		},
	},
	spaceBetween: 16,
	autoplay: {
		delay: 300,
	},
	loop: true,
	modules: [],
})

//> functions
</script>
<template>
	<main class="home">
		<!-- header -->
		<header class="header">
			<div class="container">
				<div class="header__row">
					<!-- header left -->
					<div class="header__left">
						<h1 class="header__title">
							{{ t("web-designer-prefix") }}
							<span>{{ t("web-designer-highlight-1") }}</span>
							{{ t("web-designer-middle") }}
							<span>{{ t("web-designer-highlight-2") }}</span>
						</h1>
						<p class="header__desc">
							{{ t("hero-desc") }}
						</p>
						<button class="header__contact">{{ t("contact-me") }}</button>
					</div>
					<!-- header left -->

					<!-- header right -->
					<div class="header__right">
						<div class="header__image">
							<img
								src="~/assets/images/png/header-img.png"
								alt="header image"
							/>
						</div>

						<div class="header-work">
							<div class="header-work__row">
								<span class="header-work__icon"></span>
								<h4 class="header-work__title">
									{{ t("currently-working-prefix") }}
									<span>{{ t("currently-working-highlight") }}</span>
									{{ t("currently-working-suffix") }}
								</h4>
							</div>
						</div>
					</div>
					<!-- header right -->
				</div>

				<!-- quote -->
				<div class="quote">
					<div class="quote__top">
						<h2 class="quote__text quote__text--medium">
							{{ t("quote") }}
						</h2>
						<div class="quote__icon">
							<img src="~/assets/images/svg/quote.svg" alt="quote" />
						</div>
					</div>
					<div class="quote__author">
						<h2 class="quote__text">{{ t("quote-author") }}</h2>
						<div class="quote__icon quote__icon--bottom">
							<img src="~/assets/images/svg/quote.svg" alt="quote" />
						</div>
					</div>
				</div>
				<!-- quote -->
			</div>
		</header>
		<!-- header -->

		<!-- projects -->
		<section class="home-projects">
			<div class="container">
				<!-- head -->
				<div class="home-projects__head">
					<h2 class="home-projects__title main-title">
						<span>#</span>{{ t("projects") }}
						<!--<span class="main-title__line"></span>-->
					</h2>
					<a href="#" class="home-projects__all all-btn"
						>{{ t("view-all-prefix") }}
						<span>{{ t("view-all-arrow") }}</span></a
					>
				</div>
				<!-- head -->
				<!-- main -->
				<div class="home-projects__main">
					<Project
						v-for="project in [
							{ name: 'JS' },
							{ name: 'JS' },
							{ name: 'JS' },
							{ name: 'JS' },
						]"
						:key="project.name"
						:project="project"
					/>
				</div>

				<div class="home-projects__swiper">
					<swiper-container ref="containerRef">
						<swiper-slide
							v-for="project in [
								{ name: 'JS' },
								{ name: 'JS' },
								{ name: 'JS' },
								{ name: 'JS' },
							]"
							:key="project.name"
						>
							<Project :project="project" />
						</swiper-slide>
					</swiper-container>
				</div>
				<!-- main -->
			</div>
		</section>
		<!-- projects -->

		<!-- skills -->
		<div class="home-skills">
			<div class="container">
				<div class="home-skills__head">
					<h2 class="home-skills__title main-title">
						<span>#</span>{{ t("skills") }}
					</h2>
				</div>
				<div class="home-skills__row">
					<div class="home-skills__image">
						<img src="~/assets/images/png/skills-img.png" alt="skills" />
					</div>
					<div class="home-skills__main">
						<div class="home-skills__col">
							<div class="skill">
								<h4 class="skill__title">{{ t("languages") }}</h4>
								<div class="skill__main">
									<h5 class="skill__name">TypeScript</h5>
									<h5 class="skill__name">JavaScript</h5>
									<h5 class="skill__name">Python</h5>
								</div>
							</div>
						</div>
						<div class="home-skills__col">
							<div class="skill">
								<h4 class="skill__title">{{ t("databases") }}</h4>
								<div class="skill__main">
									<h5 class="skill__name">PostgreSQL</h5>
									<h5 class="skill__name">MongoDB</h5>
									<h5 class="skill__name">Redis</h5>
								</div>
							</div>
							<div class="skill">
								<h4 class="skill__title">{{ t("other") }}</h4>
								<div class="skill__main">
									<h5 class="skill__name">REST API</h5>
									<h5 class="skill__name">GraphQL</h5>
									<h5 class="skill__name">WebSockets</h5>
								</div>
							</div>
						</div>
						<div class="home-skills__col">
							<div class="skill">
								<h4 class="skill__title">{{ t("tools") }}</h4>
								<div class="skill__main">
									<h5 class="skill__name">VS Code</h5>
									<h5 class="skill__name">Git</h5>
									<h5 class="skill__name">Docker</h5>
								</div>
							</div>
							<div class="skill">
								<h4 class="skill__title">Frameworks</h4>
								<div class="skill__main">
									<h5 class="skill__name">Vue.js</h5>
									<h5 class="skill__name">Nuxt.js</h5>
									<h5 class="skill__name">Node.js</h5>
									<h5 class="skill__name">TailwindCSS</h5>
									<h5 class="skill__name">Express</h5>
								</div>
							</div>
						</div>
						<div class="home-skills__all">
							<Skill
								title="Languages"
								:items="['TypeScript', 'JavaScript', 'Python']"
							/>
							<Skill
								title="Databases"
								:items="['PostgreSQL', 'MongoDB', 'Redis']"
							/>
							<Skill title="Tools" :items="['VS Code', 'Git', 'Docker']" />
							<Skill
								title="Frameworks"
								:items="[
									'Vue.js',
									'Nuxt.js',
									'Node.js',
									'TailwindCSS',
									'Express',
								]"
							/>
							<Skill
								title="Other"
								:items="['REST API', 'GraphQL', 'WebSockets']"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- about -->
		<div class="home-about">
			<div class="container">
				<div class="home-about__head">
					<h2 class="home-about__title main-title"><span>#</span>about</h2>
				</div>
				<!-- about main -->
				<div class="home-about__row">
					<div class="home-about__main">
						<p class="home-about__text">Hello, i’m Elias!</p>
						<p class="home-about__text">
							I’m a self-taught front-end developer based in Kyiv, Ukraine. I
							can develop responsive websites from scratch and raise them into
							modern user-friendly web experiences.
						</p>
						<p class="home-about__text">
							Transforming my creativity and knowledge into a websites has been
							my passion for over a year. I have been helping various clients to
							establish their presence online. I always strive to learn about
							the newest technologies and frameworks.
						</p>
						<button class="home-about__more">Read more -></button>
					</div>
					<div class="home-about__image">
						<img src="~/assets/images/png/about-img.png" alt="about" />
					</div>
				</div>
				<!-- about main -->
			</div>
		</div>
		<!-- about -->

		<!-- contact -->
		<div class="home-contact">
			<div class="container">
				<div class="home-contact__head">
					<h2 class="home-contact__title main-title"><span>#</span>contact</h2>
				</div>
				<!-- contact main -->
				<div class="home-contact__row">
					<div class="home-contact__text">
						I’m interested in freelance opportunities. However, if you have
						other request or question, don’t hesitate to contact me
					</div>

					<div class="contact-info">
						<h5 class="contact-info__title">Message me here</h5>
						<div class="contact-info__item">
							<div class="contact-info__icon">
								<img src="~/assets/images/svg/discord.svg" alt="discord" />
							</div>
							<p class="contact-info__text">!Elias#3519</p>
						</div>
						<div class="contact-info__item">
							<div class="contact-info__icon">
								<img src="~/assets/images/svg/email.svg" alt="email" />
							</div>
							<p class="contact-info__text">elias@elias.me</p>
						</div>
					</div>
				</div>
				<!-- contact main -->
			</div>
		</div>
	</main>
</template>
<style></style>
