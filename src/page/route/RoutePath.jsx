import { Route, Routes } from 'react-router-dom';

// Route
import PublicRoute from './PublicRoutes';
import PrivateRoute from './PrivateRoute';
// More
import NotFound from '../public/NotFound';
// Public
import Login from '../public/Login';
import UbahPesanan from '../private/ubah/UbahPesanan';
import UbahPegawai from '../private/ubah/UbahPegawai';
import UbahBarang from '../private/ubah/UbahBarang';
import TambahStock from '../private/tambah/TambahStock';
import TambahPegawai from '../private/tambah/TambahPegawai';
import TambahBarang from '../private/tambah/TambahBarang';
import LaporanMasuk from '../private/LaporanMasuk';
import LaporanKeluar from '../private/LaporanKeluar';
import Pesanan from '../private/data/Pesanan';
import DetailPesanan from '../private/data/DetailPesanan';
import DataSembako from '../private/data/DataSembako';
import DataPegawai from '../private/data/DataPegawai';
import DataMinuman from '../private/data/DataMinuman';
import DataMakanan from '../private/data/DataMakanan';
// Private
import Dashboard from '../private/Dashboard';
import { getUserRole, isAuthenticated } from '../../utils/auth';
import { CartProvider } from '../../contexts/CartContext';

const isLogin = isAuthenticated();
const access = getUserRole();

// localStorage.removeItem('token');

const RoutePath = () => {
  return (
    <Routes>
      <Route
        element={
          <PublicRoute
            isLogin={isLogin}
            access={access}
          />
        }
      >
        <Route
          path='/'
          element={<Login />}
        />
      </Route>

      <Route
        element={
          <PrivateRoute
            isLogin={isLogin}
            access={access}
            allowed={['M', 'K']}
          />
        }
      >
        <Route
          path='/data/makanan'
          element={<DataMakanan />}
        />
        <Route
          path='/data/minuman'
          element={<DataMinuman />}
        />
        <Route
          path='/data/sembako'
          element={<DataSembako />}
        />
        <Route
          path='/tambah/barang'
          element={<TambahBarang />}
        />
        <Route
          path='/ubah/barang'
          element={<UbahBarang />}
        />
        <Route
          path='/tambah/stock'
          element={<TambahStock />}
        />
      </Route>

      <Route
        element={
          <PrivateRoute
            isLogin={isLogin}
            access={access}
            allowed={['M', 'A']}
          />
        }
      >
        <Route
          path='/dashboard'
          element={
            <CartProvider>
              <Dashboard />
            </CartProvider>
          }
        />

        <Route
          path='/data/pesanan'
          element={<Pesanan />}
        />
        <Route
          path='/ubah/pesanan'
          element={<UbahPesanan />}
        />
        <Route
          path='/detail/pesanan/:id'
          element={
            <CartProvider>
              <DetailPesanan />
            </CartProvider>
          }
        />
        <Route
          path='/laporan/masuk'
          element={<LaporanMasuk />}
        />
        <Route
          path='/laporan/keluar'
          element={<LaporanKeluar />}
        />
      </Route>

      <Route
        element={
          <PrivateRoute
            isLogin={isLogin}
            access={access}
            allowed={['M']}
          />
        }
      >
        <Route
          path='/data/pegawai'
          element={<DataPegawai />}
        />
        <Route
          path='/tambah/pegawai'
          element={<TambahPegawai />}
        />
        <Route
          path='/edit/pegawai'
          element={<UbahPegawai />}
        />
      </Route>

      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  );
};

export default RoutePath;
