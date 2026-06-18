import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#noi-dung-chinh">
        Chuyển đến nội dung chính
      </a>
      <Header />
      <main id="noi-dung-chinh">
        <Hero />
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
