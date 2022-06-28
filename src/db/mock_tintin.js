const tintins = [
    {
        id: 1,
        title: 'Tintin en Amérique épisode 1',
        picture: '1.jpg',
        synopsis: "Dans Tintin en Amérique (1932), le héros confirme sa vocation de redresseur de torts, en s'opposant au mafioso Al Capone, aux gangsters de Chicago et aux fripouilles de tout acabit. Déjà, Hergé témoigne d'une vision généreuse du monde, stigmatisant par exemple des Blancs pour leurs comportements envers les Indiens Peaux-Rouges. La renommée de Tintin s'étend au-delà de l'Atlantique. Si bien que lorsqu'il arrive à Chicago, en pleine prohibition, tous les bandits et malfaiteurs associés lui préparent une réception des moins confortables. Tintin devra user de tout son courage et de toute son intelligence pour survivre !",
        movie: "https://www.youtube.com/watch?v=v9d2SS0euzU"
    },
    {
        id: 2,
        title: 'Tintin en Amérique épisode 2',
        picture: '2.jpg',
        synopsis: "Dans Tintin en Amérique (1932), le héros confirme sa vocation de redresseur de torts, en s'opposant au mafioso Al Capone, aux gangsters de Chicago et aux fripouilles de tout acabit. Déjà, Hergé témoigne d'une vision généreuse du monde, stigmatisant par exemple des Blancs pour leurs comportements envers les Indiens Peaux-Rouges. La renommée de Tintin s'étend au-delà de l'Atlantique. Si bien que lorsqu'il arrive à Chicago, en pleine prohibition, tous les bandits et malfaiteurs associés lui préparent une réception des moins confortables. Tintin devra user de tout son courage et de toute son intelligence pour survivre !",
        movie: "https://www.youtube.com/watch?v=k58EMlREtNw"
    },
    {
        id: 3,
        title: 'Les Cigares du Pharaon',
        picture: '3.jpg',
        synopsis: "Ce quatrième épisode de la série, premier album paru exclusivement chez Casterman (les précédents étaient estampillés Éditions du Petit Vingtième) sous le titre Les aventures de Tintin reporter en Orient, Les Cigares du Pharaon, est sorti à l'automne 1934. Tintin part sur les traces de trafiquants d'opium à travers l'Égypte et l'Inde. Port-Saïd, Le Caire, les pyramides, les tombeaux des pharaons, la mer Rouge, la jungle et ses éléphants... Tintin va vivre des aventures peu banales : il tente d'échapper au poison qui rend fou, rencontre un archéologue extravagant, un Maharadja en danger de mort...",
        movie: "https://www.youtube.com/watch?v=CeJ8nYZlRak"
    },
    {
        id: 4,
        title: 'Le Lotus Bleu',
        picture: '4.jpg',
        synopsis: "Dans Le Lotus bleu (1936) Tintin s'engage à démanteler le trafic d'opium international qui sévit dans un pays mythique certes, mais dont il ignore tout, la Chine. À l'aube de ce récit, la généreuse ambition de Tintin semble démesurée. Aidé par la seule société secrète, Les Fils du Dragon, et par son ami Tchang, rencontré tardivement, il parvient à surmonter tous les obstacles et ruiner les perfides machinations de ses nombreux ennemis.",
        movie: "https://www.youtube.com/watch?v=ceSmFZ_wtwk&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=3"
    },
    {
        id: 5,
        title: "L'oreille Cassée",
        picture: '5.jpg',
        synopsis: "L'Oreille Cassée (1937) est une course poursuite palpitante. Tintin s'embarque pour l'Amérique du Sud afin de récupérer un fétiche volé. Là-bas s'opposent toutes sortes d'intérêts : militaires, économiques, la guerre du Gran Chaco venant d'opposer, trois ans durant, la Bolivie et le Paraguay. Une statuette Arumbaya est volée... puis restituée à son musée. Mais un détail révèle à Tintin que ce n'est pas l'original qui a été rendu, mais une simple réplique. Quel mystère cache donc cette statuette pour que l'on veuille en maquiller le vol ? Tintin s'embarque pour l'Amérique du Sud où, croit-il, se trouve la clef de cette énigme.",
        movie: "https://www.youtube.com/watch?v=Cy_JuFOTlUo&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=4"
    },
    {
        id: 6,
        title: "L'île Noire",
        picture: '6.jpg',
        synopsis: "De retour d'Amérique du Sud, Tintin s'embarque dans une aventure britannique palpitante, rythmée par d'incessants rebondissements. Pour la première fois et non la dernière, Tintin s'oppose au fourbe Docteur Müller. Ce dernier a organisé, à l'échelle européenne, un vaste trafic de fausse monnaie. Après bien des péripéties, Tintin réussira-t-il à le démanteler ?",
        movie: "https://www.youtube.com/watch?v=glJK7Suosx0&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=5"
    },
    {
        id: 7,
        title: "Le Spectre d'Ottokar",
        picture: '7.jpg',
        synopsis: "Le Sceptre d'Ottokar (1939) est un coup de force d'Hergé qui vise l'Allemagne dans cette aventure. La découverte d'une serviette oubliée sur un banc conduit Tintin à Prague, puis en Syldavie. Tintin va sauver la Syldavie et son Royaume d'un coup d'État fasciste.",
        movie: "https://www.youtube.com/watch?v=buWNTB1Bkk8&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=6"
    },
    {
        id: 8,
        title: "Le Crabe aux Pinces d'Or",
        picture: '8.jpg',
        synopsis: "Le Crabe aux pinces d'or (1941) renoue avec l'aventure exotique. Celle-ci mène Tintin en Afrique du Nord. Il y déjoue les plans d'une bande de malfaiteurs qui dissimulaient de l'opium dans des boîtes de crabe. Avec l'apparition du Capitaine Haddock, nous découvrons un nouvel art de s'exprimer qui ne manque pas de piment et de sonorité. Parmi eux, l'un des plus inattendus est à coup sûr végétarien.",
        movie: "https://www.youtube.com/watch?v=ECVUtVeYO3I&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=7"
    },
    {
        id: 9,
        title: "L'Etoile mystérieuse",
        picture: '9.jpg',
        synopsis: "À bord d'un navire polaire dont le capitaine Haddock assure le commandement, Tintin et quelques savants européens partent pour l'océan Arctique, où s'est écrasé un aérolithe contenant un métal inconnu. Mais dès qu'ils apprennent qu'un autre navire fait également route vers l'étrange météorite, leur expédition se transforme en une véritable course contre la montre.",
        movie: "https://www.youtube.com/watch?v=nrHk9RFYjZ8&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=8"
    },
    {
        id: 10,
        title: "Le Secret de la Licorne",
        picture: '10.jpg',
        synopsis: "En fouillant le grenier, le capitaine Haddock retrouve la trace de son ancêtre, le chevalier de Hadoque. Ce légendaire loup des mers s'est rendu célèbre par ses déboires avec le cruel pirate Rackham le Rouge. Un roman maritime de plus ? Certainement pas ! Car le chevalier devient le dépositaire d'un fabuleux trésor. Pour Tintin, Haddock et une série de malfrats, il s'agit de le retrouver. Mais les pistes et les énigmes se multiplient.",
        movie: "https://www.youtube.com/watch?v=sVSZroSpPog&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=9"
    },
    {
        id: 11,
        title: "Le Trésor de Rackham le Rouge",
        picture: '11.jpg',
        synopsis: "Dans Le Secret de La Licorne (1943) et Le Trésor de Rackham le Rouge (1944) qui en est la suite, Tintin accompagne le capitaine Haddock sur les traces de son glorieux ancêtre, le chevalier François de Hadoque. Inventeur d'un sous-marin de poche en forme de requin, un certain Tryphon Tournesol contribue à la découverte du trésor, avant d'offrir au Capitaine le château de ses aïeux : Moulinsart.",
        movie: "https://www.youtube.com/watch?v=Xeq4ck2LWfA&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=10"
    },
    {
        id: 12,
        title: "Les 7 Boules de cristal",
        picture: '12.jpg',
        synopsis: "Dans Les 7 Boules de cristal (1948), sept savants sont mystérieusement frappés de léthargie à leur retour d'une expédition dans les Andes. Le professeur Tournesol ayant disparu, Tintin et le Capitaine partent à sa recherche. Créé en 1929 par un certain Georges Remi, qui signait d'ores et déjà ses dessins du nom d'Hergé, Tintin connaîtra vingt-trois aventures dont, jusqu'à présent, le succès auprès des jeunes de 7 à 77 ans ne s'est jamais démenti.",
        movie: "https://www.youtube.com/watch?v=xbzP2T5EeyA&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=11"
    },
    {
        id: 13,
        title: "Le Temple du Soleil",
        picture: '13.jpg',
        synopsis: "Dans Le Temple du Soleil (1949), Tintin, Milou et le Capitaine Haddock s'envolent pour le Pérou à la recherche du professeur Tournesol, enlevé pour avoir involontairement commis un sacrilège qui le destine au châtiment suprême.",
        movie: "https://www.youtube.com/watch?v=IfwkZuGFnj0&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=12"
    },
    {
        id: 14,
        title: "Tintin au pays de l'or noir",
        picture: '14.jpg',
        synopsis: "La guerre a brutalement interrompu la prépublication de cette aventure, le 9 mai 1940. À cette époque, ni le capitaine Haddock, ni le professeur Tournesol, ni le château de Moulinsart n'avaient rejoint la saga tintinesque. Huit ans plus tard, le Journal Tintin publie à nouveau cet épisode. Avec un humour génial, Hergé va réintégrer les absents de jadis dans la refonte de l'aventure qu'il entreprend d'achever. En 1950, l'album est publié. Mais le monde change, aussi en conformité avec l'actualité, une nouvelle version, quelque peu modifiée, sera proposée au public en 1971.",
        movie: "https://www.youtube.com/watch?v=Yk7XCmmaf98&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=13"
    },
    {
        id: 15,
        title: "Objectif Lune",
        picture: '15.jpg',
        synopsis: "Dans Objectif Lune (1953), le Professeur Tournesol invite Tintin et le Capitaine Haddock à le rejoindre en Syldavie où il travaille sur le plus grand projet du siècle : l'envoi d'une fusée sur la Lune. Le défi s'annonce palpitant, d'autant plus qu'au grand effarement du Capitaine, le Professeur leur suggère d'être du voyage !",
        movie: "https://www.youtube.com/watch?v=BC998UdeLnc&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=14"
    },
    {
        id: 16,
        title: "On a marché sur la Lune",
        picture: '16.jpg',
        synopsis: "Cet album, d'une exactitude prophétique, poursuit l'aventure lunaire initiée dans Objectif Lune. Hergé repousse sans cesse les limites scénaristiques et envoie cette fois ses héros dans l'espace. Si aujourd'hui aller dans l'espace est presque une routine, au début des années cinquante, imaginer un tel récit relevait de la science-fiction. En effet, il est important de se rappeler que l'album fut publié en 1954 alors qu'Armstrong ne fît le premier pas sur la Lune qu'en 1969.",
        movie: "https://www.youtube.com/watch?v=819TMe9-Oyc&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=15"
    },
    {
        id: 17,
        title: "L'Affaire Tournesol",
        picture: '17.jpg',
        synopsis: "Une sensationnelle invention du professeur Tournesol commence par provoquer des catastrophes au château de Moulinsart : toutes les vitres volent en éclat, ainsi que la plupart des objets en verre! Malheureusement, cette trouvaille ne rejoindra pas le rayon des farces et attrapes. Des espions tentent de s'emparer de Tournesol pour lui soutirer ses plans. Il apparaît que les kidnappeurs sont des Bordures, éternels ennemis des Syldaves et bien décidés à transformer l'invention de Tournesol en arme de destruction massive.",
        movie: "https://www.youtube.com/watch?v=wowyobLMeh8&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=16"
    },
    {
        id: 18,
        title: "Coke en stock",
        picture: '18.jpg',
        synopsis: "Coke en stock met en lumière les pratiques scandaleuses des esclavagistes des temps modernes. L'incrédulité du capitaine Haddock n'y changera rien. Le trafic d'êtres humains, cela existait encore au vingtième siècle. Au vingt-et-unième aussi, hélas. Comme pour bien d'autres questions graves, Hergé fut sensible à cette dramatique actualité et la transposa dans une fiction pleine de rebondissements.",
        movie: "https://www.youtube.com/watch?v=8lEflSFfVaA&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=17"
    },
    {
        id: 19,
        title: "Tintin au Tibet",
        picture: '19.jpg',
        synopsis: "Tintin au Tibet (1960), pure histoire d'amitié, sans le moindre méchant, décrit la recherche désespérée de Tintin pour retrouver son ami, le jeune Chinois Tchang, qui se rendait en Europe à bord d'un avion de ligne qui s'est écrasé dans l'Himalaya. Ce récit pathétique, qui rompt avec le ton extraverti des épisodes précédents, démontre que la fidélité et l'espoir sont capables de vaincre tous les obstacles, et que les préjugés - en l'occurrence, à l'égard de l'abominable homme des neiges - sont bien souvent le fruit de l'ignorance.",
        movie: "https://www.youtube.com/watch?v=wk3dn4SV2lY&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=18"
    },
    {
        id: 20,
        title: "Les bijoux de la Castafiore",
        picture: '20.jpg',
        synopsis: "Dans Les Bijoux de la Castafiore (1963), les principaux protagonistes de la série se retrouvent à Moulinsart pour y vivre une véritable comédie classique à huis clos. Tournant résolument le dos à l'aventure pour s'attacher à la difficulté de la communication entre les êtres, un anti-récit truffé de malentendus et de quiproquos plus cocasses les uns que les autres.",
        movie: "https://www.youtube.com/watch?v=S9xEH4VSgbM&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=19"
    },
    {
        id: 21,
        title: "Vol 714 pour Sydney",
        picture: '21.jpg',
        synopsis: "Vol 714 pour Sydney (1968), c'est le voyage interrompu, le détournement qui bouleverse tout, l'incursion de Tintin et de ses compagnons dans l'inconnu, dans un monde irréel animé par des phénomènes télépathiques, c'est le contact incroyable avec des extra-terrestres et la sortie d'un rêve... Mais en est-ce bien un ? Djakarta, dernière escale avant Sydney pour le Boeing du vol 714.",
        movie: "https://www.youtube.com/watch?v=2Kw3iHaZ1qw&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=20"
    },
    {
        id: 22,
        title: "Tintin et les Picaros",
        picture: '22.jpg',
        synopsis: "Dernier album achevé du maître dont l’écriture et la mise en forme auront pris plus de dix ans. L'attente du lecteur se fait de plus en plus longue entre chaque nouvelle aventure. Sombre histoire de vengeance avec prise d’otages sur fond de guérilla, Tintin et les Picaros (1976) marque le retour de Tintin au San Theodoros, le pays de L’Oreille Cassée. Hergé y risque un constat doux amer, tendant à faire croire que tout en ce monde n’est que mascarade.",
        movie: "https://www.youtube.com/watch?v=_XSpRrowTZA&list=PLqar5ztYVwcSQd734MkVSK0rUQZGcXTxC&index=21"
    },
    {
        id: 23,
        title: "Tintin et le lac aux requins",
        picture: '23.jpg',
        synopsis: "Tintin et le capitaine Haddock arrivent en Syldavie où ils sont invités chez le professeur Tournesol dans la villa Sprok, au bord du lac Fléchizaff, une étendue d'eau artificielle ayant la réputation d'être maudite. Les deux amis retrouvent à l'aéroport Dupond et Dupont, également appelés par Tournesol pour assurer sa protection. Tous prennent ensuite un avion-taxi pour arriver chez le professeur, mais l'appareil tombe en panne de moteur en plein vol et le pilote saute en parachute. Tintin parvient à poser l'avion, non sans heurts car l'appareil finit sa course au bord d'une falaise, c'est alors que deux jeunes Syldaves, Niko et Nouchka, viennent à leur secours et les emmènent chez Tournesol. Celui-ci leur révèle qu'il vient d'inventer une sorte de photocopieur en trois dimensions, capable de reproduire n'importe quel objet.",
        movie: "https://www.youtube.com/watch?v=eoLPFtXAkrU"
    },
    {
        id: 24,
        title: "Tintin au pays des Soviets",
        picture: '24.jpg',
        synopsis: "Nous sommes le 10 janvier 1929, à Bruxelles. Accompagné de son chien Milou, un tout jeune reporter monte dans le train à destination de Moscou. Pour Tintin, c'est le début d'une grande aventure. Pour Hergé, c'est le vrai début de sa carrière. Les Aventures de Tintin, reporter du Petit Vingtième au pays des Soviets paraîtront sous forme d'album en 1930. Cette année marque la naissance d'un mythe qui n'est pas près de s'éteindre, et les premiers signes d'une troublante confrontation entre la fiction et la réalité.",
        movie: "https://www.youtube.com/watch?v=1-ZovTqSJRA"
    },
    {
        id: 25,
        title: "Tintin au Congo",
        picture: '25.jpg',
        synopsis: "Tintin est envoyé au Congo belge afin de réaliser un reportage sur la situation du pays. Avec son chien Milou et après un voyage mouvementé, les deux amis doivent affronter tour à tour des animaux sauvages, des autochtones en colère et l’infâme Al Capone, qui a pour ambition de contrôler la production du diamant en Afrique. Plus tard, Hergé confiera avoir été victime des clichés et des stéréotypes de l’époque coloniale.",
        movie: "https://www.youtube.com/watch?v=EDHBp5yWSZg"

    }



];

module.exports = tintins