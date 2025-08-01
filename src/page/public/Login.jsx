import { useForm } from 'react-hook-form';
import Heading from '../../components/Heading';
import Input from '../../components/input/Input';
import InputButton from '../../components/input/InputButton';
import useAxios from '../../utils/axios';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { postData, isLoading } = useAxios();

  const login = async data => {
    const { response, error } = await postData('/login', data);
    if (error) return alert(error.message);

    localStorage.setItem('token', response.result);
    alert(response.message);

    reset();

    window.location.href = '/dashboard';
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
      <InputButton
        value={isLoading ? 'Loading...' : 'Login'}
        disabled={isLoading}
      />

      <Link to={'/forgotpass'}>Lupa Sandi?</Link>
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
