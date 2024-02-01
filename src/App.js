import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import Greeting from './pages/Greeting';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Greeting />} />,
));
const App = () => (
  <RouterProvider router={router} />
);

export default App;
