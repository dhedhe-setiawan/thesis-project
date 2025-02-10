import { useForm } from 'react-hook-form';
import Heading from '../../components/Heading';
import Input from '../../components/input/Input';
import InputButton from '../../components/input/InputButton';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const login = (data) => {
    console.log('Login Data:', data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(login)}
      className='flex flex-col items-center gap-2 p-10 rounded bg-brand/5'
    >
      <Input
        label='Username'
        placeholder={'Contoh: user1234'}
        name='username'
        register={register}
        rules={{ required: 'Wajib diisi' }}
        error={errors.username}
      />

      <Input
        type='password'
        label={'Password'}
        name='password'
        register={register}
        rules={{ required: 'Wajib diisi' }}
        error={errors.password}
      />
      <br />
      <InputButton />
    </form>
  );
};

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen gap-10 p-10'>
      <Heading title={'PT Karya Bersama'} subtitle={'Login'} size={'lg'} />

      <LoginForm />
    </div>
  );
};

export default Login;
