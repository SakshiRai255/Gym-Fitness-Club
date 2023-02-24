import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs/Programs';
import Reasions from './components/Reasions/Reasions';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasions/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
