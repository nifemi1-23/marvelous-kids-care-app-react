import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import aoc from './aoc';
import Join from './Join';
import Space from './Space';
import FAQ from './Faq';
import Live from './Live';
import More from './More';
import Nav from './Nav';
import Footer from './footer';

function App() {
  return (
    <div className="App">
        <Nav />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/Contact" Component={Contact} />
        <Route exact path="/Join" Component={Join} />
        <Route exact path="/aoc" Component={aoc} />
        <Route exact path="/Space" Component={Space} />
        <Route exact path="/FAQ" Component={FAQ} />
        <Route exact path="/Live" Component={Live} />
        <Route exact path="/More" Component={More} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
