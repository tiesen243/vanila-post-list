// Layout
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

// Routes
import routes from '@/routes'
import { html } from './lib/utils'

const App = (props: { pathName: string }): string => html`
  ${Header({ pathName: props.pathName })} ${routes(props.pathName)} ${Footer()}
`

export default App
