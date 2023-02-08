export function toRna(dna: string): string {
  const chars = dna.split('')
  const objectName = {
    A: 'U',
    C: 'G',
    G: 'C',
    T: 'A'
  }
  let stringToReturn = ''
  for (const char of chars) {
    if (!objectName[char as keyof typeof objectName]) {
      throw new Error('Invalid input DNA.')
    }
    stringToReturn += String(objectName[char as keyof typeof objectName])
  }
  return stringToReturn
}
