import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './../input/Input';
import { useForm } from 'react-hook-form';
import { CartContext } from '../../contexts/CartContext';

const AddButton = ({ id_barang }) => {
  const { register, watch, setValue } = useForm();
  const { updateCart } = useContext(CartContext);

  // Watch nilai input
  const jumlah = watch('addstock', 0);

  // Update CartContext setiap kali jumlah berubah
  useEffect(() => {
    updateCart(id_barang, Number(jumlah));
  }, [jumlah, id_barang, updateCart]);

  return (
    <div>
      {Number(jumlah) <= 0 ? (
        <Button className='bg-blue-500 text-light' onClick={() => setValue('addstock', 1)}>
          <FontAwesomeIcon icon={'fas fa-plus'} />
        </Button>
      ) : (
        <form className='flex items-center'>
          <Input
            type='number'
            className='w-20'
            name={'addstock'}
            register={register}
            rules={{ valueAsNumber: true }}
          />
        </form>
      )}
    </div>
  );
};

AddButton.propTypes = {
  id_barang: PropTypes.any,
};

export default AddButton;
