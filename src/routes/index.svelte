<script lang="ts">
	//   import BabScene from "../components/BabScene";
	import BabyBackground from '../components/BabyBackgound.svelte';
	import Accordion from '../components/Accordion.svelte';
	import HireList from '../components/HireList.svelte';
	import PortfolioList from '../components/PortfolioList.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let showing = false;
	onMount(() => {
		showing = true;
	});

	import { i18n, i18nString } from 'typesafe-i18n';

	type Locales = 'en' | 'de' | 'it';

	const localeTranslations = {
		en: { TODAY: 'Today is {date|weekday}' },
		de: { TODAY: 'Heute ist {date|weekday}' },
		it: { TODAY: 'Oggi è {date|weekday}' }
	};

	const initFormatters = (locale: Locales) => {
		const dateFormatter = new Intl.DateTimeFormat(locale, { weekday: 'long' });

		return {
			weekday: (value: Date | number) => dateFormatter.format(value)
		};
	};

	const formatters = {
		en: initFormatters('en'),
		de: initFormatters('de'),
		it: initFormatters('it')
	};

	const L = i18n(localeTranslations, formatters);

	const now = new Date();
</script>

<svelte:head>
	<title>Romain Glé</title>
</svelte:head>
<BabyBackground />
<!-- <div class="content" transition:fly={{duration:1000}}> -->
<!-- {L.en.TODAY({ date: now })} -->
<!-- {L.de.TODAY({ date: now })} -->
<!-- {L.it.TODAY({ date: now })} -->
<div class="content" class:showing>
	<div class="intro">
		<h1>
			<p>Bonjour, je m&#39;appelle Romain Gl&eacute;.</p>
			J'aide les entreprises et organisations dans le succ&egrave;s de leurs
			<span class="frontcolor">produits,</span>
			leurs
			<span class="frontcolor">marques,</span>
			et leurs
			<span class="frontcolor" style="white-space: nowrap">exp&eacute;riences.</span>
		</h1>
		<!-- <h1>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z ? , . ; / : + = 0 1 2 3 4 5 6 7 8 9 0 é è $ €</h1> -->
	</div>
	<PortfolioList />
	<HireList />
</div>

<style>
	.intro {
		/* width: 80vw; */
		margin: 8rem 0 10rem 0;
	}
	p {
		font-size: 1rem;
		font-family: 'Raleway', Helvetica, Arial, sans-serif;
	}

	.content {
		z-index: 9000;
		position: relative;
		opacity: 0;
		transition: opacity 1s;
	}
	.showing {
		opacity: 1;
	}
	@media (max-width: 400px) {
		p {
			line-height: 1.4;
		}
	}
</style>
