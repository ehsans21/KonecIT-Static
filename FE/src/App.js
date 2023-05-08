import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { useTranslation } from 'react-i18next';


// pages
import Home from "./pages/Home";
import About from "./pages/about/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import Careers from "./pages/careers/Careers";
import CareersError from "./pages/careers/CareersError";
import Services from "./pages/about/Services";



// layout
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout"
import { careersLoader } from "./pages/careers/Careers";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />


      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />} >
        <Route index element={<Careers />} />
      </Route>


      <Route path="about" element={<About />} >
        <Route path="services" element={<Services />} />
      </Route>

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  const {t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
    
    return (
      
      <div className="App">
        
        <RouterProvider router={router} />   
      </div>

   

  );
}

export default App
