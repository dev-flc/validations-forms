export const convertTextUpperOrLower = (text) => {
  return [
    text === text.toUpperCase()
      ? text.toLowerCase() || text === text.toLowerCase()
      : text.toUpperCase(),
    text === text.toUpperCase(),
  ]
}
