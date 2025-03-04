import { useForm } from 'react-hook-form';
import Heading from '../../../components/Heading';
import Input from '../../../components/input/Input';
import InputButton from '../../../components/input/InputButton';
import useAxios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import Select from '../../../components/input/Select';

const FormTambahPegawai = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { postData, isLoading } = useAxios();
  const navigate = useNavigate();

  const tambahPegawai = async (data) => {
    const { response, error } = await postData('/pegawai', data);

    if (error) return alert(error.message);
    alert(response.message);

    reset();
    navigate('/data/pegawai');
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit(tambahPegawai)}>
      <Input
        label={'Nama'}
        placeholder={'Contoh: Dede Setiawan'}
        name={'nama'}
        register={register}
        rules={{ required: 'Wajib di isi' }}
        error={errors.nama}
      />
      <Select
        label={'Jabatan'}
        name={'jabatan'}
        register={register}
        rules={{ required: 'Wajib di isi' }}
      >
        <option value='M'>Manager</option>
        <option value='A'>Admin</option>
        <option value='K'>Kepala Gudang</option>
      </Select>
      <Input
        label={'No Hp'}
        placeholder={'Contoh: 081234447899'}
        name={'hp'}
        register={register}
        rules={{ required: 'Wajib di isi' }}
        error={errors.hp}
      />
      <Input
        label={'Email'}
        placeholder={'Contoh: contoh@email.com'}
        name={'email'}
        register={register}
        rules={{ required: 'Wajib di isi' }}
        error={errors.email}
      />
      <Input
        label={'Username'}
        placeholder={'Contoh: Dedebacot'}
        name={'username'}
        register={register}
        rules={{ required: 'Wajib di isi' }}
        error={errors.username}
      />
      <Input
        type='password'
        label={'Password'}
        name={'password'}
        register={register}
        rules={{ required: 'Wajib di isi' }}
        error={errors.password}
      />
      <br />
      <InputButton value={isLoading ? 'Loading...' : 'Kirim'} disabled={isLoading} />
    </form>
  );
};

const TambahPegawai = () => {
  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <Heading title={'Tambah Pegawai'} />
      <FormTambahPegawai />
    </div>
  );
};

export default TambahPegawai;
