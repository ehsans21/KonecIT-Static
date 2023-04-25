import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import Careers from "./pages/careers/Careers";
import CareersDetails, { careerDetailsLoader } from "./pages/careers/CareersDetails";
import CareersError from "./pages/careers/CareersError";
import ThirdParty from "./pages/Wiki/ThirdParty";
import Email from "./pages/Wiki/Email";
import FilesandFolders from "./pages/Wiki/FilesandFolders";
import Network from "./pages/Wiki/Network";
import PCIssues from "./pages/Wiki/PCIssues";
import Printers from "./pages/Wiki/PCIssues";
import Servers from "./pages/Wiki/Servers";
import Signinissues from "./pages/Wiki/Signinissues";
import Wiki from "./pages/Wiki/Wiki";
import Todo, { todoLoader } from "./pages/todoList/todo";
import TodoList, {TodoDetailsLoader} from "./pages/todoList/todoList";
import TodoError from "./pages/todoList/todoError";



// layout
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout"
import { careersLoader } from "./pages/careers/Careers";
import WikiLayout from "./layouts/WikiLayout";
import TodoLayout from "./layouts/TodoLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />


      <Route path="Wiki" element={<WikiLayout />}>
        <Route index element={<Wiki />} />
        {/* <Route path="3rd-party" element={<ThirdParty />} /> */}
        <Route path="email" element={<Email />} />
        {/* <Route path="filesandfolders" element={<FilesandFolders />} /> */}
        <Route path="network" element={<Network />} />
        <Route path="pcissues" element={<PCIssues />} />
        <Route path="printers" element={<Printers />} />
        <Route path="servers" element={<Servers />} />
        <Route path="signinissues" element={<Signinissues />} />
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />} >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=":id" element={<CareersDetails />} loader={careerDetailsLoader} />
      </Route>

      <Route path="todo" element={<TodoLayout />} errorElement={<TodoError />} >
        <Route index element={<Todo />} loader={todoLoader} />
        <Route path=":id" element={<TodoList />} loader={TodoDetailsLoader} />
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
