import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Home from '../../pages/Home.jsx'
import Ubaid from '../../pages/Ubaid.jsx'
import ProjectManagment from '../../pages/ProjectManagment.jsx'
import ServicesSplit from '../../pages/Tools.jsx'
import SDLCAnimation from '../../pages/SDLC.jsx'
import ThreeDiv from '../../pages/ThreeDiv.jsx'
import Tfooter from '../../pages/Tfooter.jsx'
import Navbar from '../Navbar.jsx';
import Footer from '../../pages/Footer.jsx'


const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <header>
        <Navbar/>
      </header>

      <main className={location.pathname === "/" ? 'bg-slate-900' : ''}>
        {location.pathname === "/" ? (
          // Show these components for the Home route
          <>
            <Home/>
            <Ubaid/>
            <ProjectManagment />
            <ServicesSplit />
            <SDLCAnimation />
            <ThreeDiv />
            <Tfooter />
          </>
        ) : (
          // For other routes, render the `Outlet`
          <main className='mt-16'>
            <Outlet/>
            <Tfooter/>
          </main>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;











// import React from 'react';
// import Navbar from '../Navbar';
// import Footer from '../../pages/Footer';
// import { Outlet, useLocation } from 'react-router-dom';
// import ProjectManagment from '../../pages/ProjectManagment.jsx';
// import Ubaid from '../../pages/ubaid.jsx';
// import ServicesSplit from '../../pages/Tools.jsx';
// import SDLCAnimation from '../../pages/SDLC.jsx';
// import ThreeDiv from '../../pages/ThreeDiv.jsx';
// import Tfooter from '../../pages/Tfooter.jsx';
// import Home from '../../pages/Home.jsx';

// const Layout = () => {
//   const location = useLocation();

//   return (
//     <div>
//       {/* Navbar visible on all routes */}
//       <header>
//         <Navbar />
//       </header>

//       {/* Main content */}
//       <main className={location.pathname === "/" ? 'bg-slate-900' : ''}>
//         {location.pathname === "/" ? (
//           // Home page specific sections
//           <>
//             <Home />
//             <Ubaid />
//             <ProjectManagment />
//             <ServicesSplit />
//             <SDLCAnimation />
//             <ThreeDiv />
//             <Tfooter />
//           </>
//         ) : (
//           // For all other routes, render the `Outlet` to show route-specific components
//           <Outlet />
//         )}
//       </main>

//       {/* Footer visible on all routes */}
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default Layout;