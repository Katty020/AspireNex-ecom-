import { Routes ,Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/Auth/authentication";
import Checkout from "./routes/checkout/checkout.component";
import Shop from "./routes/shop/shop-component";
const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Navigation/>}>

          <Route index  element={<Home/>}/>
          <Route path='shop/*'  element={<Shop/>}/>

          <Route path='checkout'  element={<Checkout/>}/>
          <Route path='auth' element={<Authentication></Authentication>}></Route>

        </Route>
      </Routes>
  );
};
export default App;
