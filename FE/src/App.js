import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import Careers from "./pages/careers/Careers";
import CareersDetails, { careerDetailsLoader } from "./pages/careers/CareersDetails";
import CareersError from "./pages/careers/CareersError";



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
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=":id" element={<CareersDetails />} loader={careerDetailsLoader} />
      </Route>


      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (


    <RouterProvider router={router} />

  );
}

export default App
