import './App.css'
import { Home } from './screens/home/home'
import { MenuHambProvider } from './context/MenuHambContext';


function App() {

  return(
 <MenuHambProvider>
 <div>
  <Home/>
  </div>
 </MenuHambProvider>
  );

}

export default App
