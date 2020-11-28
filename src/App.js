import styles from './styles/App.module.css';
import { Switch, Route, Link } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </main>
      <footer className={styles.footer}>
        <span>
          <p>
            Akhere Ihoeghinlan &copy; 2020
          </p>
        </span>

      </footer>
    </div>
  );
}

export default App;
