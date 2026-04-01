<script lang="ts" setup>
//===============================-< imports >-===============================
// locale
const { locale, locales, setLocale, t } = useI18n();
const localePath  = useLocalePath();

//===============================-< burger >-===============================
//> variables
let isBurgerOpen = ref(false);
//> functions

//===============================-< language >-===============================
//> variables
const isLangOpen = ref(false)

//> functions
const selectLang = (lang: any) => {
	setLocale(lang.code)
	isLangOpen.value = false
}
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
							<NuxtLink :to="localePath('/')" class="navbar-menu__link active"
								><span>#</span>{{ t('home') }}</NuxtLink
							>
						</li>
						<li class="navbar-menu__item">
							<NuxtLink :to="localePath('/projects')" class="navbar-menu__link"
								><span>#</span>{{ t('works') }}</NuxtLink
							>
						</li>
						<li class="navbar-menu__item">
							<NuxtLink :to="localePath('/about')" class="navbar-menu__link"
								><span>#</span>{{ t('about-me') }}</NuxtLink
							>
						</li>
						<li class="navbar-menu__item">
							<NuxtLink :to="localePath('/contact')" class="navbar-menu__link"
								><span>#</span>{{ t('contacts') }}</NuxtLink
							>
						</li>
					</ul>
					<!-- menu -->

					<div class="navbar-lang" @click="isLangOpen = !isLangOpen">
						<div class="navbar-lang__row">
							<h3 class="navbar-lang__name">{{ locale.toUpperCase() }}</h3>
							<img
								class="navbar-lang__icon"
								:class="{ rotated: isLangOpen }"
								src="~/assets/images/svg/arrow-down.svg"
								alt="change language"
							/>
						</div>
						<div v-if="isLangOpen" class="navbar-lang__dropdown">
							<div
								v-for="lang in locales"
								:key="lang.code"
								class="navbar-lang__option"
								@click.stop="selectLang(lang)"
							>
								{{ lang.name }}
							</div>
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
								:to="localePath('/')"
								class="burger-menu__link"
								@click="isBurgerOpen = false"
								><span>#</span>{{ t('home') }}</NuxtLink
							>
						</li>
						<li class="burger-menu__item">
							<NuxtLink
								:to="localePath('/projects')"
								class="burger-menu__link"
								@click="isBurgerOpen = false"
								><span>#</span>{{ t('works') }}</NuxtLink
							>
						</li>
						<li class="burger-menu__item">
							<NuxtLink
								:to="localePath('/about')"
								class="burger-menu__link"
								@click="isBurgerOpen = false"
								><span>#</span>{{ t('about-me') }}</NuxtLink
							>
						</li>
						<li class="burger-menu__item">
							<NuxtLink
								:to="localePath('/contact')"
								class="burger-menu__link"
								@click="isBurgerOpen = false"
								><span>#</span>{{ t('contacts') }}</NuxtLink
							>
						</li>
					</ul>
					<!-- main -->
					<!-- language -->
					<div class="burger-lang" @click="isLangOpen = !isLangOpen">
						<div class="burger-lang__row">
							<h3 class="burger-lang__name">{{ locale.toUpperCase() }}</h3>
							<img
								class="burger-lang__icon"
								:class="{ rotated: isLangOpen }"
								src="~/assets/images/svg/arrow-down.svg"
								alt="change language"
							/>
						</div>
						<div v-if="isLangOpen" class="burger-lang__dropdown">
							<div
								v-for="lang in locales"
								:key="lang.code"
								class="burger-lang__option"
								@click.stop="selectLang(lang)"
							>
								{{ lang.name }}
							</div>
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
<style>
.navbar-lang {
	position: relative;
	cursor: pointer;
}

.navbar-lang__dropdown {
	position: absolute;
	top: 100%;
	right: 0;
	background: #282C33;
	border: 1px solid #ABB2BF;
	border-radius: 4px;
	min-width: 60px;
	z-index: 10;
}

.navbar-lang__option {
	padding: 8px 12px;
	cursor: pointer;
	color: #ABB2BF;
	transition: all 0.3s;
}

.navbar-lang__option:hover {
	background: #C778DD;
	color: #FFFFFF;
}

.burger-lang {
	position: relative;
	cursor: pointer;
}

.burger-lang__dropdown {
	position: absolute;
	top: 100%;
	right: 0;
	background: #282C33;
	border: 1px solid #ABB2BF;
	border-radius: 4px;
	min-width: 80px;
	z-index: 10;
}

.burger-lang__option {
	padding: 12px 16px;
	cursor: pointer;
	color: #ABB2BF;
	transition: all 0.3s;
		font-size: 20px;
	color: #FFFFFF;
}

.rotated {
	transform: rotate(180deg);
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
	.burger-lang__dropdown {
		position: static;
		margin-top: 16px;
		min-width: 100%;
		border: none;
		background: transparent;
	}

	.burger-lang__option {
		padding: 16px 0;
		font-size: 22px;
		border-bottom: 1px solid #ABB2BF;
		text-align: center;
	}

	.burger-lang__option:last-child {
		border-bottom: none;
	}

	.burger-lang__option:hover {
		background: rgba(199, 120, 221, 0.1);
		border-bottom-color: #C778DD;
	}
}
</style>
