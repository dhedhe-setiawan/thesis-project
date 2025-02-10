import { useForm } from 'react-hook-form';
import Heading from '../../../components/Heading';
import Input from '../../../components/input/Input';
import InputButton from '../../../components/input/InputButton';

const FormTambahPegawai = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const tambahPegawai = (data) => {
    console.log('Tambah Pegawai', data);
    reset();
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

      <Input
        label={'Jabatan'}
        placeholder={'Contoh: Manager'}
        name={'jabatan'}
        register={register}
        rules={{ required: 'Wajib di isi' }}
        error={errors.jabatan}
      />
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
      <InputButton />
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
