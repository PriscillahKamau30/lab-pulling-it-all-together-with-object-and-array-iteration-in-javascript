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

// Function to get all players in one object
function allPlayers() {
  var game = gameObject();
  var combined = {};
  
  // Add home players
  var homePlayerKeys = Object.keys(game.home.players);
  for (var i = 0; i < homePlayerKeys.length; i++) {
    var key = homePlayerKeys[i];
    combined[key] = game.home.players[key];
  }
  
  // Add away players
  var awayPlayerKeys = Object.keys(game.away.players);
  for (var i = 0; i < awayPlayerKeys.length; i++) {
    var key = awayPlayerKeys[i];
    combined[key] = game.away.players[key];
  }
  
  return combined;
}

// Points scored by a player
function numPointsScored(playerName) {
  var players = allPlayers();
  return players[playerName].points;
}

// Shoe size of a player
function shoeSize(playerName) {
  var players = allPlayers();
  return players[playerName].shoe;
}

// Team colors
function teamColors(teamName) {
  var game = gameObject();
  if (game.home.teamName === teamName) {
    return game.home.colors;
  } else if (game.away.teamName === teamName) {
    return game.away.colors;
  }
}

// Team names
function teamNames() {
  var game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// Player numbers for a team
function playerNumbers(teamName) {
  var game = gameObject();
  var numbers = [];
  var teamPlayers;
  
  if (game.home.teamName === teamName) {
    teamPlayers = game.home.players;
  } else if (game.away.teamName === teamName) {
    teamPlayers = game.away.players;
  }
  
  var playerKeys = Object.keys(teamPlayers);
  for (var i = 0; i < playerKeys.length; i++) {
    numbers.push(teamPlayers[playerKeys[i]].number);
  }
  
  return numbers;
}

// Player stats
function playerStats(playerName) {
  var players = allPlayers();
  return players[playerName];
}

// Rebounds of player with biggest shoe
function bigShoeRebounds() {
  var players = allPlayers();
  var biggestShoe = 0;
  var rebounds = 0;
  
  var playerKeys = Object.keys(players);
  for (var i = 0; i < playerKeys.length; i++) {
    var player = players[playerKeys[i]];
    if (player.shoe > biggestShoe) {
      biggestShoe = player.shoe;
      rebounds = player.rebounds;
    }
  }
  
  return rebounds;
}

// Player with most points
function mostPointsScored() {
  var players = allPlayers();
  var maxPoints = 0;
  var topPlayer = "";
  
  var playerKeys = Object.keys(players);
  for (var i = 0; i < playerKeys.length; i++) {
    var player = players[playerKeys[i]];
    if (player.points > maxPoints) {
      maxPoints = player.points;
      topPlayer = playerKeys[i];
    }
  }
  
  return topPlayer;
}

// Winning team
function winningTeam() {
  var game = gameObject();
  var homePoints = 0;
  var awayPoints = 0;
  
  var homeKeys = Object.keys(game.home.players);
  for (var i = 0; i < homeKeys.length; i++) {
    homePoints += game.home.players[homeKeys[i]].points;
  }
  
  var awayKeys = Object.keys(game.away.players);
  for (var i = 0; i < awayKeys.length; i++) {
    awayPoints += game.away.players[awayKeys[i]].points;
  }
  
  if (homePoints > awayPoints) {
    return game.home.teamName;
  } else {
    return game.away.teamName;
  }
}

// Player with longest name
function playerWithLongestName() {
  var players = Object.keys(allPlayers());
  var longest = "";
  
  for (var i = 0; i < players.length; i++) {
    if (players[i].length > longest.length) {
      longest = players[i];
    }
  }
  
  return longest;
}

// Does the player with the longest name have the most steals
function doesLongNameStealATon() {
  var players = allPlayers();
  var longestNamePlayer = playerWithLongestName();
  
  var maxSteals = 0;
  var playerKeys = Object.keys(players);
  for (var i = 0; i < playerKeys.length; i++) {
    if (players[playerKeys[i]].steals > maxSteals) {
      maxSteals = players[playerKeys[i]].steals;
    }
  }
  
  return players[longestNamePlayer].steals === maxSteals;
}

// Export functions for Jest tests
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
