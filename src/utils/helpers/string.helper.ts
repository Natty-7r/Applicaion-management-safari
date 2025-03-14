export const capitalizeFirstLetter = (text: string): string => {
  if (!text) return ''
  return (text.charAt(0).toUpperCase() + text.slice(1)).trim()
}

export const compareString = (
  text1: string,
  text2: string,
  caseSensetive: boolean = false,
): boolean => {
  if (caseSensetive) return text1.trim() === text2.trim()
  return text1.trim().toLocaleLowerCase() === text2.trim().toLocaleLowerCase()
}
