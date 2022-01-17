import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import CharactersContextProvider from "./contexts/CharactersContext";
import Characters from "./components/Characters";
import CharacterDetails from "./components/Characters/CharacterDetails";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";
import HomeButtons from "./components/HomeButtons";
import SpellsContextProvider from "./contexts/SpellsContext";
import SpellsLoader from "./components/Spells";
import CharacterContextProvider from "./contexts/CharacterContext";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomeButtons />
        </Route>
        <Route path="/characters">
          <CharactersContextProvider>
            <Characters />
          </CharactersContextProvider>
        </Route>
        <Route path="/character/:character_id">
          <CharacterContextProvider>
            <CharacterDetails />
          </CharacterContextProvider>
        </Route>
        <Route path="/spells">
          <SpellsContextProvider>
            <SpellsLoader />
          </SpellsContextProvider>
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
