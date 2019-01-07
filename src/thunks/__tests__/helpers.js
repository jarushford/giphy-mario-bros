import { storeGifs, getIDs, getNewID, getUnusedIDs, buildPlayer } from '../helpers'

describe('helpers', () => {
  describe('storeGifs', () => {
    it('should set data to localStorage if response is ok', async () => {
      await storeGifs()
      const gifs = JSON.parse(localStorage.getItem('gifs'))

      expect(gifs).toHaveLength(50)
    })

    it('should throw an error if unsuccessful', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      let message

      try {
        await storeGifs()
      } catch (error) {
        message = error.message
      }
      
      expect(message).toEqual('Could not fetch GIFs')
    })
  })

  describe('getIDs', () => {
    it('should return an array of the correct length of IDs based on how many players there are', () => {
      const result = getIDs(3)

      expect(result).toHaveLength(15)
    })
  })

  describe('getNewID', () => {
    it('should turn a random newGif from a list of unused IDs', () => {
      const unusedIDs = [
        '3o7aCTtqaJWnAm46L6',
        '6c2xTmMjeFxWU',
        'Sq4QZyBwagvle',
        'UTw9wnoyP8Pcs'
      ]

      const result = getNewID(unusedIDs)

      expect(unusedIDs).toContain(result)
    })
  })

  describe('getUnusedIDs', () => {
    it('should return a new list of unused IDs', () => {
      const IDs = [
        '3o7aCTtqaJWnAm46L6',
        '6c2xTmMjeFxWU',
        'Sq4QZyBwagvle',
        'UTw9wnoyP8Pcs'
      ]

      const result = getUnusedIDs(IDs)

      expect(result).toHaveLength(46)
    })
  })

  describe('buildPlayer', () => {
    it('should return an array of player objects if there are three players', () => {
      const gifs = [
        '3WQSszfiurgnC',
        'fz55PalmN3GbS',
        'mM9HnZM5LSO0o',
        'l4hLFuaWrOCvmnIVW',
        'l0ExmDyrbMv6djjmE',
        'kD8W24QqEaaNa',
        '8gRil78bGkenm',
        'BM3aWJnbVumli',
        '3o7aCSYC0v5wVlCqWc',
        '1bqWJ6PDfW5os',
        '12Y0tYtkrwQaOY',
        'l4Ep0e7HDcyUf2dmo',
        '26FfdeSEIHbHZOuTm',
        '3osBLuWLyeEHh2lwXu',
        '3o6fJfTVq0y1tyAzEA'
      ]
      const expected = [
        {
          player: 1,
          score: 0,
          gifs: [
            '3WQSszfiurgnC',
            'fz55PalmN3GbS',
            'mM9HnZM5LSO0o',
            'l4hLFuaWrOCvmnIVW',
            'l0ExmDyrbMv6djjmE'
          ]
        },
        {
          player: 2,
          score: 0,
          gifs: [
            'kD8W24QqEaaNa',
            '8gRil78bGkenm',
            'BM3aWJnbVumli',
            '3o7aCSYC0v5wVlCqWc',
            '1bqWJ6PDfW5os'
          ]
        },
        {
          player: 3,
          score: 0,
          gifs: [
            '12Y0tYtkrwQaOY',
            'l4Ep0e7HDcyUf2dmo',
            '26FfdeSEIHbHZOuTm',
            '3osBLuWLyeEHh2lwXu',
            '3o6fJfTVq0y1tyAzEA'
          ]
        }
      ]

      const result = buildPlayer(3, gifs)

      expect(result).toEqual(expected)
    })

    it('should return an array of player objects if there are four players', () => {
      const gifs = [
        '3WQSszfiurgnC',
        'fz55PalmN3GbS',
        'mM9HnZM5LSO0o',
        'l4hLFuaWrOCvmnIVW',
        'l0ExmDyrbMv6djjmE',
        'kD8W24QqEaaNa',
        '8gRil78bGkenm',
        'BM3aWJnbVumli',
        '3o7aCSYC0v5wVlCqWc',
        '1bqWJ6PDfW5os',
        '12Y0tYtkrwQaOY',
        'l4Ep0e7HDcyUf2dmo',
        '26FfdeSEIHbHZOuTm',
        '3osBLuWLyeEHh2lwXu',
        '3o6fJfTVq0y1tyAzEA',
        'vi2ciYHi5u0FO',
        'yXPuErPgcf2Le',
        'l1Kuh28roYRsKQRBS',
        'bEH6uQUUVFWpjETjYa',
        'DR9DeLm91dHs4'
      ]
      const expected = [
        {
          player: 1,
          score: 0,
          gifs: [
            '3WQSszfiurgnC',
            'fz55PalmN3GbS',
            'mM9HnZM5LSO0o',
            'l4hLFuaWrOCvmnIVW',
            'l0ExmDyrbMv6djjmE'
          ]
        },
        {
          player: 2,
          score: 0,
          gifs: [
            'kD8W24QqEaaNa',
            '8gRil78bGkenm',
            'BM3aWJnbVumli',
            '3o7aCSYC0v5wVlCqWc',
            '1bqWJ6PDfW5os'
          ]
        },
        {
          player: 3,
          score: 0,
          gifs: [
            '12Y0tYtkrwQaOY',
            'l4Ep0e7HDcyUf2dmo',
            '26FfdeSEIHbHZOuTm',
            '3osBLuWLyeEHh2lwXu',
            '3o6fJfTVq0y1tyAzEA'
          ]
        },
        {
          player: 4,
          score: 0,
          gifs: [
            'vi2ciYHi5u0FO',
            'yXPuErPgcf2Le',
            'l1Kuh28roYRsKQRBS',
            'bEH6uQUUVFWpjETjYa',
            'DR9DeLm91dHs4'
          ]
        }
      ]

      const result = buildPlayer(4, gifs)

      expect(result).toEqual(expected)
    })
  })
})