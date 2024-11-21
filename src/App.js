// import logo from "./assets/logo.svg";
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Subscription from './routes/subscription/subscription.component';
import Authentication from './routes/authentication/authentication.component';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='subscription' element={<Subscription />}/>
        <Route path='authentication' element={<Authentication />}/>
      </Route>
    </Routes>
  );
}

export default App;
