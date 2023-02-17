export const isQuestion = (message: string): boolean => message.endsWith('?');
export const isShouting = (message: string): boolean => /[A-Z]+/.test(message) && message == message.toUpperCase()

export function hey(message: string): string {
  message = message.trim()
  if (message === '') {
    return 'Fine. Be that way!'
  } else if (isQuestion(message) && isShouting(message)) {
    return "Calm down, I know what I'm doing!"
  } else if (isShouting(message)) {
    return 'Whoa, chill out!'
  } else if (isQuestion(message)) {
    return 'Sure.'
  } else {
    return 'Whatever.'
  }
}
