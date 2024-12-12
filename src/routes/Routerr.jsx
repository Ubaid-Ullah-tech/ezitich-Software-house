import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import About from '../NavPages/home/About.jsx';
import PrintMedia from '../NavPages/home/PrintMedia.jsx';
import OurTeam from '../NavPages/home/OurTeam.jsx';
import OurTechnology from '../NavPages/home/OurTechnology.jsx';
import EziSoftCode from '../NavPages/home/EziSoftCode.jsx';


import  WebDevelopment from '../NavPages/services/WebDevelopment.jsx'
import  AppDevelpoment from '../NavPages/services/AppDevelpoment.jsx'
// import  PrintMedia from '../NavPages/services/PrintMedia.jsx'
import  Cloud from '../NavPages/services/Cloud.jsx'
import  SEO from '../NavPages/services/SEO.jsx'
import  SocialMedia from '../NavPages/services/SocialMedia.jsx'
import  Vedio from '../NavPages/services/Vedio.jsx'
import  D3Solution from '../NavPages/services/D3Solution.jsx'
import  Ai from '../NavPages/services/Ai.jsx'


import  AiUtils from '../NavPages/portfolio/AiUtils.jsx'
import  ClientWeb from '../NavPages/portfolio/ClientWeb.jsx'
import  GamePort from '../NavPages/portfolio/GamePort.jsx'
import  LogoPort from '../NavPages/portfolio/LogoPort.jsx'
import  MobApp from '../NavPages/portfolio/MobApp.jsx'
import  Walkthrough from '../NavPages/portfolio/Walkthrough.jsx'
// import  WebApp from '../NavPages/portfolio/WebApp.jsx'


import  EventsConf from '../NavPages/eziUpdates/EventsConf.jsx'
import  International from '../NavPages/eziUpdates/International.jsx'
import  LifeExiline from '../NavPages/eziUpdates/LifeExiline.jsx'
import  MouJv from '../NavPages/eziUpdates/MouJv.jsx'


import  Mobapp from '../NavPages/software/Mobapp.jsx'
import  Others from '../NavPages/software/Others.jsx'
import  WebApp from '../NavPages/software/WebApp.jsx'


import  Domainlogin from '../NavPages/login/Domainlogin.jsx'
import  DomainSearch from '../NavPages/login/DomainSearch.jsx'
import  Myproject from '../NavPages/login/Myproject.jsx';
import  SmsPortal from '../NavPages/login/SmsPortal.jsx'


import  Careers from '../NavPages/contact/Careers.jsx'
import  HelpDesk from '../NavPages/contact/HelpDesk.jsx'
import  Intership from '../NavPages/contact/Intership.jsx'
import  SkilledCourse from '../NavPages/contact/SkilledCourse.jsx'




const Routerr = () => {
  return (
    <div className="mx-auto overflow-hidden">
        <Routes>
              {/* homw and its routes  */}
            <Route path='/' element={<Layout/>}>
            <Route path='/about-us' element={<About/>} />
            <Route path='/print-media' element={<PrintMedia/>} />
            <Route path='/our-team' element={<OurTeam/>} />
            <Route path='/our-technologies' element={<OurTechnology/>} />
            <Route path='/ezi-soft-code' element={<EziSoftCode/>} />
            
              {/* services routes  */}
            <Route path='/web-development' element={<WebDevelopment/>} />
            <Route path='/app-development' element={<AppDevelpoment/>} />
            {/* <Route path='/print-media' element={<PrintMedia/>} /> */}
            <Route path='/cloud-services' element={<Cloud/>} />
            <Route path='/SEO' element={<SEO/>} />
            <Route path='/social-media' element={<SocialMedia/>} />
            <Route path='/video-design' element={<Vedio/>} />
            <Route path='/3d-solution' element={<D3Solution/>} />
            <Route path='/AI' element={<Ai/>} />

             {/* portfolio routess  */}

            <Route path='/ClientWeb' element={<ClientWeb/>} />
            <Route path='/Logo-Portfolio' element={<LogoPort/>} />
            {/* <Route path='/Web-Application' element={<WebApp/>} /> */}
            <Route path='/AI-Utilities' element={<AiUtils/>} />
            <Route path='/Mobile-App' element={<MobApp/>} />
            <Route path='/Walkthrough' element={<Walkthrough/>} />
            <Route path='/Games-Portfolio' element={<GamePort/>} />
            
            {/* Ezi Updates  */}
            <Route path='/Event-Confernce' element={<EventsConf/>} />
            <Route path='/International-affairs' element={<International/>} />
            <Route path='/Life-At-Eziline' element={<LifeExiline/>} />
            <Route path='/Mou-JVs' element={<MouJv/>} />


            {/* softwares routes  */}
            <Route path='/Web-Application' element={<WebApp/>} />
            <Route path='/Mobile-Application' element={<Mobapp/>} />
            <Route path='/Others' element={<Others/>} />

            {/* login routes  */}

            <Route path='/My-Project-Panel' element={<Myproject/>} />
            <Route path='/SMS-Portal' element={<SmsPortal/>} />
            <Route path='/Domain-Search' element={<DomainSearch/>} />
            <Route path='/Domain-Login' element={<Domainlogin/>} />
             
             {/* contact routes  */}

            <Route path='/Careers' element={<Careers/>} />
            <Route path='/InterShip' element={<Intership/>} />
            <Route path='/Skilled-Course' element={<SkilledCourse/>} />
            <Route path='/Help-Desk' element={<HelpDesk/>} />
             
            </Route>
        </Routes>
    </div>
  )
}

export default Routerr
