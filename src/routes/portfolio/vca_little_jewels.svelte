<script>
	import { page } from '$app/stores';
	import Intro from '../../components/portfolio/Intro.svelte';
	import FolioImage from '../../components/portfolio/FolioImage.svelte';
	import Text from '../../components/portfolio/Text.svelte';
	import { folioData, imageType, bgColor } from '../../components/store.ts';
	// import { stores } from '@sapper/app';
	import PortfolioList from '../../components/PortfolioList.svelte';
	import { fade } from 'svelte/transition';

	// const { page } = stores();
	let data;

	$folioData.forEach((element) => {
		if (element.projectUrl == $page.url.pathname) data = element;
	});

	let count = 0;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<article in:fade={{ duration: 1000 }}>
	<Intro tags={data.tags}>
		<span slot="client">{data.client}</span>
		<span slot="title">{data.title}</span>
		<span slot="content">
			Van Cleef & Arpels nous a interrogé afin d'explorer des pistes afin d'améliorer l'expérience
			des parents en visite dans les boutiques. Ces lieux luxueux sont généralement peu adaptés aux
			enfants et ils peuvent rapidement s'ennuyer rendant l'expérience compliquée pour l'ensemble
			des personas.
		</span>
	</Intro>
	<FolioImage type={$imageType.H} src={data.assets + 'journeymap.jpg'} />
	<Text>
		<span slot="title"> Se focaliser sur l'expérience de l'enfant, quel que soit son âge </span>
		<p>
			La tendance naturelle serait de penser en premier lieu à la marque pour ensuite imaginer des
			jeux qui la relie aux enfants. Si cette approche peut donner des résultats, les risque est de
			compliquer la mécanique de jeu pour insérer l'univers de marque au détriment du divertissement
			de l'enfant, qui reste la priorité. Nous avons donc choisi de mettre temporairement de côté la
			marque pour nous focaliser sur le divertissement de l'enfant. A son arrivée en boutique
			L'enfant ne se soucie guère de la marque Van Cleef & Arpels. L'enfant est curieux par nature
			et cherche à explorer, imaginer, et créer son envrionnement. Le succès de son expérience en
			boutique ne se fera que par la mise à disposition d'outils lui permettant de créer son propre
			univers et d'interagir avec ce dernier.
		</p>
		<p>
			Une autre contrainte importante à résoudre est le divertissement de l'enfant quel que soit son
			âge, et sa personnalité. Un petit garçon de 4 ans n'a pas les même aspirations qu'une jeune
			fille de 10 ans.
		</p>
	</Text>
	<FolioImage type={$imageType.SMALL} src={data.assets + 'gommettes.jpg'}>
		Un jeu de gommettes associé à une expérience an réalité augmentée pour offrir une expérience
		agréable à tous les âges.
	</FolioImage>
	<Text>
		<span slot="title">
			Notre proposition : mettre l'enfant dans la peau d'un maître joailler.
		</span>
		<p>
			Nous proposons à l'enfant de créer sa propre pièce de joaillerie. Les avantages de ce rôle
			sont multiples : cette activité nécessite calme et concentration, c'est un travail de création
			artistique, l'enfant est parfaitement ancré dans la marque, et c'est un chemin idéal vers la
			découverte des pièces Van Cleef & Arpels.
		</p>
		<p>
			<strong>
				L'enfant peut créer sa pièce de joaillerie en gommettes, puis la découvrir en 3D et en faire
				le personnage principal d'un jeu vidéo.
			</strong>
		</p>
	</Text>
	<FolioImage type={$imageType.SMALL} src={data.assets + 'logo_vca.svg'} />
	<FolioImage type={$imageType.H} src={data.assets + 'gommettes-mockup.jpg'} />
	<FolioImage type={$imageType.H} src={data.assets + 'ipad1.jpg'} />
	<FolioImage type={$imageType.H} src={data.assets + 'ipad3.jpg'}>
		Le modèle est inspiré d'une pièce existante que l'on peut découvrir dans un second temps.
	</FolioImage>
	<FolioImage type={$imageType.H} src={data.assets + 'mockup.jpg'}>
		Un module de création sur Ipad est disponible dans le cas où le collage de gommettes n'est pas
		possible.
	</FolioImage>
	<FolioImage type={$imageType.H} src={data.assets + 'bedroom.jpg'} />
	<Text>
		<span slot="title"> Un poster à compléter avec les autocollants des pièces créées </span>
		<p>
			L'enfant qui aurait terminé une ou plusieurs pièces pourrait repartir avec un poster et les
			autocollants des animaux qu'il aura créé, avec pour objectif de tous les réunir pour compléter
			le poster à la manière d'un album Panini. L'enfant devient ainsi prescripteur, et c'est
			lui-même qui pourrait inciter les parents à revenir en boutique afin de créer de nouvelles
			pièces et emporter les autocollant associés.
		</p>
	</Text>
</article>
<PortfolioList container="project" />

<style>
	p {
		margin-top: 0;
	}
</style>
