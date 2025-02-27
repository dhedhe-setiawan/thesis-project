import { useReactToPrint } from 'react-to-print';

export const usePrint = (ref) => {
  return useReactToPrint({
    content: () => ref.current, // Menggunakan ref untuk mencetak elemen
    documentTitle: 'Struk Pembelian',
    onAfterPrint: () => alert('Cetak selesai!'),
  });
};
