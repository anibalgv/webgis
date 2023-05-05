import Navbar from './components/home/Navbar';
import LeftSidebar from './components/home/LeftSidebar';
import Home from './pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './services/geoserver/GeoserverLayers';
import MapComponent from './pages/Map';
import Staff from './pages/Staff';
import Documents from './pages/Documents';
import Downloads from './pages/Downloads';

export default function App() {

  useEffect(() => {
  }, []);

  return (
    <>
      <Navbar />
      <LeftSidebar />
      {/* <!-- Right Sidebar --> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Staff />} />
        <Route path='/map' element={<MapComponent />} />
        <Route path='/downloads' element={<Downloads />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/documents' element={<Documents />} />
        <Route path='*' element={<Home />} />
        {/* <PrivateRoute path="/admin" component={Admin} /> */}
      </Routes>

    </>
  );
}

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated === true ? (
//           //https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// }
