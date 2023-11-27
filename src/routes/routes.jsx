import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
import { Home } from '../screens/home/home';
import { AboutUs } from '../screens/aboutUs/aboutUs';
import { Contact } from '../screens/contact/contact';
import { Products } from '../screens/products/products';
 
  
  export const ContainerRoutes = () => {

    return (
      <BrowserRouter>
         <Home>
            <Routes>
              <Route path='/' element={<Home />} />  
              <Route path='nosotros' element={<AboutUs/>} />  
              <Route path='contacto' element={<Contact />} />  
              <Route path='productos' element={<Products/>} />                
              <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
          </Home>       
      </BrowserRouter>
    );
  };
  