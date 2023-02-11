import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home/home'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route  path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
