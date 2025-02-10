import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';
import Heading from '../../components/Heading';
import Input from '../../components/input/Input';
import InputButton from '../../components/input/InputButton';
import DataMakanan from './data/DataMakanan';
import DataMinuman from './data/DataMinuman';
import DataSembako from './data/DataSembako';

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const search = (data) => {
    console.log('Search', data);
    reset();
  };
  return (
    <form className='flex gap-3' onSubmit={handleSubmit(search)}>
      <Input
        type={'search'}
        placeholder={'Contoh: Telur'}
        name={'search'}
        register={register}
        error={errors.search}
      />
      <InputButton value={'Cari'} />
    </form>
  );
};

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center gap-10 px-10 py-10'>
      <Heading title={'PT Karya Bersama'}>
        <SearchForm />
      </Heading>

      <div className='flex self-start w-full gap-10 overflow-x-auto '>
        <DataMakanan title />
        <DataMinuman title />
        <DataSembako title />
      </div>

      <div className='flex flex-col self-start gap-3'>
        <h2>Chekout</h2>

        <table className='w-fit' border={1}>
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
            <tr>
              <td>1</td>
              <td>Bangbang</td>
              <td>2</td>
              <td>30000</td>
              <td>60000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Aleale</td>
              <td>2</td>
              <td>25000</td>
              <td>50000</td>
            </tr>
            <tr className='font-bold'>
              <td colSpan={4}>Pembayaran</td>
              <td>110000</td>
            </tr>
          </tbody>
        </table>

        <Button className={'bg-brand text-light'} text={'Cetak'} />
      </div>
    </div>
  );
};

export default Dashboard;
