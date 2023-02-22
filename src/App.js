import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs/Programs';
import Reasions from './components/Reasions/Reasions';
import Plans from './components/Plans/Plans';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasions/>
      <Plans/>
    </div>
  );
}

export default App;
