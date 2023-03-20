import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';

import { ThemeContextProvider } from './contexts/theme/themeContext';
import Home from './views/home/home';
import ButtonTheme from './components/buttons/swicherTheme';
import About from './views/home/about';
import Contact from './views/home/contact';
import Portfolio from './views/home/portfolio';
import Login from './views/home/login';
import Cv from './views/home/cv';
import N404 from './views/home/N404';

const App: React.FC = () => {
  return (
    <div className={`App`}>
      <BrowserRouter>
        <ThemeContextProvider>
          <ButtonTheme />
          <Routes>
            <Route index element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Portfolio' element={<Portfolio />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='Cv' element={<Cv />} />
            <Route path='Login' element={<Login />} />
            <Route path='*' element={<N404 />} />
          </Routes>
        </ThemeContextProvider>
        <ToastContainer theme={'colored'} />
      </BrowserRouter>
    </div>
  );
};

export default App;
