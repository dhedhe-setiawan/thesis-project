import PropTypes from 'prop-types';
const Profile = ({ nama, jabatan, img }) => {
  return (
    <span className='flex items-center gap-5'>
      <img className='w-8 h-8' src={img} alt='' />
      <hgroup className='text-light'>
        <p className='font-bold'>{nama}</p>
        <p>{jabatan}</p>
      </hgroup>
    </span>
  );
};

Profile.propTypes = {
  img: PropTypes.any,
  jabatan: PropTypes.any,
  nama: PropTypes.any,
};

export default Profile;
