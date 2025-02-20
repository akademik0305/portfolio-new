<script lang="ts" setup>
import { NuxtLink } from "#components";

//===============================-< burger >-===============================
//> variables
let isBurgerOpen = ref(false);
//> functions
</script>
<template>
	<nav class="navbar">
		<div class="container">
			<section class="navbar__row">
				<!-- logo -->
				<div class="navbar__logo">
					<img src="~/assets/images/svg/logo.svg" alt="logo" />
					<h3>Elias</h3>
				</div>
				<!-- logo -->

				<div class="navbar__right">
					<!-- menu -->
					<ul class="navbar__menu navbar-menu">
						<li class="navbar-menu__item">
							<NuxtLink to="/" class="navbar-menu__link active"
								><span>#</span>home</NuxtLink
							>
						</li>
						<li class="navbar-menu__item">
							<NuxtLink to="/projects" class="navbar-menu__link"
								><span>#</span>works</NuxtLink
							>
						</li>
						<li class="navbar-menu__item">
							<NuxtLink to="/about" class="navbar-menu__link"
								><span>#</span>about-me</NuxtLink
							>
						</li>
						<li class="navbar-menu__item">
							<NuxtLink to="/contact" class="navbar-menu__link"
								><span>#</span>contacts</NuxtLink
							>
						</li>
					</ul>
					<!-- menu -->

					<div class="navbar-lang">
						<div class="navbar-lang__row">
							<h3 class="navbar-lang__name">En</h3>
							<img
								class="navbar-lang__icon"
								src="~/assets/images/svg/arrow-down.svg"
								alt="change language"
							/>
						</div>
					</div>

					<!-- burger toggle -->
					<button class="navbar__burger" @click="isBurgerOpen = true">
						<img src="~/assets/images/svg/burger.svg" alt="open menu" />
					</button>
				</div>
			</section>
		</div>

		<!-- burger -->
		<div class="burger" :class="{ open: isBurgerOpen }">
			<div class="burger__main">
				<div class="burger__head">
					<div class="burger__logo">
						<img src="~/assets/images/svg/logo.svg" alt="logo" />
						<h3>Elias</h3>
					</div>
					<button class="burger__close" @click="isBurgerOpen = false">
						<img src="~/assets/images/svg/close.svg" alt="close menu" />
					</button>
				</div>
				<div class="burger__center">
					<!-- main -->
					<ul class="burger-menu">
						<li class="burger-menu__item">
							<NuxtLink
								to="/"
								class="burger-menu__link"
								@click="isBurgerOpen = false"
								><span>#</span>home</NuxtLink
							>
						</li>
						<li class="burger-menu__item">
							<NuxtLink
								to="/projects"
								class="burger-menu__link"
								@click="isBurgerOpen = false"
								><span>#</span>works</NuxtLink
							>
						</li>
						<li class="burger-menu__item">
							<NuxtLink
								to="/about"
								class="burger-menu__link"
								@click="isBurgerOpen = false"
								><span>#</span>about-me</NuxtLink
							>
						</li>
						<li class="burger-menu__item">
							<NuxtLink
								to="/contact"
								class="burger-menu__link"
								@click="isBurgerOpen = false"
								><span>#</span>contacts</NuxtLink
							>
						</li>
					</ul>
					<!-- main -->
					<!-- language -->
					<div class="burger-lang">
						<div class="burger-lang__row">
							<h3 class="burger-lang__name">En</h3>
							<img
								class="burger-lang__icon"
								src="~/assets/images/svg/arrow-down.svg"
								alt="change language"
							/>
						</div>
					</div>
					<!-- language -->
				</div>

				<!-- socials -->
				<div class="burger-socials">
					<div class="burger-socials__row">
						<a href="" class="burger-socials__item">
							<img src="~/assets/images/svg/github.svg" alt="github" />
						</a>
						<a href="" class="burger-socials__item">
							<img src="~/assets/images/svg/figma.svg" alt="github" />
						</a>
						<a href="" class="burger-socials__item">
							<img src="~/assets/images/svg/discord.svg" alt="github" />
						</a>
					</div>
				</div>
				<!-- socials -->
			</div>
		</div>
	</nav>
</template>
<style></style>
