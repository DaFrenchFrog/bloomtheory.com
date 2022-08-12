<script>
	import { page } from '$app/stores';
	import Intro from '../../components/portfolio/Intro.svelte';
	import FolioImage from '../../components/portfolio/FolioImage.svelte';
	import Text from '../../components/portfolio/Text.svelte';
	import Statement from '../../components/portfolio/Statement.svelte';
	import PortfolioList from '../../components/PortfolioList.svelte';

	import { folioData, imageType, txtColor, bgColor } from '../../components/store.ts';
	//   import { stores } from "@sapper/app";
	import { fade, fly } from 'svelte/transition';

	//   const { page } = stores();
	let data;
	$folioData.forEach((element) => {
		if (element.projectUrl == $page.url.pathname) data = element;
	});
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<article in:fly={{ duration: 1000 }}>
	<Intro tags={data.tags}>
		<span slot="client">{data.client}</span>
		<span slot="title">{data.title}</span>
		<span slot="content">
			Sinnaps est une plateforme de services dédiée au secteur de l'IRD. Dans le cadre d'une refonte
			globale j'ai travaillé sur la gestion des interventions sur site suite à un sinistre.
		</span>
	</Intro>
	<FolioImage type={$imageType.H} src={data.assets + 'mockup.jpg'}>
		Écran d'accueil de la plateforme vue prestataire.
	</FolioImage>
	<Statement>Un code couleur propre à chaque phase de l'intervention.</Statement>
	<FolioImage type={$imageType.H} src={data.assets + 'colorboard.jpg'} />
	<Text>
		<span slot="title"> Chaque intervention est gérée via un principe de timeline. </span>
		<p>
			Le nombre et le type d'étapes de chaque intervention peut grandement varier. Le principe de
			timeline avec des cartes extensibles permet à la fois une vue de l'historique rapide et une
			grande flexibilité pour les futures évolutions. Chaque évènement est formalisé par une carte
			qui contiendra toutes les informations nécessaires, et lorsqu'un nouvel évènement survient la
			carte passe en format réduit afin de rester accessible sans occuper une place inutile.
		</p>
	</Text>
	<FolioImage type={$imageType.H} src={data.assets + 'exemple.jpg'}>
		Exemple d'une intervention terminée.
	</FolioImage>
	<Statement>Différents états sont possibles pour chaque carte d'étape.</Statement>
	<FolioImage type={$imageType.V} src={data.assets + 'cartes.jpg'} />
	<FolioImage type={$imageType.H} src={data.assets + 'popins.jpg'}>
		Un panneau latéral apparait afin de saisir ou modifier les informations des cartes.
	</FolioImage>
	<FolioImage type={$imageType.SMALL} src={data.assets + 'sablier.gif'} />
	<Text>
		<span slot="title">Une procédure simple... en apparence uniquement</span>
		<p>
			Nous avons dans le cadre des premières releases réduit le périmètre de l'intervention de la
			plateforme aux mission de réparation de plomberie. Cela nous a permis de simplifier grandement
			la gestion des parcours utilisateurs et de valider et mettre en production plus rapidement les
			premières releases.
		</p>
	</Text>
	<FolioImage type={$imageType.H} src={data.assets + 'flow.jpg'}>
		Parcours simplifié d'une procédure d'intervention.
	</FolioImage>
</article>
<PortfolioList container="project" />

<style>
	p {
		margin-top: 0;
	}
</style>
