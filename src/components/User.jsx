import logo from '../images/logo.png';
const User = () => {
  return (
    <div className='User'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='info'>
        <p>Tanvir Mitul</p>
        <a>Log out</a>
      </div>
    </div>
  );
};

export default User;
