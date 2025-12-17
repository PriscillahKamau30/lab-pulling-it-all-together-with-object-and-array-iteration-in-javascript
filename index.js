function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


// Helper: combine all players
const allPlayers = () => {
  const game = gameObject();
  return { ...game.home.players, ...game.away.players };
};

// 1. numPointsScored
const numPointsScored = playerName => allPlayers()[playerName].points;

// 2. shoeSize
const shoeSize = playerName => allPlayers()[playerName].shoe;

// 3. teamColors
const teamColors = teamName => {
  const game = gameObject();
  return Object.values(game).find(team => team.teamName === teamName).colors;
};

// 4. teamNames
const teamNames = () => Object.values(gameObject()).map(team => team.teamName);

// 5. playerNumbers
const playerNumbers = teamName => {
  const team = Object.values(gameObject()).find(team => team.teamName === teamName);
  return Object.values(team.players).map(player => player.number);
};

// 6. playerStats
const playerStats = playerName => allPlayers()[playerName];

// 7. bigShoeRebounds
const bigShoeRebounds = () => {
  const players = allPlayers();
  const playerWithBiggestShoe = Object.values(players).reduce((max, player) =>
    player.shoe > max.shoe ? player : max
  );
  return playerWithBiggestShoe.rebounds;
};

// 8. mostPointsScored
const mostPointsScored = () => {
  const players = allPlayers();
  return Object.entries(players).reduce((maxPlayer, [name, stats]) =>
    stats.points > players[maxPlayer]?.points ? name : maxPlayer
  , "");
};

// 9. winningTeam
const winningTeam = () => {
  const game = gameObject();
  const teamPoints = Object.values(game).map(team =>
    Object.values(team.players).reduce((sum, player) => sum + player.points, 0)
  );
  return teamPoints[0] > teamPoints[1] ? game.home.teamName : game.away.teamName;
};

// 10. playerWithLongestName
const playerWithLongestName = () => {
  const players = Object.keys(allPlayers());
  return players.reduce((longest, name) => (name.length > longest.length ? name : longest), "");
};

// 11. doesLongNameStealATon
const doesLongNameStealATon = () => {
  const players = allPlayers();
  const longestNamePlayer = playerWithLongestName();
  const maxSteals = Math.max(...Object.values(players).map(p => p.steals));
  return players[longestNamePlayer].steals === maxSteals;
};

// Export for Jest tests
module.exports = {
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon
};

