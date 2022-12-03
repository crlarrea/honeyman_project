import { About } from './components/About';
import { Footer } from './components/Footer';
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
        <Footer/>
      </main>
    </div>
  );
}

export default App;
