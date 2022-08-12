<script>
	import { page } from '$app/stores';
	import Intro from '../../components/portfolio/Intro.svelte';
	import FolioImage from '../../components/portfolio/FolioImage.svelte';
	import Text from '../../components/portfolio/Text.svelte';
	import { folioData, imageType, bgColor } from '../../components/store.ts';
	import PortfolioList from '../../components/PortfolioList.svelte';
	import { fade } from 'svelte/transition';

	let data;

	import { onMount } from 'svelte';

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
			Dans le cadre d'une mise en concurrence, Enedis nous a demandé de produire un prototype de
			maquette physique permettant d'avoir une vue d'ensemble des projets SMART grids passés,
			présents, et à venir sur l'ensemble du territoire.
		</span>
	</Intro>
	<FolioImage type={$imageType.H} src={data.assets + 'maquette3d.jpg'} />
	<Text>
		<span slot="title">
			Un dispositif de démonstration à la fois global, exhaustif, et évolutif
		</span>
		<p>
			Les projets SMART sont des des projets d'innovation qui permettent de tester des solutions sur
			des territoires ciblés en vue d'un déploiement sur l'ensemble du territoire. Le cahier des
			charges, dont le but était avant tout de tester notre capacité à imaginer de nouvelles idées,
			regroupait un certain nombre de contraintes parfois opposées. Le cahier des charges proposait
			de concevoir une maquette permettant à la fois de cartographier une vue d'ensemble des projets
			passés présents et à venir, mais devait également offrir la possibilité d'intégrer de nouveaux
			projets.
		</p>
		<p>
			La demande portait sur une maquette physique, mais compte tenu des différents besoins il nous
			est rapidement apparu la nécessité d'intégrer une part digitale à la maquette, qui permettra
			de répondre à la fois à la problématique d'exhaustivité et d'évolutivité nécessaire.
		</p>
	</Text>
	<FolioImage type={$imageType.H} src={data.assets + 'icons.svg'} />
	<Text>
		<span slot="title"> Le dénominateur commun : des entités interconnectées en réseaux </span>
		<p>
			Le premier enjeu auquel nous devions répondre était de trouver une structure commune à
			l'ensemble des projets. Cet exercice d'abstraction nous amené naturellement à penser chacun
			des projets sous la forme de modules interconnectés. Ce réseau transporte essentiellement de
			l'électricité mais il également amené, d'autant plus avec les solution SMART grid, à
			transporter des données. Le découpage par module permet facilement de pouvoir déplacer,
			modifier, ou facilement ajouter les éléments nécessaires à la démonstration. Ainsi, grâce à
			cette mécanique nous sommes capable de décrire n'importe quel projet et les différents
			processus qu'il comporte.
		</p>
		<p>
			<strong>Transformer une contrainte en atout.</strong>
		</p>
		<p>
			Une telle mécanique comporte tout de même une contrainte, celle de devoir placer chaque
			élément au bon endroit avant chaque démonstration. Dans le cadre d'une démonstration ce qui
			pourrait sembler une contrainte peut finalement devenir une force si elle est directement
			intégrée dans la démonstration. Ainsi le placement des modules sur la maquette peut devenir un
			exercice à réaliser par l'assistance, assurant l'engagement de l'audience et rendant la
			démonstration plus interactive.
		</p>
	</Text>
	<FolioImage type={$imageType.H} src={data.assets + 'rendu_modules.jpg'}>
		Septs modules ont été modélisés et imprimés en 3D.
	</FolioImage>
	<Text>
		<span slot="title">Un dispositif piloté par tablette...</span>
		<p>
			Le parti pris de la maquette digitale nous a permis de proposer un support de présentation sur
			tablette qui permet au démonstrateur de guider son discours étape par étape en ayant à sa
			portée des informations supplémentaires qui permettent d'alléger visuellement les écran
			présents sur la maquette. Cette "télécommande" permet en outre d'accueillir un plus grand
			nombre de personnes autour support.
		</p>
	</Text>
	<FolioImage type={$imageType.H} src={data.assets + 'remote.svg'} />
	<Text>
		<span slot="title">...Synchronisable via le cloud</span>
		<p>
			Un autre avantage dans la digitalisation du support est la possibilité de pouvoir mettre à
			jour le contenu via un serveur distant, répondant de façon optimale à la demande
			d'évolutivité. Le cas échéant, de nouveaux modules pourraient être ajoutés, pérennisant ainsi
			l'usage du produit. Par extension, nous pourrions même imaginer produire plusieurs exemplaires
			idéentiques de cette maquette afin de les implanter dans chaque région. La synchronisation
			permettra ainsi d'obtenir une maquette identique dans chaque région, limitant ainsi les
			déplacements de la maquette tout en facilitant ceux des démonstrateurs.
		</p>
	</Text>
	<FolioImage type={$imageType.H} src={data.assets + 'demo1.jpg'} />
</article>
<PortfolioList container="project" />

<style>
	p {
		margin-top: 0;
	}
</style>
