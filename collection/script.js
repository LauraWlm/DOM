const collection = [
  {
    name: "Jeffrey Dahmer",
    director: "Ryan Murphy",
    releaseYear: 2022,
    picture:
      "./collection/assets/jeff-dahmer-netflix_20220930124020-1068x580.jpg",
    genre: ["Thriller", "Drama"],
    cast: ["Evan Peters", "Richard Jenkins", "Molly Ringwald", "Niecy Nash"],
  },

  {
    name: "Hannibal",
    director: "Thomas Harris",
    releaseYear: 2013,
    picture: "assets/hannibal.jpg",
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
    director: ["Ryan Murphy", "Brad Falchuk"],
    releaseYear: 2011,
    picture: "assets/wednesday2.jpeg",
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
    director: ["", "Miles Millar"],
    releaseYear: 2022,
    picture: "collectionhannibal.jpg",
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
];

function collectionElement() {
  let main = document.createElement("main");
  let section = document.createElement("section");

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
