import { useForm } from 'react-hook-form';
import Heading from '../../../components/Heading';
import Input from '../../../components/input/Input';
import InputButton from '../../../components/input/InputButton';
import useAxios, { useGetData } from '../../../utils/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from '../../../components/input/Select';
import { setJabatan } from '../../../utils/helper';

const FormUbahPegawai = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const location = useLocation();
  const { id_pegawai } = location.state || {};

  const { data, isLoading, error } = useGetData(`/pegawai/${id_pegawai}`);
  const { patchData } = useAxios();
  const navigate = useNavigate();

  if (error) return <p className='text-brand'>Terjadi kesalahan: {error.message}</p>;

  const ubahPegawai = async (data) => {
    const { response, error } = await patchData(`/pegawai/${id_pegawai}`, data);

    if (error) return alert(error.message);
    alert(response.message);

    reset();
    navigate('/data/pegawai');
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit(ubahPegawai)}>
      <Input
        label={'Nama'}
        placeholder={data?.nama}
        name={'nama'}
        register={register}
        error={errors.nama}
      />

      <Select
        label={'Jabatan'}
        placeholder={setJabatan(data?.jabatan)}
        name={'jabatan'}
        register={register}
      >
        <option value='M'>Manager</option>
        <option value='A'>Admin</option>
        <option value='K'>Kepala Gudang</option>
      </Select>
      <Input
        label={'No Hp'}
        placeholder={data?.hp}
        name={'hp'}
        register={register}
        error={errors.hp}
      />
      <Input
        label={'Email'}
        placeholder={data?.email}
        name={'email'}
        register={register}
        error={errors.email}
      />
      <Input
        label={'Username'}
        placeholder={data?.username}
        name={'username'}
        register={register}
        error={errors.username}
      />
      <Input
        type='password'
        label={'Password'}
        name={'password'}
        register={register}
        error={errors.password}
      />
      <br />
      <InputButton value={isLoading ? 'Loading...' : 'Kirim'} disabled={isLoading} />
    </form>
  );
};

const UbahPegawai = () => {
  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <Heading title={'Ubah Pegawai'} />
      <FormUbahPegawai />
    </div>
  );
};

export default UbahPegawai;
