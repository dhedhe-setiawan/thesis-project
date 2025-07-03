import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';
import Heading from '../../components/Heading';
import Input from '../../components/input/Input';
import InputButton from '../../components/input/InputButton';
import DataMakanan from './data/DataMakanan';
import DataMinuman from './data/DataMinuman';
import DataSembako from './data/DataSembako';
import { CartContext } from '../../contexts/CartContext';
import { useContext, useRef, useState } from 'react';
import useAxios, { useGetData } from '../../utils/axios';
import Barang from './data/Barang';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [nama, setNama] = useState();

  const search = data => {
    setNama(data.nama);
  };

  return (
    <>
      <form
        className='flex gap-3'
        onSubmit={handleSubmit(search)}
      >
        <Input
          type={'search'}
          placeholder={'Contoh: Telur'}
          name={'nama'}
          register={register}
          error={errors.search}
        />
        <InputButton value={'Cari'} />
      </form>

      {nama && <Barang nama={nama} />}
    </>
  );
};

const Dashboard = () => {
  const { postData, isLoading: postLoading } = useAxios();
  const navigate = useNavigate();

  // Ref untuk menangkap elemen tabel
  const tableRef = useRef(null);

  const { data: barangData, isLoading, error } = useGetData('/barang');
  const { cart, clearCart } = useContext(CartContext);

  // Cek loading atau error sebelum lanjut
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Gabungkan data cart dengan barangData
  const mergedCart = cart.map(item => {
    const barang = barangData.find(b => b.id_barang === item.id_barang);
    return {
      ...item,
      nama: barang ? barang.nama : 'Tidak ditemukan',
      harga: barang ? barang.harga : 0,
      total: barang ? barang.harga * item.jumlah : 0,
    };
  });

  const checkout = async () => {
    if (cart.length < 1) return;

    const promises = cart.map(item => {
      const data = {
        id_barang: item.id_barang,
        jumlah: item.jumlah,
        tanggal: new Date().toLocaleString('sv-SE', {
          timeZone: 'Asia/Makassar',
        }),
      };

      return postData('/barangKeluar', data).then(({ response, error }) => {
        if (error) return alert(error.message);
        return response;
      });
    });

    await Promise.all(promises);

    const data = {
      barang: cart,
    };

    const { response, error } = await postData('/pesanan', data);

    if (error) return alert(error.message);
    alert(response.message);

    clearCart();
    navigate(`/detail/pesanan/${response.result.insertId}`);
  };

  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <Heading title={'PT Karya Bersama'}>
        <SearchForm />
      </Heading>

      <div className='flex self-start w-full gap-10 overflow-x-auto items-start'>
        <DataMakanan title />
        <DataMinuman title />
        <DataSembako title />
      </div>

      <div className='flex flex-col self-start gap-3'>
        <h2>Chekout</h2>

        <table
          className='w-fit'
          border={1}
          ref={tableRef}
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Barang</th>
              <th>Jumlah</th>
              <th>Harga</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {mergedCart?.map((d, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{d.nama}</td>
                <td>{d.jumlah}</td>
                <td>{d.harga.toLocaleString('id-ID')}</td>
                <td>{d.total.toLocaleString('id-ID')}</td>
              </tr>
            ))}

            <tr className='font-bold'>
              <td colSpan={4}>Pembayaran</td>
              <td>
                {mergedCart
                  .reduce((total, d) => total + d.jumlah * d.harga, 0)
                  .toLocaleString('id-ID')}
              </td>
            </tr>
          </tbody>
        </table>

        <Button
          className={'bg-brand text-light'}
          text={postLoading ? 'Loading...' : 'Checkout'}
          onClick={checkout}
          disabled={postLoading}
        />
      </div>
    </div>
  );
};

export default Dashboard;
