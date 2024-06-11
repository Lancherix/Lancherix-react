import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SiteNav from './components/Common/SiteNav';
import SiteFooter from './components/Common/SiteFooter';

import HomePage from './components/Common/home/HomePage';
import LoginPage from './components/Common/auth/LoginPage';
import RegisterPage from './components/Common/auth/RegisterPage';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div>
      <SiteNav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' exact={true} element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
