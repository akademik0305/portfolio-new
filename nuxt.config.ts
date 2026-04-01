// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		optimizeDeps: {
			include: ["@vue/devtools-core", "@vue/devtools-kit"],
		},
	},
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["~/assets/sass/style.sass"],

	modules: ["nuxt-swiper", "@nuxtjs/i18n"],

	i18n: {
		locales: [
			{ code: "en", name: "EN", file: "en.json" },
			{ code: "uz", name: "UZ", file: "uz.json" },
			{ code: "ru", name: "RU", file: "ru.json" },
		],
		defaultLocale: "en",
		strategy: "prefix_except_default",
		detectBrowserLanguage: false,
	},
})
