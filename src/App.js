import './App.css';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import background from '../src/bg.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
