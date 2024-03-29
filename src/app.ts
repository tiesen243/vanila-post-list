// Layout
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

// Routes
import routes from '@/routes'

const App = (props: { pathName: string }): string => `
  ${Header({ pathName: props.pathName })}

  <main class="container" style="flex-grow: 1;">
    ${routes(props.pathName)}
  </main>

  ${Footer()}
`

export default App
