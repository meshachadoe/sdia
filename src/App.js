import './styles/typography.css'
import './styles/styles.css'
import Nav from './pages/navigation/Nav'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
