import styles from "./App.module.css";
import { Home, About, Contact, Error } from "./pages";
import { Navbar } from "./components";
import {  Route, Routes } from "react-router-dom";

function App() {
  const links = [
    { name: "home", slug: "/" },
    { name: "about", slug: "/about" },
    { name: "contact", slug: "/contact" },
  ];
  return (
    <div className={styles.app}>
      <Navbar links={links} title='Akhere I' />
      <main>
       <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/About' element={<About />}/>
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='*' element={<Error />}/>
        </Routes>
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
