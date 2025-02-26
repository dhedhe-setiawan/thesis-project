import { useForm } from 'react-hook-form';
import Heading from '../../../components/Heading';
import Input from '../../../components/input/Input';
import InputButton from '../../../components/input/InputButton';
import useAxios, { useGetData } from '../../../utils/axios';
import { useLocation, useNavigate } from 'react-router-dom';

const TambahStock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const location = useLocation();
  const { id_barang } = location.state || {};

  const { data, isLoading, error } = useGetData(`/barang/${id_barang}`);
  const { postData } = useAxios();

  if (error) return <p className='text-brand'>Terjadi kesalahan: {error.message}</p>;

  const tambahStock = async (data) => {
    data.id_barang = id_barang;

    const { response, error } = await postData(`/barangMasuk/`, data);

    if (error) return alert(error.message);
    alert(response.message);

    reset();
    navigate(-1);
  };

  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <Heading title={'Tambah Stock'} subtitle={`Stock ${data?.nama} : ${data?.stock}`} />

      <form className='flex flex-col gap-2' onSubmit={handleSubmit(tambahStock)}>
        <Input
          type='number'
          label={'Tambah Stock'}
          placeholder={'Contoh: 50'}
          name={'stock'}
          register={register}
          rules={{ required: 'Wajib di isi' }}
          error={errors.stock}
        />

        <Input
          type='datetime-local'
          label={'Tanggal Masuk'}
          placeholder={'Contoh: 12 Maret 2024'}
          name={'tanggal'}
          register={register}
          rules={{ required: 'Wajib di isi' }}
          error={errors.tanggal}
        />
        <br />
        <InputButton value={isLoading ? 'Loading...' : 'Kirim'} disabled={isLoading} />
      </form>
    </div>
  );
};

export default TambahStock;
