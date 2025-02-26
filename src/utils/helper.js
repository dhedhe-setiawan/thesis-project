export const setJabatan = (jabatan) => {
  switch (jabatan) {
    case 'A':
      return 'Admin';

    case 'K':
      return 'Kepala Gudang';

    case 'M':
      return 'Manajer/Bos';

    default:
      break;
  }
};

export const setKategori = (kategori) => {
  switch (kategori) {
    case 'F':
      return 'Makanan';

    case 'D':
      return 'Minuman';

    case 'S':
      return 'Sembako';

    default:
      break;
  }
};
