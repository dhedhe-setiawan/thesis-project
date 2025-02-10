import { useForm } from 'react-hook-form';
import Heading from '../../../components/Heading';
import Input from '../../../components/input/Input';
import InputButton from '../../../components/input/InputButton';
import Select from '../../../components/input/Select';

const TambahBarang = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const tambahBarang = (data) => {
    console.log('Tambah Barang:', data);
    reset();
  };
  return (
    <div className='flex flex-col items-center gap-10 p-10'>
      <Heading title={'Tambah Barang'} />
      <form className='flex flex-col gap-2' onSubmit={handleSubmit(tambahBarang)}>
        <Input
          label={'Nama'}
          placeholder={'Contoh: Telur'}
          name={'nama'}
          register={register}
          rules={{ required: 'Wajib di isi' }}
          error={errors.nama}
        />

        <Select
          label={'Pilih Kategori'}
          name={'kategori'}
          register={register}
          rules={{ required: 'Wajib di isi' }}
        >
          <option value='F'>Makanan</option>
          <option value='D'>Minuman</option>
          <option value='S'>Sembako</option>
        </Select>

        <Input
          type='number'
          label={'Stock'}
          placeholder={'Contoh: 50'}
          name={'stock'}
          register={register}
          rules={{ required: 'Wajib di isi' }}
          error={errors.stock}
        />
        <Input
          type='number'
          label={'Harga'}
          placeholder={'Contoh: 50000'}
          name={'harga'}
          register={register}
          rules={{ required: 'Wajib di isi' }}
          error={errors.harga}
        />
        <Input
          type='date'
          label={'Tanggal Masuk'}
          placeholder={'Contoh: 12 Maret 2024'}
          name={'tanggal'}
          register={register}
          rules={{ required: 'Wajib di isi' }}
          error={errors.tanggal}
        />
        <br />
        <InputButton />
      </form>
    </div>
  );
};

export default TambahBarang;
