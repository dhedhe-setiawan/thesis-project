import Heading from '../../components/Heading';
import { useGetData } from '../../utils/axios';

const LaporanKeluar = () => {
  const { data, isLoading, error } = useGetData('/barangKeluar?sortBy=tanggal');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className='text-brand'>Terjadi kesalahan: {error.message}</p>;

  return (
    <div className='flex flex-col gap-10 p-10 items-center'>
      <Heading title={'Laporan Keluar'} />

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Nama</th>
            <th>Jumlah</th>
            <th>Harga</th>
          </tr>
        </thead>

        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{d.tanggal}</td>
              <td>{d.nama}</td>
              <td>{d.jumlah}</td>
              <td>{d.harga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LaporanKeluar;
