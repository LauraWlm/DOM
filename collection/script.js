const collection = [
  {
    name: "Jeffrey Dahmer",
    director: "Ryan Murphy",
    releaseYear: 2022,
    picture: "./assets/jeff-dahmer-netflix_20220930124020-1068x580.jpg",
    genre: ["Thriller", "Drama"],
    cast: ["Evan Peters", "Richard Jenkins", "Molly Ringwald", "Niecy Nash"],
  },

  {
    name: "Hannibal",
    director: "Bryan Fuller",
    releaseYear: 2013,
    picture: "./assets/hannibal3.jpg",
    genre: ["Thriller", "Psychological Horror", "Drama"],
    cast: [
      "Hugh Dancy",
      "Mads Mikkelsen",
      "Caroline Dhavernas",
      "Laurence Fishburne",
    ],
  },

  {
    name: "American Horror Story",
    director: "Ryan Murphy",
    releaseYear: 2011,
    picture: "./assets/ahs.jpg",
    genre: ["Horror", "Drama", "Fantasy"],
    cast: [
      "Sarah Paulson",
      "Evan Peters",
      "Lily Rabe",
      "Frances Conroy",
      "Kathy Bates",
      "Denis O'Hare",
      "Angela Bassett",
      "Emma Roberts",
      "Taissa Farmiga",
    ],
  },

  {
    name: "Wednesday",
    director: ["Tim Burton"],
    releaseYear: 2022,
    picture: "./assets/wednesday.jpg",
    genre: ["Horror comedy", "Fantasy"],
    cast: [
      "Jenna Ortega",
      "Gwendoline Christie",
      "Hunter Doohan ",
      "Percy Hynes White",
      "Emma Myers",
      "Christina Ricci",
    ],
  },

  {
    name: "Mentalist",
    director: ["Bruno Heller"],
    releaseYear: 2008,
    picture: "./assets/mentalist.jpg",
    genre: ["Mystery", "Drama", "Crime", "Thriller", "Action"],
    cast: [
      "Simon Baker",
      "Robin Tunney",
      "Amanda Righetti ",
      "Tim Kang",
      "Owain Yeoman",
      "Christina Ricci",
    ],
  },

  {
    name: "Sherlock",
    director: ["Sue Vertue"],
    releaseYear: 2010,
    picture: "./assets/sherlock2.jpg",
    genre: ["Mystery", "Drama", "Crime", "Thriller", "Action"],
    cast: [
      "Benedict Cumberbatch",
      "Martin Freeman",
      "Rupert Graves",
      "Mark Gatiss",
      "Andrew Scott",
      "Amanda Abbington",
    ],
  },

  {
    name: "Dexter",
    director: ["John Goldwyn"],
    releaseYear: 2006,
    picture: "./assets/dexter.jpg",
    genre: ["Drama", "Thriller", "Psychological", "Horror", "Dark humor"],
    cast: [
      "Micheal C. Hall",
      "Julie Benz",
      "Jennifer Carpenter",
      "Erik King",
      "Lauren Vélez",
      "David Zayas",
      "James Remar",
    ],
  },

  {
    name: "Dr House",
    director: ["Bryan Singer"],
    releaseYear: 2004,
    picture: "./assets/drhouse.jpg",
    genre: ["Medical", "Drama"],
    cast: [
      "Hugh Laurie",
      "Omar Epps",
      "Robert Sean Leonard",
      "Lisa Edelstein ",
      "Jesse Spencer",
      "Jennifer Morrison ",
      "Peter Jacobson",
      "Olivia Wilde",
      "Kal Penn",
    ],
  },

  {
    name: "Criminal mind",
    director: ["Mark Gordon", "Jeff Davis"],
    releaseYear: 2005,
    picture: "./assets/criminalmind.jpg",
    genre: ["Police procedural", "Crime drama", "Mystery", "Horror", "Thriller"],
    cast: [
      "Thomas Gibson",
      "Mandy Patinkin",
      "Joe Mantegna",
      "Shemar Moore",
      "Matthew Gray Gubler",
      "Paget Brewster",
      "A. J. Cook",
      "Kirsten Vangsness",
    ],
  },
  
  {
    name: "Fringe",
    director: ["J. J. Abrams", "Alex Kurtzman", "Roberto Orci"],
    releaseYear: 2008,
    picture: "./assets/fringe.jpg",
    genre: ["Science fiction", "Supernatural drama"],
    cast: [
      "Anna Torv",
      "Joshua Jackson",
      "John Noble",
      "Lance Reddick",
      "Jasika Nicole",
      "Kirk Acevedo",
    ],
  },
];

function collectionElement() {
  let main = document.createElement("main");
  let section = document.createElement("section");

  let Btitle = document.createElement("h1");
  Btitle.innerText = "Mes séries préférées";
  main.appendChild(Btitle);

  for (let element of collection) {
    let article = document.createElement("article");
    article.className = element.name;

    let name = document.createElement("h2");
    name.innerText = element.name;
    article.appendChild(name);

    let picture = document.createElement("img");
    picture.setAttribute("src", element.picture);
    article.appendChild(picture);

    let director = document.createElement("h3");
    director.innerText = element.director;
    article.appendChild(director);

    let realeaseYear = document.createElement("h4");
    realeaseYear.innerText = element.releaseYear;
    article.appendChild(realeaseYear);

    let genre = document.createElement("h5");
    genre.innerText = element.genre;
    article.appendChild(genre);

    let cast = document.createElement("p");
    cast.innerText = element.cast;
    article.appendChild(cast);

    section.appendChild(article);
    main.appendChild(section);
    document.body.insertBefore(
      main,
      document.getElementsByTagName("footer")[0]
    );
  }
}
collectionElement();
