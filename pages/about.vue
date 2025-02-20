<script lang="ts" setup></script>
<template>
	<main class="about">
		<div class="container">
			<Breadcump title="about-me" desc="Who am i?" />

			<!-- about main -->
			<div class="about__main">
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
					</div>
					<div class="home-about__image">
						<img src="~/assets/images/png/about-img.png" alt="about" />
					</div>
				</div>
			</div>
			<!-- about main -->

			<!-- skills -->
			<section class="about-skills ">
				<h2 class="about-skills__title main-title main-title--no-line"><span>#</span>skills</h2>
				<div class="about-skills__row">
					<Skill
						v-for="skill in 5"
						title="Language"
						:items="['TypeScript', 'Lua', 'Python', 'JavaScript']"
					/>
				</div>
			</section>
			<!-- skills -->

			<!-- facts -->
			<section class="facts">
				<h2 class="facts__title main-title main-title--no-line">
					<span>#</span>my-fun-facts
				</h2>

				<div class="facts__row">
					<div class="facts__main">
						<p class="fact">I like winter more than summer</p>
						<p class="fact">I often <span>bike</span> with my <span>friends</span></p>
						<p class="fact">I like pizza and pasta</p>
						<p class="fact">I like pizza and pasta</p>
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
