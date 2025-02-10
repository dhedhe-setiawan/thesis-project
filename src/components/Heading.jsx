import PropTypes from 'prop-types';

const Heading = ({ title, subtitle, children, size }) => {
  return (
    <hgroup className={`flex flex-col items-center w-fit ${size !== 'sm' && 'gap-3'}`}>
      {size === 'lg' ? (
        <>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </>
      ) : size === 'sm' ? (
        <>
          <p className='font-bold'>{title}</p>
          <p>{subtitle}</p>
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </>
      )}
      {children}
    </hgroup>
  );
};

Heading.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
  subtitle: PropTypes.any,
  title: PropTypes.any,
};

export default Heading;
