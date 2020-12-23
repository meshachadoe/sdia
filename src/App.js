import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import './styles/typography.css'
import './styles/styles.css'
import Nav from './pages/navigation/Nav'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/">
          <Home />
          <About />
          <Contact />
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
