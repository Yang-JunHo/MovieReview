import './App.css';
import Header from './components/Header';
import Home from './Pages/Home'
import MovieDetail from './Pages/MovieDetail'
import { Route, Routes } from 'react-router-dom';
import Movies from './Pages/Movies';

function App() {

  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/movie/:id' element={<MovieDetail/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
        </Routes>
    </div>
  );
}

export default App;