import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PokedexContextProvider from "./contexts/PokedexContext";
import PokemonContextProvider from "./contexts/PokemonContext";

import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Pokedex from "./components/Pokedex";
import Loader from "./components/Common/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

import "./assets/css/styles.css";

const Pokemon = lazy(() => import("./components/Pokemon"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <PokedexContextProvider>
                <Pokedex />
              </PokedexContextProvider>
            </Route>
            <Route path="/pokemon/:number">
              <PokemonContextProvider>
                <Pokemon />
              </PokemonContextProvider>
            </Route>
            <Route path="/404" component={NotFound} />
            <Redirect exact={true} from="*" to="/404" />
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
