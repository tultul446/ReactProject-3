
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Hero from './components/hERO.JSX';
import { FilterAndSearch } from './components/Filter';
import { Trending } from './components/TrendingCard';
import { BestSelling } from './components/BestSelling';
import Reviews from './components/Reviews';
import FindVehicle from './components/FindVehicle';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <Navbar/>

    <Hero/>
    <FilterAndSearch/>
    <Trending/>
  <BestSelling/>
  <Reviews/>
  <FindVehicle/>
  <Footer/>
    </>
  )
}

export default App
