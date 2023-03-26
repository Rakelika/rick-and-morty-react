import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { RickContextProvider } from './context/context';
import NavComponent from './components/NavComponent/NavComponent';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import LocationsPage from './pages/LocationsPage';
import EpisodesPage from './pages/EpisodesPage';
import SimpleBar from 'simplebar-react';
import SearchComponent from './components/SearchComponent/SearchComponent';
import PaginationComponent from './components/PaginationComponent/PaginationComponent';

function App() {


  return (
    <div className="App">
     <NavComponent></NavComponent>

              <SearchComponent/>
      <Routes>

        <Route exact path="/" element={<HomePage/>}></Route>

        <Route exact path="/characters" element={
          <RickContextProvider>
              <CharactersPage/>
          </RickContextProvider>}>
        </Route>

        <Route exact path="/locations" element={
          <RickContextProvider>
              <LocationsPage/>
          </RickContextProvider>}>
        </Route>

        <Route exact path="/episodes" element={
          <RickContextProvider>
              <EpisodesPage/>
          </RickContextProvider>}>
        </Route>

        {/* <Route exact path="/post/:id" element={<SinglePostPage/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
