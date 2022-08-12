<script>
	import { page } from '$app/stores';
	import Intro from '../../components/portfolio/Intro.svelte';
	import FolioImage from '../../components/portfolio/FolioImage.svelte';
	import Text from '../../components/portfolio/Text.svelte';

	import { folioData, imageType } from '../../components/store.ts';
	//   import { stores } from "@sapper/app";
	import PortfolioList from '../../components/PortfolioList.svelte';
	import { fade, fly } from 'svelte/transition';

	// const { page } = stores();
	let data;

	import { onMount } from 'svelte';

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
			Yadeba est une initiative personnelle partant du constat que le débat public, notamment
			politique, est grandement influencé par des préjugés, de faux faits, et la façon dont les
			arguments sont avancés. Ce projet est à l'état embryonnaire et nécessite des recherches
			utilisateurs plus poussées.
		</span>
	</Intro>
	<FolioImage type={$imageType.SMALL} src={data.assets + 'logo.svg'} />
	<Text>
		<span slot="title">Un débat biaisé dès son commencement</span>
		<p>
			Lorsque vous discutez avec un ou plusieurs interlocuteurs et qu'un désaccord ou un
			questionnement apparaît, un échange peut s'engager afin de trouver une issue à laquelle
			l'ensemble des parties doivent s'entendre. Si nous prenons par exemples les sujets politiques,
			il n'y a que rarement des réponses fondamentalement justes, ou qui font concensus. Et pourtant
			une réponse doit être trouvée, et une solution donnée.
		</p>
		<p>
			Lors de ces échanges, certaines opinions vont ressortir plus que d'autres, elles seront
			contredites par certains et ce jusqu'à obtenir une réponse finale. Mais ce rapport de force va
			être déséquilibré par des biais, qui peuvent être liés au charisme de l'un, à une voix plus
			forte pour l'autre, et l'issue de ce débat si un accord est trouvé ne sera pas toujours celle
			qui aurait étée la plus pertinente pour résoudre le problème.
		</p>
	</Text>
	<FolioImage type={$imageType.H} src={data.assets + 'mockup.jpg'} />
	<FolioImage type={$imageType.H} src={data.assets + 'maquettes.jpg'} />
	<Text>
		<span slot="title"> Avoir toutes les cartes en main avant de faire son choix </span>
		<p>
			L'objectif de yadeba est de fournir un outil qui valorisera le fond tout en minimisant les
			biais induits par la forme de l'argumentaire. Il permet de mettre en avant les meilleures
			réponses pour et les meilleures réponses contre concernant un sujet, en laissant la
			possibilité de faire remonter en avant les meilleurs arguments de chaque parties.
		</p>
		<p>
			Chaque argument pour ou contre pourra être voté et remontera ainsi naturellement dans les
			classement. Les meilleurs arguments étant mis en avant de façon équitable et la plus appréciée
			par chaque partie, chacun pourra voter en connissance de cause pour le parti qui lui convient.
		</p>
	</Text>
</article>
<PortfolioList container="project" />

<style>
	p {
		margin-top: 0;
	}
</style>
