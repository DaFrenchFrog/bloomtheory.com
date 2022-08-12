<script>
	import { page } from '$app/stores';
	import Intro from '../../components/portfolio/Intro.svelte';
	import FolioImage from '../../components/portfolio/FolioImage.svelte';
	import Text from '../../components/portfolio/Text.svelte';
	import { folioData, imageType, bgColor } from '../../components/store.ts';
	//   import { stores } from "@sapper/app";
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
			Le Grand Port du Havre lance un grand projet de refonte de son système de gestion des matières
			dangereuses. Nous y avons trouvé une excellente opportunité pour lancer ce projet avec un
			design sprint, qui servira d'accélérateur pour le nouvel outil.
		</span>
	</Intro>
	<FolioImage type={$imageType.H} src={data.assets + 'panoramic.jpg'} />
	<Text>
		<span slot="title">Le Design Sprint : 4 jours pour tout changer...</span>
		<p>
			Un design sprint est une série d'ateliers tirés du Design Thinking qui permet en seulement
			quelques jours de produire un protoype d'application testé par de vrais utilisateurs. Il
			permet d'apporter de nouvelles idées et de répondre aux enjeux en un temps record, faisant
			gagner un temps de production conséquent tout en évitant des risques d'échec du projet.
		</p>
		<p>
			Ici nous ne parlons pas de stacks technique, de framework de développement, ou d'organisation
			du projet, l'objectif est de trouver de nouvelles idées pour répondre au besoin hautement
			stratégique d'avoir la vue la plus précise possible des matières qualifiées dangereuses qui
			transitent sur le site du port du Havre. Cette prérogative est dévolue à la capitainerie est
			le réglement est soumis à des normes internationales très élaborées qui doivent être prise en
			compte de façon impérative. L'enjeu est naturellement capital puisqu'il s'agit ici de la
			sécurité des personnes.
		</p>
	</Text>
	<FolioImage type={$imageType.H} src={data.assets + 'planning.jpg'} />
	<FolioImage type={$imageType.H} src={data.assets + 'group.jpg'}>
		La salle de sprint et sa vue imprenable sur la mer...
	</FolioImage>
	<Text>
		<span slot="title">Un existant peu ergonomique et fastidieux</span>
		<p>
			Les retours utilisateurs concernant l'outil existant ont fait remonter un grand sentiment de
			frustation car l'outil ayant été conçu sans tenir compte des besoins du terrain et sur une
			technologie peu modulable, la proposition est naturellement passée à côté des enjeux auxquels
			elle devait répondre. La hiérarchisation des données rendait son utilisation très fastidieuse
			et une recherche simple de certaines matières pouvait devenir un vrai casse-tête si l'on avait
			pas une excellente connaissance des normes en vigueur.
		</p>
	</Text>
	<FolioImage type={$imageType.H} src={data.assets + 'existant.jpg'}>
		Poste de travail et écrans de l'outil existant.
	</FolioImage>
	<Text>
		<span slot="title">Un engagement total des équipes en co-création</span>
		<p>
			Dans un design sprint, l'équipe est composée d'experts métier et de designers qui vont
			s'immerger pleinement pendant 4 journées consécutives afin de résoudre un challenge et trouver
			de nouvelles idées. Cette association experts/designers associée à la méthodologie du Design
			Sprint permet d'obtenir en temps record des retours utilisateurs pertinents qui apportent une
			réponse à la problématique demandée.
		</p>
	</Text>
	<FolioImage type={$imageType.H} src={data.assets + 'workshops.jpg'} />
	<FolioImage type={$imageType.H} src={data.assets + 'maquettes.jpg'} captionPos="before">
		Prototype réalisé en vue des tests.
	</FolioImage>
	<Text>
		<span slot="title">Des résultats plein d'enseignements</span>
		<p>
			Les utilisateurs effectués la synthèse ont permis de valider la direction prise de façon
			globale, mais ils ont également permis de déceler des points d'amélioration notable en vue du
			MVP.L'important dans un Design Sprint n'est pas de tomber juste, mais d'obtenir des réponses
			sur la valeur qu'apporte une offre de service ou un produit.
		</p>
		<p>
			Grâce à ce Design Sprint le projet a économiser un temps précieux tout en apportant plus de
			certitudes quant à la refonte à opérer !
		</p>
	</Text>
</article>
<PortfolioList container="project" />

<style>
	p {
		margin-top: 0;
	}
</style>
