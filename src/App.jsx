import "./App.css";
import MovieProvider from "./contexts/MovieProvider";
import Searcher from "./components/Movie/Searcher";
import Movies from "./components/Movie/Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Movie/Detail";

function App() {
  return (
    <>
      <MovieProvider>
        <Router>
          <Searcher />
          <Routes>
            <Route path="/" Component={Movies}/>
            <Route path="/Detail/:id" Component={Detail}/>
          </Routes>
        </Router>
      </MovieProvider>
    </>
  );
}

export default App;
