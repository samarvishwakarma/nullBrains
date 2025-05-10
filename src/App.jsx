import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Productivity from './components/Productivity';
import Features from './components/Features';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="font-sans">
        <Hero />
        <Productivity />
        <Features />
        <Team />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;