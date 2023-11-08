import logo from '../assets/icon/mark_logo.svg';

function Cushion() {
  const sleep = (waitTime) =>
    new Promise((resolve) => setTimeout(resolve, waitTime));

  async function jump() {
    await sleep(2000);
    location.href = '/NurieCamera';
  }

  window.addEventListener('load', jump());

  return (
    <>
      <div className="h-screen grid items-center">
        <figure>
          <img className="w-[90%] mx-auto" src={logo} alt="ロゴ" />
        </figure>
      </div>
    </>
  );
}

export default Cushion;
