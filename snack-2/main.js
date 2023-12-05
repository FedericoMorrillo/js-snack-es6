'use strict'
function numeroRandom(){
  return  Math.floor((Math.random()* 10) +1);
}
const squadre =[
    {
        nome: "inter",
        punti: 0 ,
        falli: 0
    },
    {
        nome: "milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "lazio",
        punti: 0,
        falli: 0
    }
];

squadre.forEach(squadra => {
    squadra.punti = numeroRandom();
    squadra.falli = numeroRandom();
});
console.log(squadre)
    
const squadreFalli = squadre.map(({ nome, falli }) => ({ nome, falli }));

// Output dell'array con nomi e falli subiti
console.log(squadreFalli);
