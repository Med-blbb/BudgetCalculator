
import './App.css'
import AjoutB from './components/AjoutB';
import AjoutD from './components/AjoutD';
import Header from './components/Header'
import List from './components/List'
import Statis from './components/Statis';

function App() {
 
  return (
    <>
      <Header />
      <Statis />
      <div className="la">
        <div className='allajout'>
          <AjoutB />
          <AjoutD />
        </div>
        <div className='alllist'>
          <List />
        </div>
      </div>
    </>
  );
}

export default App
