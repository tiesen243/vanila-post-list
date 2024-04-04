export const formatProps = (props: any): string =>
  Object.entries(props)
    .map(([key, value]) => ` ${key}='${value}'`)
    .join('')
