import { useEffect } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './../input/Input';
import { useForm } from 'react-hook-form';

const AddButton = () => {
  const { register, handleSubmit, watch, setValue } = useForm();

  // Watch nilai input
  const inputValue = watch('addstock', 0);

  const addStock = (data) => {
    console.log('Add stock', data);
  };

  // Gunakan useEffect untuk melihat perubahan nilai input (opsional)
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div>
      {Number(inputValue) <= 0 ? (
        <Button className='bg-blue-500 text-light' onClick={() => setValue('addstock', 1)}>
          <FontAwesomeIcon icon={'fas fa-plus'} />
        </Button>
      ) : (
        <form className='flex items-center' onSubmit={handleSubmit(addStock)}>
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

export default AddButton;
