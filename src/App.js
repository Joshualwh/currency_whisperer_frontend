// import logo from "./assets/logo.svg";
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      </Route>
    </Routes>
  );
}

export default App;
