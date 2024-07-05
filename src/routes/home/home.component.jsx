import React from 'react';
import Directory from '../../componenets/directory/directory.component';
import { Outlet } from 'react-router-dom';
const Home = () => {
  

  return (
    <div>
     <Directory/>
     <Outlet></Outlet>
    </div>
  );
};
export default Home;
