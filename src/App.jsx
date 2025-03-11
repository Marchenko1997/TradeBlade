import Header from './components/Header/Header'
import Container from './components/Common/Container/Container'
import Hero from './components/Hero/Hero'
import './App.css'
import Numbers from './components/Numbers/Numbers'
import PastTransactions from "./components/PastTransactions/PastTransactions"

function App() {


  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Numbers />
        <PastTransactions/>
      </Container>
    </>
  );
}

export default App
