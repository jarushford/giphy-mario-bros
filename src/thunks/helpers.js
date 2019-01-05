import { gifs } from '../utils/gifs'

export const getIDs = (players) => {
  const numNeeded = players * 5
  const IDs = []
  while (IDs.length !== numNeeded) {
    let randIndex = Math.floor(Math.random() * gifs.length)
    if (!IDs.includes(gifs[randIndex])) {
      IDs.push(gifs[randIndex])
    }
  }
  return IDs
}

export const getNewID = (unusedIDs) => {
  const randIndex = Math.floor(Math.random() * unusedIDs.length)
  const newGif = unusedIDs[randIndex]
  return newGif
}

export const getUnusedIDs = (IDs) => {
  return gifs.filter(gif => {
    return !IDs.includes(gif)
  })
}

export const buildPlayer = (players, response) => {
  let readyPlayers

  if (players === 3) {
    readyPlayers = [
      {
        player: 1,
        score: 0,
        gifs: response.splice(0, 5)
      },
      {
        player: 2,
        score: 0,
        gifs: response.splice(0, 5)
      },
      {
        player: 3,
        score: 0,
        gifs: response
      }
    ]
  } else {
    readyPlayers = [
      {
        player: 1,
        score: 0,
        gifs: response.splice(0, 5)
      },
      {
        player: 2,
        score: 0,
        gifs: response.splice(0, 5)
      },
      {
        player: 3,
        score: 0,
        gifs: response.splice(0, 5)
      },
      {
        player: 4,
        score: 0,
        gifs: response
      }
    ]
  }

  return readyPlayers
}