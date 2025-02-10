import { Route, Routes } from 'react-router-dom';

// Route
import PublicRoute from './PublicRoutes';
import PrivateRoute from './PrivateRoute';

// More
import NotFound from '../public/NotFound';

// Public
import Login from '../public/Login';

// Private
import Dashboard from '../private/Dashboard';
import DataMakanan from '../private/data/DataMakanan';
import DataMinuman from '../private/data/DataMinuman';
import DataSembako from '../private/data/DataSembako';
import DataPegawai from '../private/data/DataPegawai';
import TambahPegawai from '../private/tambah/TambahPegawai';
import TambahBarang from '../private/tambah/TambahBarang';

const isLogin = true;
const access = 'M';

const RoutePath = () => {
  return (
    <Routes>
      <Route element={<PublicRoute isLogin={isLogin} access={access} />}>
        <Route path='/' element={<Login />} />
      </Route>

      <Route element={<PrivateRoute isLogin={isLogin} access={access} allowed={['M', 'K']} />}>
        <Route path='/data/makanan' element={<DataMakanan />} />
        <Route path='/data/minuman' element={<DataMinuman />} />
        <Route path='/data/sembako' element={<DataSembako />} />
        <Route path='/tambah/barang' element={<TambahBarang />} />
      </Route>

      <Route element={<PrivateRoute isLogin={isLogin} access={access} allowed={['M', 'A']} />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>

      <Route element={<PrivateRoute isLogin={isLogin} access={access} allowed={['M']} />}>
        <Route path='/data/pegawai' element={<DataPegawai />} />
        <Route path='/tambah/pegawai' element={<TambahPegawai />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default RoutePath;
