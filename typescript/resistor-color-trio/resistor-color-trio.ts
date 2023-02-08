export function decodedResistorValue(resistorBands: Array<string>): string {
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
  let thirdNumber = arrayColours.indexOf(resistorBands[2], 0)
  let suffix: string
  if (secondNumber === 0 && thirdNumber === 2) {
      suffix = 'kiloohms'
      return `${firstNumber} ${suffix}`
  } else if (thirdNumber <= 2) {
    suffix = 'ohms'
  } else {
    suffix = 'kiloohms'
    thirdNumber -= 3
  }
  const zeros = 10**thirdNumber
  return `${(firstNumber*10+secondNumber)*zeros} ${suffix}`
}
