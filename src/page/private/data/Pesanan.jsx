import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/button/Button';
import useAxios, { useGetData } from '../../../utils/axios';

const Pesanan = () => {
  const { data, isLoading, error, reload } = useGetData('/pesanan');
  const { deleteData } = useAxios();

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return <p className='text-brand'>Terjadi kesalahan: {error.message}</p>;

  const deletePesanan = async id => {
    const isConfirm = confirm('Hapus?');
    if (!isConfirm) return;

    const { response, error } = await deleteData(`/pesanan/${id}`);
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
            <th>Tanggal</th>
            <th>Status</th>
            <th>Total Bayar</th>
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
                    link={`/detail/pesanan/${d.id}`}
                  >
                    <FontAwesomeIcon icon={'info-circle'} />
                  </Button>

                  <Button
                    className={'bg-blue-500 text-light'}
                    link={'/ubah/pesanan'}
                    state={{ id: d.id }}
                  >
                    <FontAwesomeIcon icon={'fas fa-pencil'} />
                  </Button>

                  <Button
                    className={'bg-brand text-light'}
                    onClick={() => deletePesanan(d.id)}
                  >
                    <FontAwesomeIcon icon={'fas fa-trash'} />
                  </Button>
                </span>
              </td>
              <td>{d.tanggal}</td>
              <td>{d.status}</td>
              <td>
                <p>
                  Rp.
                  {JSON.parse(d.barang).reduce((acc, b) => acc + b.jumlah * b.harga, 0)}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Pesanan;
