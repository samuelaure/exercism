export function decodedValue(resistorBands: Array<string>): number {
  const arrayColours = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ]
  const firstNumber = arrayColours.indexOf(resistorBands[0], 0)
  const secondNumber = arrayColours.indexOf(resistorBands[1], 0)
  return firstNumber*10+secondNumber
}
