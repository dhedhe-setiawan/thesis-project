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
