import './App.css';
import React from 'react';
//import { ReactDOM } from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, } from 'react-router-dom';
import About from './components/About';
//import { BrowserRouter } from 'react-router-dom';



const AppLayout = () => {
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
  },
  {
    path:"/about",
    element: <About/>,
  },
  console.log('appRouter')
])
console.log(router);

export default AppLayout;