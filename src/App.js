import './styles/typography.css'
import './styles/styles.css'
import Nav from './pages/navigation/Nav'
import Home from './pages/home/Home'
import About from './pages/about/About'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
