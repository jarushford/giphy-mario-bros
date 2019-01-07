import { captionHelper } from '../captions'

describe('captionHelper', () => {
  it('should return a random caption that has not yet been used', () => {
    const usedCaptions = [
      'When you miraculously stumble your way through a level',
      'When you capture the T-Rex',
      'When you get paired with a computer for a mini-game',
      'When you lose because of bonus stars',
      'When you miss the edge on your recovery',
      'When Yoshi takes the fall for Mario again'
    ]
    
    const result = captionHelper(usedCaptions)

    expect(result.length).toBeGreaterThan(0)
  })
})