
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmoud',

  player: [
    [
      ' Manuel Neuer',
      'Ron-Thorben Hoffmann',
      'Niklas Süle',
      'Josip Stanisic',
      'Alphonso Davies',
      'Lucas Hernández',
      'Benjamin Pavard',
      'Joshua Kimmich',
      'Javi Martínez',
      'Leon Goretzka',
      'Corentin Tolisso',
      'Christopher Scott',
    ],
    [
      'Roman Bürki',
      'Marwin Hitz',
      'Luca Unbehaun',
      'Manuel Akanji',
      'Dan-Axel Zagadou',
      'Mats Hummels',
      'Raphaël Guerreiro',
      'Nico Schulz',
      'Marcel Schmelzer',
      'Mateu Morey Bauzà',
      'Lukasz Piszczek',
      'Thomas Delaney',
    ],
  ],
  score: '4:0',
  scored: [
    'Christopher Scott',
    'Joshua Kimmich',
    'Alphonso Davies',
    'Corentin Tolisso',
  ],
  date: 'Nov 9th ,2037',
  odd: {
    team1: 1.33,
    x: 3.25,
  },
};

const [player1, player2] = game.player;

console.log(player2);

const [gk, ...fielPlayer] = player1;

console.log(gk);
console.log(fielPlayer);
console.log('allPlayer');

//All the name
const [...allPlayer] = [...player1, ...player2];
console.log(allPlayer);

//Add a new new to arry

const newPlayer = ['Thigo', 'Coutingo', 'Persic'];

const playerFinal = [...player1, ...newPlayer];

console.log(playerFinal);

const {
  odd: { team1, x: draw, team2 },
} = game;

//goal function
const printGole = function (...player) {
  console.log(`${player.length} goals where scored`);
};

printGole(
  'Javi Martínez',
  'Leon Goretzka',
  'Corentin Tolisso',
  'Christopher Scott'
);
