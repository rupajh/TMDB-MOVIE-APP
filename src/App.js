import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="App">
     <div className='page-background'>
      <div className='home-page-wraper'>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    </div>
  );
}

export default App;
