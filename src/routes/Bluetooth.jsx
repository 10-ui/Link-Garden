import bluetooth from '../assets/icon/mark_bluetooth.svg';
import logo from '../assets/icon/mark_logo.svg';
import pn from '../assets/icon/pagenation_1.svg';
import { Link } from 'react-router-dom';

function Bluetooth() {
  return (
    <>
      <div className="h-screen w-auto mx-[30px] grid items-center">
        <Link to="/">
          <img
            class="fixed w-28 right-7 top-3 z-[12]"
            src={logo}
            alt="ロゴアイコン"
          />
        </Link>
        <div className="w-[100%] mx-auto">
          <img
            className="mx-auto mb-[42px] w-[67%]"
            src={bluetooth}
            alt="Bloetoothアイコン"
          />
          <h1 className="text-[23px] font-bold text-center font-main mb-[24px]">
            BluetoothをONにしよう！
          </h1>
          <p className="h-[71px] font-bold text[15px] text-center mb-[56px] font-main">
            お持ちのスマートフォンのBluetoothがONになっているか確認をし、OFFになっている場合はONに切り替えてください
          </p>
          <img className="block mx-auto mb-[24px]" src={pn} alt="pagenation" />
          <Link
            to="/Getitem"
            className="text-[20px] w-[100%] block mx-auto text-center py-[13px] bg-accent font-main font-bold rounded"
          >
            ONにした！
          </Link>
        </div>
      </div>
    </>
  );
}

export default Bluetooth;
