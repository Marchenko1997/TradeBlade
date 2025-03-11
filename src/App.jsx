import Header from './components/Header/Header'
import Container from './components/Common/Container/Container'
import Hero from './components/Hero/Hero'
import './App.css'
import Numbers from './components/Numbers/Numbers'
import PastTransactions from "./components/PastTransactions/PastTransactions"
import AboutCompany from './components/AboutCompany/AboutCompany'
import Tarifs from './components/Tarifs/Tarifs'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Numbers />
        <PastTransactions />
        <AboutCompany />
        <Tarifs />
        <FAQ />
        <Footer />
      </Container>
    </>
  );
}

export default App
