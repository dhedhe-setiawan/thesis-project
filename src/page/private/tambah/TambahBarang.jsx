import { useForm } from 'react-hook-form';
import Heading from '../../../components/Heading';
import Input from '../../../components/input/Input';
import InputButton from '../../../components/input/InputButton';
import Select from '../../../components/input/Select';
import useAxios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';

const TambahBarang = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { postData, isLoading } = useAxios();
  const navigate = useNavigate();

  const tambahBarang = async (data) => {
    const { tanggal, stock, ...barang } = data;

    const { response: resBarang, error: errBarang } = await postData('/barang', barang);
    if (errBarang) return alert(errBarang.message);

    const id_barang = resBarang.result.insertId;
    const barang_masuk = { id_barang, stock, tanggal };

    const { response: resBM, error: errBM } = await postData('/barangMasuk', barang_masuk);

    if (errBM) return alert(errBM.message);
    alert(resBM.message);

    reset();
    navigate(-1);
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

export default TambahBarang;
