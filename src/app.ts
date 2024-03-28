// Layout
import { Footer } from './components/footer'
import { Header } from './components/header'
import routes from './lib/routes'

interface AppProps {
  title: string
  pathName: string
}

const App = (props: AppProps): string => `
  <title>${props.title}</title>
  ${Header({ pathName: props.pathName })}

  <main class="container" style="flex-grow: 1;">
    ${routes(props.pathName)}
  </main>

  ${Footer()}
`

export default App
