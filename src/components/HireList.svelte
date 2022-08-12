<script>
  import Accordion from "./Accordion.svelte";
  const HIRE_DATA = [
    {
      title: "#UXDESIGN",
      need:
        "« Nous cherchons une méthodologie pour assurer le succès du projet dans un budget  <span style='white-space: nowrap'>maîtrisé. »</span>",
      answer:
        "Il est difficile de compter le nombre de projets qui ont mené à un échec simplement parce que la phase préparatoire n'a pas tenu compte du besoin réel des utilisateurs. En investissant un budget raisonnable en amont du développement nous pourrons lever un grand nombre de doutes et gagner des temps de développement précieux pour des évolutions plutôt que des corrections. <br/><strong>La méthodologie du design thinking permet de mieux connaître vos utilisateurs et favorisera l'innovation pour répondre au mieux au enjeux de votre organisation.</strong><br/>Intégrée dans une démarche agile à travers une industrialisation des phases d'explorations, de prototypage et de tests utilisateurs elle permettra également d'optimiser les différentes évolutions pour rendre votre produit pour toujours plus efficace et performant."
    },
    {
      title: "#DESIGNSPRINT",
      need:
        "« On a cette superbe idée mais on a besoin d'aide pour la produire et la tester  <span style='white-space: nowrap'>rapidement ! » </span>",
      answer:
        "Conçu par Jake Knapp chez Google Venture il y a quelques années, le design sprint peut être considéré comme une &ldquo;recette&rdquo; dans la &ldquo;cuisine&rdquo; du Design Thinking. <br/><strong>La version la plus répandue permet en seulement 5 jours de tester une idée ou un produit directement auprès de sa cible,</strong> en levant les principaux doutes et questionnements sur l'opportunité de développer un nouveau produit ou service. Cette méthode réduit drastiquement les coûts et propulse l'innovation en un temps record tout en fédérant les équipes autour d'un projet. En tant que sprint master je peux vous accompagner sur l'organisation et l'animation de ces journées, mais je peux également intervenir en tant que participant afin d'apporter mes compétences en idéation, en prototypage, et en animation des tests. Pour en découvrir plus je vous propose d'écouter <a href='https://open.spotify.com/episode/40613IzXeZvs8Iek0Iq4RZ?si=vEJ5mjwxQp6wHJvN5_LyoA' target='_blank'>cet entretien</a> que j'ai eu l'occasion d'enregistrer pour gommette, un podcast dédié au design sprint. "
    },
    {
      title: "#PRODUCTDESIGN",
      need:
        "«  Notre produit est moche. On veut que ça  <span style='white-space: nowrap'>brille ! »</span>",
      answer:
        "Lorsque le terme &ldquo;moche&rdquo; est utilisé il s'agit souvent d'une opinion liée à une ergonomie ne répondant pas ou mal au service qu'elle est sensée offrir. Le problème ne se situe généralement pas seulement sur des couleurs inélégantes ou des choix typographiques contestables, mais sur un manque de compréhension des problématiques auxquelles les utilisateurs sont confrontés, imposant des tâches fastidieuses et inutiles. En tant que product designer j'utilise les possibilités offertes par le Design Thinking pour m'immerger dans les enjeux à résoudre et construire des solutions qui répondent à la fois aux enjeux business, techniques, et budgétaires de mes clients dans le but d'offrir la meilleure expérience possible. En complément d'une conception centrée utilisateur, je m'inscris dans une démarche globale en proposant une identité visuelle cohérente et des livrables exploitables pour les développeurs (via un design system et/ou du code front) et le suivi de toute la production jusqu'au déploiement."
    },
    {
      title: "#DESIGNOPS",
      need:
        "«  Nous voulons créer du lien designer/developpeur et mieux nous organiser pour produire plus <span style='white-space: nowrap'>efficacement. »</span>",
      answer:
        "Inspiré du DevOps, le DesignOps a pour mission de se focaliser sur tout ce qui n'est pas du design à proprement parler. Les process de production, la gouvernance, l'animation des équipes de design, la communication interne (voire externe), le design system, la planification, les outils... C'est également lui qui renforcera le lien entre designers et développeurs afin de fluidifier la transmission des livrables et leur implémentation. Il se différencie du Head of design dans la mesure où il n'a pas vocation à prendre des décisions sur la vision du produit et la priorisation des évolutions. 20 années d'expérience dans la création, la conception, le développement et le suivi de sites web et applications me permettent d'aider les équipes de design à être plus productives."
    },
    {
      title: "#DESIGNSYSTEM",
      need:
        "«  Nous souhaitons construire une identité pour notre produit adaptée à nos <span style='white-space: nowrap'>besoins. »</span>",
      answer:
        " La démarche du design system est de réunir en un même endroit l'ensemble des éléments et consignes permettant le design, l'implémentation et les évolutions d'un produit. Son utilisation permet de gagner en cochérence, de travailler plus efficacement et cela renforce le lien entre designers et développeurs. En associant mon expérience en direction artistique, en design produit, ainsi que mes compétences techniques, je suis en capacité d'accompagner mes clients sur la bonne organisation et le déploiement d'une identité visuelle cohérente ainsi qu'un design system évolutif et adapté aux besoins des développeurs. Pour en découvrir plus sur ce sujet je vous encourage à lire <a href='https://medium.com/@16ar/trois-piliers-pour-un-design-system-1d73834699fd' target='_blank'>cet article</a>."
    },
    {
      title: "#WEBDESIGN",
      need:
        "« Notre site est tellement vieux... On veut le  <span style='white-space: nowrap'>refaire ! »</span>",
      answer:
        "Les enjeux liés à la conception d'un site web ne sont pas les mêmes que ceux d'une application digitale. Votre site internet, s'il n'est pas e-commerce, sert avant tout de vitrine à votre activité et doit être abordé comme un espace de communication de votre marque. <strong>Je vous accompagnerai afin de traduire la stratégie de votre organisation en mot et en images  pour convaincre et inciter votre cible à adopter votre produit ou service.</strong> Appuyé par un réseau de partenaires techniques et organisationnels je pourrai également prendre en charge l'ensemble du développement du projet afin limiter le nombre d'interlocuteurs. Les avantages du freelance sans les inconvénients de l'agence !"
    },
    {
      title: "#BRANDING",
      need:
        "« Je souhaite un nouveau logo pour mon <span style='white-space: nowrap'>entreprise... »</span>",
      answer:
        "Vous ne souhaitez pas vraiment un logo. Plus précisément, vous ne souhaitez pas seulement un logo mais <strong>un univers visuel différenciant et cohérent qui permettra à votre entreprise de se démarquer de la concurrence</strong>. Plus qu'un logo, nous définirons ensemble un concept d'identité visuelle qui se déclinera avec élégance et créativité sur les différents supports, site web, papiers à lettre, cartes de visites, livrets, etc. Je pourrai également vous accompagner sur les choix de matières et suivre l'impression des supports nécessaires. Vous pourrez découvrir <a href='' target='_blank'>ici</a> une étude de cas de refonte d'identité visuelle."
    },
    {
      title: "#COMMUNICATIONDESIGN",
      need:
        "« Nous avons ce nouveau produit et on veut faire le <span style='white-space: nowrap'>buzz ! »</span>",
      answer:
        "Vous connaissez la musique. Vous avez confié votre projet à votre agence, un planneur stratégique a travaillé quelques jours sur un brief créatif qui va être confié à une team DA/rédac, cette équipe va proposer ses concepts au directeur de création qui fera sa série de retours en éliminera les idées qui ne lui conviennent pas et viendra ensuite vous proposer quelques concepts que votre équipe jugera plus ou moins réussie, et moyennant une série de retours vous produirez votre campagne bostées aux vitamines adwords et campagnes paid. <br/>Après avoir travaillé plus de dix ans dans la communication et pour la plupart des agences parisienne, je souhaite proposer <strong>une nouvelle approche de la communication par le design thinking, en partant de l'utilisateur</strong> et de ses usages pour imaginer en atelier et avec le client les idées qui vont percuter la cible de manière utile et efficace. Comme dans toute démarche centrée utilisateur ces idées seront testées auprès de la cible, en guerilla s'il le faut, avant leur lancement à l'échelle."
    }
  ];
</script>

{#each HIRE_DATA as item}
  <Accordion data={item} />
{/each}
