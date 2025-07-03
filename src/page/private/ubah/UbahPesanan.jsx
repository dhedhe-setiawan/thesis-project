import { useForm } from 'react-hook-form';
import Heading from '../../../components/Heading';
import Input from '../../../components/input/Input';
import InputButton from '../../../components/input/InputButton';
import useAxios, { useGetData } from '../../../utils/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from '../../../components/input/Select';

const FormUbahPesanan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const location = useLocation();
  const { id } = location.state || {};

  const { data, isLoading, error } = useGetData(`/pesanan/${id}`);
  const { patchData } = useAxios();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return <p className='text-brand'>Terjadi kesalahan: {error.message}</p>;

  const ubahPesanan = async input => {
    input.barang = data[0].barang;

    const { response, error } = await patchData(`/pesanan/${id}`, input);

    if (error) return alert(error.message);
    alert(response.message);

    reset();
    navigate('/data/pesanan');
  };

  return (
    <form
      className='flex flex-col gap-2'
      onSubmit={handleSubmit(ubahPesanan)}
    >
      <Input
        label={'Tanggal'}
        type='date'
        placeholder={data[0]?.tanggal}
        name={'tanggal'}
        register={register}
        error={errors.tanggal}
      />

      <Select
        label={'Status'}
        placeholder={data[0]?.status}
        name={'status'}
        register={register}
      >
        <option value='Lunas'>Lunas</option>
        <option value='Menunggu'>Menunggu</option>
        <option value='Gagal'>Gagal</option>
      </Select>

      <table
        className='w-fit mt-4 opacity-50 pointer-events-none'
        border={1}
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
          {data[0]?.barang.map((b, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{b.nama}</td>
                <td>{b.jumlah}</td>
                <td>{b.harga}</td>
                <td>{b.jumlah * b.harga}</td>
              </tr>
            );
          })}

          <tr className='font-bold'>
            <td colSpan={4}>Total Pembayaran</td>
            <td>
              {data[0]?.barang.reduce(
                (total, b) => total + b.jumlah * b.harga,
                0
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <InputButton
        value={isLoading ? 'Loading...' : 'Ubah'}
        disabled={isLoading}
      />
    </form>
  );
};

const UbahPesanan = () => {
  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <Heading title={'Ubah Pegawai'} />
      <FormUbahPesanan />
    </div>
  );
};

export default UbahPesanan;
