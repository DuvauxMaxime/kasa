import React from 'react';
import {
   Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
} from 'react-router-dom';
import Home, { locationsLoader } from './pages/Home';
import About, { aProposLoader } from './pages/About';
import Location, { locationLoader } from './pages/Location';
import Error from './pages/Error';
import RootLayout from './components/RootLayout';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
         <Route index element={<Home />} loader={locationsLoader} />
         <Route
            path="location/:id"
            element={<Location />}
            loader={locationLoader}
         />
         <Route path="a-propos" element={<About />} loader={aProposLoader} />
      </Route>
   )
);

export const App = () => {
   return (
      <RouterProvider router={router} />
      // <div>
      //    <header className={styles.header}>
      //       <Banner />
      //       <Navigation />
      //    </header>
      //    <Routes>
      //       <Route path="/" element={<Home />} />
      //       <Route path="/a-propos/" element={<About />} />
      //       <Route path="/location/" element={<Location />} />
      //       <Route path="/*" element={<Error />} />
      //    </Routes>
      //    <footer>
      //       <Footer />
      //    </footer>
      // </div>
   );
};
