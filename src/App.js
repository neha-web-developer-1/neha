import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <About></About>
        <Contact></Contact>
        <Services/>
      </div>
    </div>
  );
}

export default App;
