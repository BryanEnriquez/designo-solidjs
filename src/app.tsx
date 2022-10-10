import { Router, Routes, Route } from '@solidjs/router';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import Home from './routes/home';
import Design from './routes/design';
import About from './routes/about';
import Locations from './routes/locations';
import Contact from './routes/contact';
import NotFound from './routes/not-found';
import './app.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" component={Main}>
          <Route path="" component={Home} />
          <Route path="design/:category" component={Design} />
          <Route path="about" component={About} />
          <Route path="locations" component={Locations} />
          <Route path="contact" component={Contact} />
          <Route path="*" element={NotFound} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
