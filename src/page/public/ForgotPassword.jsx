import { useForm } from 'react-hook-form';
import Heading from '../../components/Heading';
import Input from '../../components/input/Input';
import InputButton from '../../components/input/InputButton';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const login = async data => {
    console.log(data);

    alert('Check Your Email');

    reset();
    window.location.href = '/';
  };

  return (
    <form
      onSubmit={handleSubmit(login)}
      className='flex flex-col items-center gap-2 p-10 rounded bg-brand/5'
    >
      <Input
        label='Username'
        name='username'
        register={register}
        rules={{ required: 'Wajib diisi' }}
        error={errors.username}
      />

      <Input
        type='email'
        label={'Email'}
        name='email'
        register={register}
        rules={{ required: 'Wajib diisi' }}
        error={errors.email}
      />
      <br />
      <InputButton value={'Reset Password'} />
    </form>
  );
};

const ForgotPassword = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen gap-10 p-10'>
      <Heading
        title={'Lupa Sandi'}
        size={'lg'}
      />

      <Form />
    </div>
  );
};

export default ForgotPassword;
