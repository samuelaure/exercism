export function isLeap(year: number): boolean {
  if (Number.isInteger(year/4)) {
    if(Number.isInteger(year/100)) {
      if (Number.isInteger(year/400)) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  } else {
    return false
  }
}
