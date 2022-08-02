import Header from './components/Header'
import Footer from './components/Footer'
import Converter from './components/Converter';
import Explanation from './components/Explanation';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Explanation/>
      <Converter/>
      <Footer />
    </div>
  );
}

export default App;
