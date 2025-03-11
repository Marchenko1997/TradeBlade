import Header from './components/Header/Header'
import Container from './components/Common/Container/Container'
import Hero from './components/Hero/Hero'
import './App.css'
import Numbers from './components/Numbers/Numbers'
import PastTransactions from "./components/PastTransactions/PastTransactions"
import AboutCompany from './components/AboutCompany/AboutCompany'

function App() {


  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Numbers />
        <PastTransactions />
        <AboutCompany />
      </Container>
    </>
  );
}

export default App
