
import './App.css'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { MoreInfo } from './components/MoreInfo/MoreInfo';
import { Services } from './components/OurServices/Services';

function App() {


  return (
    <div className='parent'>
      <Header />
      <Home />
      <MoreInfo />
      <Services />
      <Footer />
    </div>
  )
}

export default App
