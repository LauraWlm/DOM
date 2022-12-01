const collection = [
  {
    name: "Jeffrey Dahmer",
    director: "Ryan Murphy",
    releaseYear: 2022,
    picture: "collectionassetsjeff-dahmer-netflix_20220930124020-1068x580.jpg",
    genre: ["Thriller", "Drama"],
    cast: ["Evan Peters", "Richard Jenkins", "Molly Ringwald", "Niecy Nash"],
  },

  /* {
        name: "Hannibal",
        director: "Thomas Harris",
        releaseYear: 2013,
        picture: "collection\assets\hannibal.jpg",
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
        director: "Ryan Murphy", "Brad Falchuk",
        releaseYear: 2011,
        picture: "collection\hannibal.jpg",
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
      }
      */
];

function collectionElement() {
  let divCont = document.createElement("divCont");

  for (let element of collection) {
    let divGenre = document.createElement("divGenre");
    let genre = document.createElement("p");
  }
}
collectionElement();
