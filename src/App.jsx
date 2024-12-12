import React from 'react'
import Routerr from './routes/Routerr'
import Sticky from './pages/Stickyy.jsx'
const App = () => {
  return (
    <div>
      <>
      <Sticky/>
      <Routerr/>
      </>
    </div>
  )
}

export default App










// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Layout from './components/layout/Layout';
// import AboutUs from '../src/NavPages/home/About.jsx';
// import PrintMedia from '../src/NavPages/home/PrintMedia.jsx';
// import EziSoftCode from '../src/NavPages/home/EziSoftCode.jsx';
// import WebDevelopment from './NavPages/services/WebDevelopment.jsx';

// const App = () => {
//     return (
//         <div className="mx-auto overflow-hidden">
//             <Routes>
//                 {/* Use Layout as the wrapper for all routes */}
//                 <Route path="/" element={<Layout />}>
//                     {/* Define all sub-routes as children */}
//                     <Route index element={<div>Home Page Content</div>} />
//                     <Route path="about-us" element={<AboutUs />} />
//                     <Route path="print-media" element={<PrintMedia />} />
//                     <Route path="ezi-soft-code" element={<EziSoftCode />} />
//                     <Route path="web-development" element={<WebDevelopment />} />
//                 </Route>
//             </Routes>
//         </div>
//     );
// };

// export default App;












// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Layout from './components/layout/Layout';
// import AboutUs from '../src/NavPages/home/About.jsx'
// import PrintMedia from '../src/NavPages/home/PrintMedia.jsx';
// import EziSoftCode from '../src/NavPages/home/EziSoftCode.jsx';
// import WebDevelopment from './NavPages/services/WebDevelopment.jsx';

// const App = () => {
//     return (
//         <div className="mx-auto overflow-hidden">
//             <Routes>
//                 <Route path="/" element={<Layout />} />
//                 <Route path="/about-us" element={<AboutUs/>} />
//                 <Route path="/print-media" element={<PrintMedia/>} />
//                 <Route path="/ezi-soft-code" element={<EziSoftCode/>} />
//                 <Route path="/web-development" element={<WebDevelopment/>} />
//                 {/* Add other routes here */}
//             </Routes>
//         </div>
//     );
// };

// export default App;