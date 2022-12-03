import { About } from './components/About';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Services } from './components/Services';



function App() {
  return (
    <div className='App'>
      <header>
        <Nav />
        <Hero/>
      </header>
      <main>
        <Services/>
        <About/>
      </main>
    </div>
  );
}

export default App;
