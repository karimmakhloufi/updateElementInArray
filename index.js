const wilders = [
  // state initial
  { id: 2, name: "Aline", city: "Reims" },
  { id: 1, name: "Alain", city: "Paris" },
];

const updatedAline = { id: 2, city: "Paris" }; // id + valeur à maj

const wildersCopy = [...wilders]; // copie du state

const indexToUpdate = wildersCopy.findIndex(
  // recherche de l'index qui correspond à la condition
  (wilder) => wilder.id === updatedAline.id
);

console.log("index to update", indexToUpdate); // index de la case à mettre à jour

console.log("object to update", wildersCopy[indexToUpdate]); // objet à mettre à jour

console.log("new object", {
  // création du nouvel objet avec la mise à jour
  ...wildersCopy[indexToUpdate],
  ...updatedAline,
});

wildersCopy[indexToUpdate] = { ...wildersCopy[indexToUpdate], ...updatedAline }; // assignation du nouvel objet

console.log(wildersCopy); // state mis à jour
