import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs/Programs';
import Reasions from './components/Reasions/Reasions';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasions/>
      <Plans/>
      <Testimonials/>
    </div>
  );
}

export default App;
