// Layout
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

// Routes
import routes from '@/routes'

const App = (props: { pathName: string }): string => `
  ${Header({ pathName: props.pathName })}
  ${routes(props.pathName)}
  ${Footer()}
`

export default App
