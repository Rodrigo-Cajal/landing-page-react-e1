import './App.css'
import { Home } from './screens/home/home'
import { MenuProvider } from './context/menuHamb';


function App() {

  return(
 <MenuProvider>
 <div>
  <Home/>
  </div>
 </MenuProvider>
  );

}

export default App
