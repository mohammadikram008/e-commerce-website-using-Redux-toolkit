import Newfile from "./component /Newfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from "./component /Navbar";
import {Provider} from 'react-redux'
import store from './store/store'
import './App.css'
function App() {
  const newfun = (value) => {
    console.log("this is fun is call by children:", value);
  };

  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter> 
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home /> }></Route>
          <Route path="/cart" element={<Cart /> }></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
