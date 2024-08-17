const solution = (players, callings) => {
  // for (let i = 0; i < callings.length; i++) {
  //   const calling = callings[i];
  //   const playerIdx = players.findIndex(name => name === calling);
  //
  //   if (playerIdx > -1) {
  //     const front = players[playerIdx - 1];
  //     const back = players[playerIdx];
  //
  //     if (back && front) {
  //       players[playerIdx - 1] = back;
  //       players[playerIdx] = front;
  //     }
  //   }
  // } // 시간 초과

  const playerInfo = {};
  for (let i = 0; i < players.length; i++) {
    playerInfo[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const calling = callings[i];
    const playerRank = playerInfo[calling];

    if (playerRank > 0) {
      const frontPlayer = players[playerRank - 1];
      const currPlayer = players[playerRank];

      if (frontPlayer && currPlayer) {
        players[playerRank - 1] = currPlayer
        players[playerRank] = frontPlayer;

        playerInfo[frontPlayer] = playerRank;
        playerInfo[currPlayer] = playerRank - 1;
      }
    }
  }

  return players;
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])) // ["mumu", "kai", "mine", "soe", "poe"]