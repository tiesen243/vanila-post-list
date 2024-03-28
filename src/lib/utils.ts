export const getTitles = () => {
  const pathName = window.location.pathname
  const title = pathName === '/' ? 'Home' : pathName.slice(1).charAt(0).toUpperCase() + pathName.slice(2)
  return { title, pathName }
}
