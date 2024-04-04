export const formatProps = (props: any): string =>
  Object.entries(props)
    .map(([key, value]) => ` ${key}='${value}'`)
    .join('')

export const html = (strings: TemplateStringsArray, ...values: any[]): string => String.raw({ raw: strings }, ...values)
