import { Router, Routes, Route } from '@solidjs/router';
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import Home from './routes/home';
import Design from './routes/design';
import About from './routes/about';
import Contact from './routes/contact';
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
          <Route path="locations" component={() => <div>Locations</div>} />
          <Route path="contact" component={Contact} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
