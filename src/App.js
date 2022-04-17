
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import SignUp from './Components/Auth/SignUp/SignUp';
import Home from './Components/Home/Home';

import RequireAuth from './Components/Auth/RequireAuth';
import Checkout from './Components/Checkout/Checkout';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
