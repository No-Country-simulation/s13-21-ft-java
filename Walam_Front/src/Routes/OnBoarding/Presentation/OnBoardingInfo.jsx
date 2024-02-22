import { Link } from 'react-router-dom'

const OnBoardingInfo = () => {
  return (
    <>
      <div className='pt-10'>
        <p>EcoPay</p>
      </div>
      <div className='py-2 text-wrap text-2xl text-center'>
        <p>Bienvenido a la primer Green FinTech latinoamericana</p>
      </div>

      <div className='p-[120px] text-center'>
        <p>video o animación</p>
      </div>

      <div className='flex flex-wrap justify-center content-between'>
        <Link to='/Register' className='font-bold bg-white text-black py-2 px-10 rounded border-2 border-black shadow'> Registrarse</Link>
        <div className='w-2' />
        <Link to='/Login' className='font-bold bg-black py-2 px-10 rounded border-2 border-black shadow'> Iniciar sesión</Link>
        </div>

        <div className='flex flex-wrap justify-center content-between'>
        <Link to='/DashboardUser' className='font-bold  py-2 px-10 '> DashboardUser</Link>
        <div className='w-2'></div>
        <Link to='/ForgotPassword' className='font-bold  py-2 px-10'> ForgotPassword</Link>
        <div className='w-2'></div>
        <Link to='/UsersDataForm' className='font-bold  py-2 px-10'> UsersDataForm</Link>
        </div>
      </>
    )
  }

  export default OnBoardingInfo
