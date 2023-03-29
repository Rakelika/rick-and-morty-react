import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { RickContextProvider } from './context/context';
import NavComponent from './components/NavComponent/NavComponent';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import SingleCharacterPage from './pages/SingleCharacterPage';

function App() {

  return (
    <div className="App">
     {/* <NavComponent></NavComponent> */}
      <Routes>

        <Route exact path="/" element={<HomePage/>}></Route>

        <Route exact path="/characters" element={
          <RickContextProvider>
              <CharactersPage/>
          </RickContextProvider>}>
        </Route>

        <Route exact path="/character/:id" element={
                    <RickContextProvider>
        <SingleCharacterPage/>
        </RickContextProvider>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
