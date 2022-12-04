const collection = [
  {
    name: "Dahmer",
    director: "Ryan Murphy",
    releaseYear: 2022,
    picture: "./assets/jeffrey3.jpg",
    genre: ["Thriller", " Drama"],
    synopsis: "Le parcours du cannibale de Milwaukee, l’un des tueurs en série les plus connus aux Etats-Unis : de son enfance difficile à sa condamnation en 1992, et comment l’incompétence et l’apathie de la police lui ont permis de poursuivre ses crimes durant plusieurs années.",
  },

  {
    name: "Hannibal",
    director: "Bryan Fuller",
    releaseYear: 2013,
    picture: "./assets/hannibal3.jpg",
    genre: ["Thriller", " Psychological Horror", " Drama"],
    synopsis: "Aux yeux du psychiatre Hannibal Lecter, Will Graham, un profiler du FBI torturé par sa fascination pour les tueurs en série, est le plus délicieux des patients.",
  },

  {
    name: "AHS",
    director: ["Ryan Murphy", " Brad Falchuk"],
    releaseYear: 2011,
    picture: "./assets/ahs.jpg",
    genre: ["Horror", " Drama", " Fantasy"],
    synopsis: "A chaque saison, son histoire. American Horror Story nous embarque dans des récits à la fois poignants et cauchemardesques, mêlant la peur, le gore et le politiquement correct. De quoi vous confronter à vos plus grandes frayeurs !",
  },

  {
    name: "Wednesday",
    director: ["Tim Burton"],
    releaseYear: 2022,
    picture: "./assets/wednesday.jpg",
    genre: ["Horror comedy", " Fantasy"],
    synopsis: "A présent étudiante à la singulière Nevermore Academy, Wednesday Addams tente de s'adapter auprès des autres élèves tout en enquêtant à la suite d'une série de meurtres qui terrorise la ville.",
  },

  {
    name: "Mentalist",
    director: ["Bruno Heller"],
    releaseYear: 2008,
    picture: "./assets/mentalist.jpg",
    genre: ["Mystery", " Drama", " Crime", " Thriller", " Action"],
    synopsis: "Un mentaliste utilise ses extraordinaires dons d'observation pour résoudre des crimes en tant que consultant travaillant aux côtés de la police. Une façon pour lui contribuer à la justice et de démasquer le mystérieux tueur en série qui a assassiné son épouse et sa fille.",
  },

  {
    name: "Sherlock",
    director: ["Sue Vertue"],
    releaseYear: 2010,
    picture: "./assets/sherlock2.jpg",
    genre: ["Mystery", " Drama", " Crime", " Thriller", " Action"],
    synopsis: "Les aventures de Sherlock Holmes et de son acolyte de toujours, le docteur Watson, sont transposées au XXIème siècle.",
  },

  {
    name: "Dexter",
    director: ["John Goldwyn"],
    releaseYear: 2006,
    picture: "./assets/dexter.jpg",
    genre: ["Drama", " Thriller", " Psychological", " Horror"],
    synopsis: "Brillant expert scientifique du service médico-légal de la police de Miami, Dexter Morgan est spécialisé dans l'analyse de prélèvements sanguins. Mais voilà, Dexter cache un terrible secret : il est également tueur en série. Un serial killer pas comme les autres, avec sa propre vision de la justice",
  },

  {
    name: "House",
    director: ["Bryan Singer"],
    releaseYear: 2004,
    picture: "./assets/drhouse.jpg",
    genre: ["Medical", " Drama"],
    synopsis: "Le Dr Greg House est un médecin revêche qui ne fait confiance à personne, et encore moins à ses patients. Irrévérencieux et controversé, il n'en serait que plus heureux s'il pouvait ne pas adresser la parole à ses patients. Mais House est un brillant médecin. Et avec son équipe d'experts, il est prêt à tout pour résoudre les cas médicaux les plus mystérieux et sauver des vies.",
  },

  {
    name: "Criminalminds",
    director: ["Mark Gordon", " Jeff Davis"],
    releaseYear: 2005,
    picture: "./assets/criminalmind.jpg",
    genre: [" Crime drama", " Horror", " Thriller"],
    synopsis: "L'équipe des profilers étudie les comportements et les esprits torturés des criminels les plus dangereux du pays, afin d'anticiper les crimes d'un éventuel tueur. Chaque membre de cette unité d'élite a sa personnalité, son histoire mais aussi sa spécialité. Ils sont tous dépendants les uns des autres et les résultats dépendent aussi de cette complémentarité.",
  },
  
  {
    name: "Fringe",
    director: ["J. J. Abrams", " Alex Kurtzman", " Roberto Orci"],
    releaseYear: 2008,
    picture: "./assets/fringe.jpg",
    genre: ["Science fiction", " Supernatural drama"],
    synopsis: "Quand un vol international arrive à l'aéroport de Boston et que les passagers et l'équipage sont retrouvés morts, l'agent du FBI Olivia Dunham se voit confier l'enquête. Lorsque son partenaire est grièvement blessé, elle trouve une aide inattendue auprès du Dr Walter Bishop, un scientifique brillant mais fou, et de son fils, Peter. Ils ne tardent pas à découvrir que le drame du vol 627 n'est qu'une infime partie d'une bien plus grande et choquante vérité.",
  },
];

function collectionElement() {
  let main = document.createElement("main");
  let section = document.createElement("section");

  // création titre génarale

  let Btitle = document.createElement("h1");
  Btitle.innerText = "Mes séries préférées";
  main.appendChild(Btitle);

  //création article

  for (let element of collection) {
    let article = document.createElement("article");
    article.className = element.name;

     //création h2

    let name = document.createElement("h2");
    name.innerText = element.name;
    article.appendChild(name);

     //création img

    let picture = document.createElement("img");
    picture.setAttribute("src", element.picture);
    article.appendChild(picture);

     //création h3

    let director = document.createElement("h3");
    director.innerText = element.director;
    article.appendChild(director);

     //création h4

    let realeaseYear = document.createElement("h4");
    realeaseYear.innerText = element.releaseYear;
    article.appendChild(realeaseYear);

     //création h5

    let genre = document.createElement("h5");
    genre.innerText = element.genre;
    article.appendChild(genre);

     //création p

    let synopsis = document.createElement("q");
    synopsis.innerText = element.synopsis;
    article.appendChild(synopsis);

    section.appendChild(article);
    main.appendChild(section);
    document.body.insertBefore(
      main,
      document.getElementsByTagName("footer")[0]
    );
  }
}
collectionElement();
