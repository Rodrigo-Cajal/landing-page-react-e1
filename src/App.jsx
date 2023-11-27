import './App.css'
import { Home } from './screens/home/home'
import { MenuProvider } from './Header/MenuContext';


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
