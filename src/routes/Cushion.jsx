import logo from '../assets/icon/mark_logo.svg';


function Cushion() {


  function jump(){
    setTimeout(location.href='/Nuriecamera',3000)
  }

  window.addEventListener('load',jump());

  return (
    <>
      <div className='h-screen grid items-center'>
      <img  className='w-[90%] mx-auto' src={logo} alt="ロゴ" />
      </div>
    </>
  )
}

export default Cushion