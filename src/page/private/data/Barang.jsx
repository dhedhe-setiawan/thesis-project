import PropTypes from 'prop-types';
import AddButton from '../../../components/button/AddButton';
import { useGetData } from '../../../utils/axios';

const Barang = ({ nama }) => {
  const { data, isLoading, error } = useGetData(`/barang?nama=${nama}`);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className='text-brand'>Terjadi kesalahan: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Aksi</th>
          <th>Stock</th>
          <th>Nama</th>
          <th>Harga</th>
        </tr>
      </thead>

      <tbody>
        {data.map((d, i) => (
          <tr key={i}>
            <td>{i + 1}</td>

            <td>
              <div className='flex gap-2 '>
                <AddButton id_barang={d.id_barang} />
              </div>
            </td>

            <td>{d.stock}</td>
            <td>{d.nama}</td>
            <td>{d.harga}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Barang.propTypes = {
  nama: PropTypes.any,
};

export default Barang;
