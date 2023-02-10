export function isPangram(input: string): boolean {
  const alphabetLetters = 'abcdefghijklmnopqrstuvwxyz'
  const inputLetters = input.toLowerCase().split('')
  return alphabetLetters.split('').every((alphabetLetter) => inputLetters.includes(alphabetLetter))
}
