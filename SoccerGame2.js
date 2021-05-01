
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
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (let [i, player] of game.scored.entries()) {
  console.log(`Gole ${i + 1}  ${player}`);
}

const odds = Object.values(game.odds);

let avarage = 0;
for (const odd of odds) {
  avarage += odd;

  avarage /= odds.length;

  console.log(avarage);
}


for (let [team, odd] of Object.entries(game.odds)) {
  const teamStr = team == 'x' ? 'draw' : `victory ${game[team]}`;

  console.log(` Odd of ${teamStr} ${odd}`);
}
