"use strict";
//dichiarazioni 
const biciScelta = document.querySelector(".bicicletta");

//array di oggetti
const biciclette = [
  {
    modello: "bici1",
    peso: 18,
  },
  {
    modello: "bici2",
    peso: 14,
  },
  {
    modello: "bici3",
    peso: 40,
  },
  {
    modello: "bici4",
    peso: 32,
  },
];

let biciMinore = biciclette[0];

for (const bici of biciclette) {
    if (bici.peso < biciMinore.peso) {
        biciMinore = bici;
    }
}

 const { modello, peso } = biciMinore;
console.log(`La bici con peso minore è ${modello} con un peso di ${peso} kg.`);
biciScelta.innerHTML =`La bici con peso minore è ${modello} con un peso di ${peso} kg.`;
