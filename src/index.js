import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Provider } from 'react-redux'
import { store } from './Store/store';



const HomeLazyLoding =React.lazy(()=>import("./Page/Home"));
const AboutLazyLoding =React.lazy(()=>import("./Page/About"));
const ContactLazyLoding =React.lazy(()=>import("./Page/Cantact"));
const  AccountLazyLoding =React.lazy(()=>import("./Page/Account"));
const HeaderLazyLoading=React.lazy(()=>import("./Components/Header"));
const CoffeMenuLazyLoading =React.lazy(()=>import("./Page/CoffeMenu"));
const CardPageLazyLoading=React.lazy(()=>import("./Page/Order")); 
const FavoritesPageLazyLoading=React.lazy(()=>import("./Page/FavoritesPage")); 
const  LoginLazyLoding =React.lazy(()=>import("./Components/Login"));
const  DessertPageLazyLoding =React.lazy(()=>import("./Page/DessertPage"));
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
      <React.Suspense fallback="Loading Home Page">
          <HomeLazyLoding/>
      </React.Suspense>

      </>
  },
  {
    path: "/home",
    element: 
      <>
        <React.Suspense fallback="Loading Home Page">
          <HomeLazyLoding/>
      </React.Suspense>
      </>
  },
  {
    path: "/about",
    element: 
    <div className=' overflow-hidden'>
    <div className='home_page' style={{overflow:'visible'}}>
      <React.Suspense fallback="Loading...">
        <HeaderLazyLoading/>
      </React.Suspense>
  
    </div>
     <React.Suspense fallback="Loading about Page">
      <AboutLazyLoding/>
     </React.Suspense>
    
    </div>,
  },
  {
    path: "/menu",
    element: 

        <div >
          <React.Suspense fallback="Loading Menu">
            <CoffeMenuLazyLoading/>
          </React.Suspense>
        </div>

  },
  {
    path: "/contact",
    element: 
        <div className=' overflow-hidden'>
          <div className='home_page' style={{overflow:'visible'}}>
          <React.Suspense fallback="Loading...">
          <HeaderLazyLoading/>
      </React.Suspense>
          </div>
          <React.Suspense fallback="Loading Contact Page">
            <ContactLazyLoding/>
          </React.Suspense>
  
        </div>
  ,
  }
  ,{
    path:'/card',
    element:  <div className=' overflow-hidden'>
        <div className='home_page ' style={{overflow:'visible'}}>
        <React.Suspense fallback="Loading...">
        <HeaderLazyLoading/>
      </React.Suspense>
      </div>
        <React.Suspense fallback="Loading Cart Page">
          <CardPageLazyLoading/>
        </React.Suspense>
    </div> 
        
  }
  ,{
    path:'/account',
    element:  <div className=' overflow-hidden'>
        <div className='home_page ' style={{overflow:'visible'}}>
        <React.Suspense fallback="Loading...">
        <HeaderLazyLoading/>
      </React.Suspense>
      </div>
      <React.Suspense fallback="Loading Account Page">
        <AccountLazyLoding/>
      </React.Suspense>
    
    </div> 
        
  }
  ,{
    path:'/dessert',
    element:  <div className=' overflow-hidden'>
      <React.Suspense fallback="Loading Dessert Page">
        <DessertPageLazyLoding/>
      </React.Suspense>
        
    </div> 
  }
  ,{
    path:'/favorites',
    element:  <div className=' overflow-hidden'>
        <div className='home_page ' style={{overflow:'visible'}} >
        <React.Suspense fallback="Loading...">
        <HeaderLazyLoading/>
      </React.Suspense>
      </div>

      <React.Suspense fallback="Loading Page">
        <FavoritesPageLazyLoading/>
      </React.Suspense>
  
    </div> 
        
  }
  ,{
    path:'/login',
    element:  <div className=' overflow-hidden'>
        <div className='home_page ' style={{overflow:'visible'}}>
        <React.Suspense fallback="Loading...">
        <HeaderLazyLoading/>
      </React.Suspense>
      </div>
      <React.Suspense fallback="Loading Login Page">
        <LoginLazyLoding/>
      </React.Suspense>
    
    </div> 
        
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

