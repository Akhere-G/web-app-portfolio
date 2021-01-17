import styles from "./App.module.css";
import { Switch, Route } from "react-router-dom";
import { Home, About, Contact, Error } from "./pages";
import { Navbar } from "./components";
function App() {
  const links = [
    { name: "home", slug: "/" },
    { name: "about", slug: "/about" },
    { name: "contact", slug: "/contact" },
  ];
  return (
    <div className={styles.app}>
      <Navbar links={links} title='Akhere Ihoeghinlan' />
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/About'>
            <About />
          </Route>
          <Route exact path='/Contact'>
            <Contact />
          </Route>
          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
      </main>
      <footer className={styles.footer}>
        <span>
          <p>Akhere Ihoeghinlan &copy; 2020</p>
        </span>
      </footer>
    </div>
  );
}

export default App;
