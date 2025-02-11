import Heading from '../../components/Heading';

const Laporan = () => {
  return (
    <div className='flex flex-col gap-10 p-10 items-center'>
      <Heading title={'Laporan Penjualan'} />
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
          <tr>
            <td>1</td>
            <td>10:00, 11 february 20255</td>
            <td>Telur</td>
            <td>1</td>
            <td>50000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Laporan;
