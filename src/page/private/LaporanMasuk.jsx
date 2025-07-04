import { useRef, useState } from 'react';
import Heading from '../../components/Heading';
import { useGetData } from '../../utils/axios';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import InputButton from '../../components/input/InputButton';
import { print } from '../../utils/print';

const LaporanMasuk = () => {
  const printRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [date, setDate] = useState({
    year: dayjs().year(),
    month: dayjs().month() + 1,
  });

  const { data, isLoading, error } = useGetData(
    `/barangMasuk?tahun=${date.year}&bulan=${date.month}`
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) console.log(error.message);

  const getFilter = data => {
    const date = data.filter.split('-');
    setDate({
      year: date[0],
      month: date[1],
    });
  };

  const cetak = async () => {
    print(printRef, 'Laporan Masuk', `${date.year}-${date.month}`);
    window.location.reload();
  };

  return (
    <div className='flex flex-col gap-10 p-10 items-center'>
      <Heading title={'Laporan Masuk'} />

      <form
        className=' flex gap-4'
        onSubmit={handleSubmit(getFilter)}
      >
        <Input
          type='month'
          name={'filter'}
          register={register}
          // rules={{ required: 'Wajib di isi' }}
          error={errors.filter}
        />
        <InputButton />
      </form>

      <table ref={printRef}>
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Nama</th>
            <th>Jumlah</th>
          </tr>
        </thead>

        <tbody>
          {data ? (
            data.map((d, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{d.tanggal}</td>
                <td>{d.nama}</td>
                <td>{d.stock}</td>
              </tr>
            ))
          ) : (
            <td colSpan={'100%'}>Data Tidak Ditemukan</td>
          )}
        </tbody>
      </table>

      <Button
        className={'bg-brand text-light'}
        onClick={cetak}
        text={isLoading ? 'Loading...' : 'Print'}
        disabled={isLoading}
      />
    </div>
  );
};

export default LaporanMasuk;
