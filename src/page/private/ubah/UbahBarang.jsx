import { useForm } from 'react-hook-form';
import Heading from '../../../components/Heading';
import Input from '../../../components/input/Input';
import InputButton from '../../../components/input/InputButton';
import Select from '../../../components/input/Select';
import useAxios, { useGetData } from '../../../utils/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { setKategori } from '../../../utils/helper';

const UbahBarang = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const location = useLocation();
  const { id_barang } = location.state || {};

  const { data, isLoading, error } = useGetData(`/barang/${id_barang}`);
  const { patchData } = useAxios();

  const navigate = useNavigate();

  if (error) return <p className='text-brand'>Terjadi kesalahan: {error.message}</p>;

  const ubahBarang = async (data) => {
    const { response, error } = await patchData(`/barang/${id_barang}`, data);

    if (error) return alert(error.message);
    alert(response.message);

    reset();
    navigate(-1);
  };

  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <Heading title={'Ubah Barang'} />
      <form className='flex flex-col gap-2' onSubmit={handleSubmit(ubahBarang)}>
        <Input
          label={'Nama'}
          placeholder={data?.nama}
          name={'nama'}
          register={register}
          error={errors.nama}
        />

        <Select
          label={'Kategori'}
          placeholder={setKategori(data?.kategori)}
          name={'kategori'}
          register={register}
        >
          <option value='F'>Makanan</option>
          <option value='D'>Minuman</option>
          <option value='S'>Sembako</option>
        </Select>

        <Input
          type='number'
          label={'Harga'}
          placeholder={data?.harga}
          name={'harga'}
          register={register}
          error={errors.harga}
        />

        <br />
        <InputButton value={isLoading ? 'Loading...' : 'Kirim'} disabled={isLoading} />
      </form>
    </div>
  );
};

export default UbahBarang;
