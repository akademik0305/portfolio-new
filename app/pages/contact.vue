<script lang="ts" setup>
//===============================-< imports >-===============================
// locale
const { t } = useI18n()
</script>
<template>
	<main class="contact">
		<div class="container">
			<Breadcump :title="t('contacts-title')" :desc="t('contacts-subtitle')" />

			<!-- main -->
			<section class="contact__main">
				<div class="contact__row">
					<p class="contact__text">
						{{ t('contact-text') }}
					</p>

					<div class="contact__infos">
						<div class="contact-info">
							<h5 class="contact-info__title">{{ t('support-me') }}</h5>
							<div class="contact-info__item">
								<p class="contact-info__text">4149500120690030</p>
							</div>
						</div>
						<div class="contact-info">
							<h5 class="contact-info__title">{{ t('message-me') }}</h5>
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
				</div>
			</section>
			<!-- main -->

			<!-- media -->
			<section class="media">
				<h2 class="media__title main-title main-title--no-line">
					<span>#</span>{{ t('all-media') }}
				</h2>

				<div class="media__row">
					<div class="media-item">
						<div class="media-item__row">
							<div class="media-item__icon">
								<img src="~/assets/images/svg/email.svg" alt="email" />
							</div>
							<p class="media-item__name">{{ t('social-handle-1') }}</p>
						</div>
					</div>
					<div class="media-item">
						<div class="media-item__row">
							<div class="media-item__icon">
								<img src="~/assets/images/svg/email.svg" alt="email" />
							</div>
							<p class="media-item__name">{{ t('social-handle-2') }}</p>
						</div>
					</div>
				</div>
			</section>
			<!-- media -->
		</div>
	</main>
</template>
<style></style>
