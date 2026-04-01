<script lang="ts" setup>
//===============================-< imports >-===============================
// locale
const { t } = useI18n()
</script>
<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__row">
				<!-- footer info -->
				<div class="footer-info">
					<div class="footer-info__row">
						<div class="footer-info__logo">
							<img src="~/assets/images/svg/logo.svg" alt="logo" />
							<h3>Elias</h3>
						</div>
						<p class="footer-info__email">elias@elias-dev.ml</p>
					</div>
					<p class="footer-info__text">{{ t('web-designer-footer') }}</p>
				</div>
				<!-- footer info -->
				<div class="footer-media">
					<h5 class="footer-media__title">{{ t('media') }}</h5>
					<div class="footer-media__row">
						<a href="" class="footer-media__item">
							<img src="~/assets/images/svg/github.svg" alt="github" />
						</a>
						<a href="" class="footer-media__item">
							<img src="~/assets/images/svg/figma.svg" alt="github" />
						</a>
						<a href="" class="footer-media__item">
							<img src="~/assets/images/svg/discord.svg" alt="github" />
						</a>
					</div>
				</div>
			</div>
			<p class="footer__copy">{{ t('copyright') }}</p>
		</div>
	</footer>
</template>
<style></style>
