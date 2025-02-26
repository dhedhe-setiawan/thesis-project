import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/button/Button';
import useAxios, { useGetData } from '../../../utils/axios';
import { setJabatan } from '../../../utils/helper';

const DataPegawai = () => {
  const { data, isLoading, error, reload } = useGetData('/pegawai?sortBy=nama');
  const { deleteData } = useAxios();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className='text-brand'>Terjadi kesalahan: {error.message}</p>;

  const deletePegawai = async (id) => {
    const isConfirm = confirm('Hapus?');
    if (!isConfirm) return;

    const { response, error } = await deleteData(`/pegawai/${id}`);
    if (error) return alert(error.message);
    alert(response.message);

    reload();
  };

  return (
    <div className='w-full overflow-x-auto'>
      <table className='mx-auto'>
        <thead>
          <tr>
            <th>No</th>
            <th>Action</th>
            <th>Nama</th>
            <th>Jabatan</th>
            <th>No Hp</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td className='text-center'>{i + 1}</td>
              <td>
                <span className='flex gap-2 '>
                  <Button
                    className={'bg-blue-500 text-light'}
                    link={'/edit/pegawai'}
                    state={{ id_pegawai: d.id_pegawai }}
                  >
                    <FontAwesomeIcon icon={'fas fa-pencil'} />
                  </Button>

                  <Button
                    className={'bg-brand text-light'}
                    onClick={() => deletePegawai(d.id_pegawai)}
                  >
                    <FontAwesomeIcon icon={'fas fa-trash'} />
                  </Button>
                </span>
              </td>
              <td>{d.nama}</td>
              <td>{setJabatan(d.jabatan)}</td>
              <td>{d.hp}</td>
              <td>{d.email}</td>
              <td>{d.username}</td>
              <td>{d.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPegawai;
