import IndexLayout from "../Layout/IndexLayout";
import About from '../Component/About';
import Contact from "../Component/Contact";
import Home from '../Component/Home';

const IndexRoutes = {
  path: '/',
  element: <IndexLayout />,
  children: [
    {
        path: '',
      element: <Home/>
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: '*',
      element: <div>404 Not Found</div>
    }
  ]
};

export default IndexRoutes;