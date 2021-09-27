
import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Brand from './containers/Brand/Brand';
import Home from './containers/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Link to="/" className="cartBtn"><span>1</span><img src="/images/cart.png" alt='cart' /></Link>
      <div className='App'>
        {/* <LeftNavBar /> */}
        <Route path="/" exact component={Home} />
        <Route path="/instantvouchers/:brand" exact component={Brand} />
      </div>
    </BrowserRouter>
  );
}

export default App;
