import { GlobalStyles } from './styles/globalStyles'
import { Button } from './components/Button'
import { Header } from './styles/styles'

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <p>hello World</p>
      </Header>
      <Button text="Inscreva-se agora" />
    </>
  )
}
