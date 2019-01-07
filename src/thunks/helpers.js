import { gifs } from '../utils/gifs'
import { apiKey } from '../utils/apiKey'

export const storeGifs = async () => {
  const unresolvedPromises = gifs.map(async (id) => {
    const url = `http://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
    const response = await fetch(url)
        
    if (!response.ok) {
      throw Error('Could not fetch GIFs')
    }
    const result = await response.json()
    return result.data
  })
  const data = await Promise.all(unresolvedPromises)
  localStorage.setItem('gifs', JSON.stringify(data))
}

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