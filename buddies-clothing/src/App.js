import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';



const Shop = () => {
  return(
    <div>
      <div>
        <h1>Placeholder for Shop</h1>
      </div>
    </div>
  )
}



const App = () => {

    return (
     <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element = {<Home/>} />
        <Route path = 'shop' element = {<Shop/>} />

      </Route>
     </Routes> 
    )
  };
  
  export default App;
  