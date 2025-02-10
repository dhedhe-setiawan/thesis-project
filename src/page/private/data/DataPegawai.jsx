import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/button/Button';

const DataPegawai = () => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='mx-auto'>
        <thead>
          <tr>
            <th>No</th>
            <th>Action</th>
            <th>ID Pegawai</th>
            <th>Nama</th>
            <th>Jabatan</th>
            <th>No Hp</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <span className='flex gap-2 '>
                <Button className={'bg-blue-500 text-light'}>
                  <FontAwesomeIcon icon={'fas fa-pencil'} />
                </Button>

                <Button className={'bg-brand text-light'}>
                  <FontAwesomeIcon icon={'fas fa-trash'} />
                </Button>
              </span>
            </td>
            <td>1234</td>
            <td>Sapiul</td>
            <td>Kuli</td>
            <td>12341</td>
            <td>12341</td>
            <td>12341</td>
            <td>12341</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataPegawai;
