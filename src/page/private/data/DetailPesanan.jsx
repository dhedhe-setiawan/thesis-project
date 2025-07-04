import useAxios, { useGetData } from '../../../utils/axios';
import Heading from '../../../components/Heading';
import { useNavigate, useParams } from 'react-router-dom';
import qrcode from 'qrcode';
import { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../../components/button/Button';
import { CartContext } from '../../../contexts/CartContext';
import { print } from '../../../utils/print';

const DetailPesanan = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetData(`/pesanan?id=${id}`);
  const [qr, setQr] = useState();

  const navigate = useNavigate();

  const { isLoading: postLoading, patchData } = useAxios();
  const { clearCart } = useContext(CartContext);
  const printRef = useRef(null);

  useEffect(() => {
    async function generateQr() {
      try {
        const url = await qrcode.toDataURL(
          `https://localhost:3000/pesanan/pay/${id}`
        );
        setQr(url);
      } catch (error) {
        console.error(error);
      }
    }

    generateQr();

    return;
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return <p className='text-brand'>Terjadi kesalahan: {error.message}</p>;

  const cetak = async () => {
    print(printRef);
    clearCart();
    window.location.reload();
  };

  const pay = async () => {
    const { response, error } = await patchData(`/pesanan/pay/${id}`, {});

    if (error) return alert(error.message);
    alert(response.message);

    navigate('/data/pesanan');
  };

  return (
    <div className='w-full overflow-x-auto flex flex-col items-center py-10 gap-10'>
      <Heading
        title={'Detail Pesanan'}
        subtitle={data[0].status}
      />

      <div
        ref={printRef}
        className='space-y-8'
      >
        <div className='flex flex-col items-center'>
          <p>Scan untuk membayar</p>
          <img
            src={qr}
            alt='QR Code Payment'
            onClick={pay}
          />
        </div>

        <p></p>

        <table
          className='w-fit'
          border={1}
        >
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
            {data[0].barang.map((b, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{b.nama}</td>
                  <td>{b.jumlah}</td>
                  <td>{b.harga}</td>
                  <td>{b.jumlah * b.harga}</td>
                </tr>
              );
            })}

            <tr className='font-bold'>
              <td colSpan={4}>Total Pembayaran</td>
              <td>
                {data[0].barang.reduce(
                  (total, b) => total + b.jumlah * b.harga,
                  0
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Button
        className={'bg-brand text-light'}
        onClick={cetak}
        text={postLoading ? 'Loading...' : 'Print'}
        disabled={postLoading}
      />
    </div>
  );
};
export default DetailPesanan;
