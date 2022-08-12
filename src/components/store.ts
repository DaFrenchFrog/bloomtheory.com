import { writable } from 'svelte/store';

const BG_COLOR = '#1c1717';
const TXT_COLOR = '#FFFFFF';

const IMAGE_TYPE = {
	H: 'horizontal', //horizontal
	V: 'vertical', //vertical
	SMALL: 'small',
	TINY: 'tiny'
};
const STATUS = {
	SOON: 'Comming soon...',
	READY: 'ready',
	LOCKED: 'locked',
	VIEWED: 'viewed'
};
const T = {
	DSPRINT: '#DesignSprint',
	PDESIGN: '#ProductDesign',
	UX: '#UXDesign',
	DSYSTEM: '#DesignSystems',
	BRANDING: '#Branding'
	// WEBD: '#Webdesign',
	// SERVICE: '#ServiceDesign'
};

const GPMH = {
	UID: '1',
	img: '',
	client: 'Grand Port du Havre',
	title: 'Design Sprint : gestion des matières dangereuses ',
	tags: [T.DSPRINT, T.UX, T.PDESIGN],
	projectUrl: '/portfolio/gpmh_design_sprint',
	assets: '/assets/portfolio/gpmh/',
	thumbnail: '/assets/portfolio/gpmh/thumbnail.jpg',
	status: STATUS.READY
};

const DARVA = {
	UID: '2',
	img: '',
	client: 'DARVA',
	title: 'SINNAPS : outil de gestion des sinistres',
	tags: [T.DSYSTEM, T.UX, T.PDESIGN],
	projectUrl: '/portfolio/sinnaps',
	assets: '/assets/portfolio/sinnaps/',
	thumbnail: '/assets/portfolio/sinnaps/thumbnail.jpg',
	status: STATUS.READY
};

const YADEBA = {
	UID: '3',
	img: '',
	client: 'Projet personnel',
	title: "yadeba.fr : concept d'outil de résolution de débat en ligne",
	tags: [T.PDESIGN, T.BRANDING],
	projectUrl: '/portfolio/yadeba',
	assets: '/assets/portfolio/yadeba/',
	thumbnail: '/assets/portfolio/yadeba/thumbnail.jpg',
	status: STATUS.LOCKED
};

const VCA = {
	UID: '6',
	img: '',
	client: 'Van Cleef & Arpels',
	title: 'My Little Jewels — application pour enfant',
	// tags: [T.UX, T.SERVICE, T.PDESIGN],
	tags: [T.UX, T.PDESIGN],
	projectUrl: '/portfolio/vca_little_jewels',
	assets: '/assets/portfolio/vca/',
	thumbnail: '/assets/portfolio/vca/thumbnail.jpg',
	status: STATUS.READY
};

const ENEDIS = {
	UID: '9',
	img: '',
	client: 'Enedis',
	title: 'Prototype physique des solutions SMART grids',
	// tags: [T.UX, T.PDESIGN, T.SERVICE],
	tags: [T.UX, T.PDESIGN],
	projectUrl: '/portfolio/enedis',
	assets: '/assets/portfolio/enedis/',
	thumbnail: '/assets/portfolio/enedis/thumbnail.jpg',
	status: STATUS.READY
};

const STAIRWAY = {
	UID: '10',
	img: '',
	client: 'Stairway Management',
	title: "Refonte de l'identité visuelle",
	tags: [T.BRANDING],
	projectUrl: '/portfolio/stairway_management',
	assets: '/assets/portfolio/stairway_management/',
	thumbnail: '/assets/portfolio/stairway_management/thumbnail.jpg',
	status: STATUS.READY
};

const ARTCURIAL = {
	UID: '7',
	img: '',
	client: 'Artcurial',
	title: 'Refonte du site internet',
	// tags: [T.BRANDING, T.WEBD],
	tags: [T.BRANDING],
	projectUrl: '/portfolio/Artcurial_website',
	assets: '/assets/portfolio/artcurial/',
	thumbnail: '/assets/portfolio/artcurial/thumbnail.jpg',
	status: STATUS.LOCKED
};

const SWOOD = {
	UID: '8',
	img: '',
	client: 'Swood Partners',
	title: 'Identité visuelle',
	// tags: [T.BRANDING, T.WEBD],
	tags: [T.BRANDING],
	projectUrl: '/portfolio/dartagnan',
	assets: '/assets/portfolio/dartagnan/',
	thumbnail: '/assets/portfolio/dartagnan/thumbnail.jpg',
	status: STATUS.LOCKED
};

const ING = {
	UID: '4',
	img: '',
	client: 'ING/AXA',
	title: "Offre d'assurance ING",
	tags: [],
	projectUrl: '/portfolio/ING_Insurance_offer',
	assets: '/assets/portfolio/gpmh/',
	thumbnail: '/assets/portfolio/gpmh/thumbnail.jpg',
	status: STATUS.LOCKED
};

const RTE = {
	UID: '5',
	img: '',
	client: 'RTE',
	title: "Mise en place d'un Design System",
	tags: [T.DSYSTEM],
	projectUrl: '/portfolio/RTE_design-system',
	assets: '/assets/portfolio/rte/',
	thumbnail: '/assets/portfolio/rte/thumbnail.jpg',
	status: STATUS.LOCKED
};

const FOLIO_DATA = [VCA, GPMH, STAIRWAY, ENEDIS, DARVA, SWOOD, YADEBA, RTE, ING, ARTCURIAL];
export const folioData = writable(FOLIO_DATA);
export const projectStatus = writable(STATUS);
export const imageType = writable(IMAGE_TYPE);
export const bgColor = writable(BG_COLOR);
export const txtColor = writable(TXT_COLOR);

// export const targetPage = writable(10);

// targetPage.subscribe((value) => {
//       if ($page.url.pathname != value) {
//             goto("/portfolio/sinnaps");
//       }
// });
