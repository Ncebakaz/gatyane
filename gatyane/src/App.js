import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews'
import Products from './pages/Vans/Vans';
import ProductsDetail from './pages/Vans/VanDetail';
import './server';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVaninfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Error from './components/Error';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} />
    <Route
      path='Vans'
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route path='vans/:id' element={<VanDetail />} />

    <Route path='host' element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='reviews' element={<Reviews />} />
      <Route path='vans' element={<HostVans />} />
      <Route path='vans/:id' element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />} />
        <Route path='pricing' element={<HostVanPricing />} />
        <Route path='photos' element={<HostVanPhotos />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  </Route>))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

