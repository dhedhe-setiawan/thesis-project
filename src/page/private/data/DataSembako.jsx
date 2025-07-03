import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import useAxios, { useGetData } from '../../../utils/axios';
import AddButton from '../../../components/button/AddButton';
import Button from '../../../components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DataSembako = ({ title }) => {
  const location = useLocation();

  const { data, isLoading, error, reload } = useGetData('/barang?kategori=S&sortBy=nama');
  const { deleteData } = useAxios();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className='text-brand'>Terjadi kesalahan: {error.message}</p>;

  const deleteBarang = async (id) => {
    const isConfirm = confirm('Hapus?');
    if (!isConfirm) return;

    const { response, error } = await deleteData(`/barang/${id}`);
    if (error) return alert(error.message);
    alert(response.message);

    reload();
  };

  return (
    <table>
      <thead>
        {title && (
          <tr>
            <th colSpan={'100%'}>SEMBAKO</th>
          </tr>
        )}

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
                {location.pathname === '/dashboard' && (
                  <AddButton
                    id_barang={d.id_barang}
                    nama={d.nama}
                    harga={d.harga}
                  />
                )}

                {location.pathname !== '/dashboard' && (
                  <>
                    <Button
                      link={'/ubah/barang'}
                      className={'bg-blue-500 text-light'}
                      state={{ id_barang: d.id_barang }}
                    >
                      <FontAwesomeIcon icon={'fas fa-pencil'} />
                    </Button>

                    <Button
                      className={'bg-brand text-light'}
                      onClick={() => deleteBarang(d.id_barang)}
                    >
                      <FontAwesomeIcon icon={'fas fa-trash'} />
                    </Button>
                  </>
                )}
              </div>
            </td>

            <td>
              <div className='flex gap-2 items-center'>
                {location.pathname !== '/dashboard' && (
                  <Button
                    link={'/tambah/stock'}
                    className={'bg-blue-500 text-light'}
                    state={{ id_barang: d.id_barang }}
                  >
                    <FontAwesomeIcon icon={'fas fa-plus'} />
                  </Button>
                )}
                {d.stock}
              </div>
            </td>
            <td>{d.nama}</td>
            <td>{d.harga}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DataSembako.propTypes = {
  title: PropTypes.any,
};

export default DataSembako;
