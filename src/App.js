
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import SignUp from './Components/Auth/SignUp/SignUp';
import Home from './Components/Home/Home';

import RequireAuth from './Components/Auth/RequireAuth';

import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Pages/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        {/* <Route path='/checkout' element={<Checkout></Checkout>}></Route> */}

        <Route path='checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
