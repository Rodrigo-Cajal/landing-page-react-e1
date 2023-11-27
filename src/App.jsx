import './App.css'
import { Home } from './screens/home/home'
import { ContextMenuHamb } from './context/menuHamb';


function App() {

  return(
 <ContextMenuHamb>
  <Home/>
 </ContextMenuHamb>
  );

}

export default App
