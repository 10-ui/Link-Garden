import bluetooth from '../assets/icon/mark_bluetooth.svg';
import pn from '../assets/icon/pagenation_1.svg';
import { Link } from "react-router-dom";

function Bluetooth() {

  return (
    <>
      <div className='h-screen w-auto mx-[35px] grid items-center'>
        <div className="container">
          <img className='mx-auto mb-[42px]' src={bluetooth} alt="Bloetoothアイコン" />
          <h1 className='text-[24px] font-bold text-center font-main mb-[24px]'>BluetoothをONにしよう！</h1>
          <p className='h-[71px] font-bold text-center mb-[56px] font-main'>お持ちのスマートフォンのBluetoothがONになっているか確認をし、OFFになっている場合はONに切り替えてください。</p>
          <img className='block mx-auto mb-[24px]' src={pn} alt="pagenation" />
          <Link to='/Getitem' className='text-[20px] w-[320px] block mx-auto text-center py-[13px] bg-accent font-main font-bold text-btntext rounded'>ONにした！</Link>
        </div>
      </div>
    </>
  )
}

export default Bluetooth
