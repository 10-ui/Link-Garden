import logo from "../assets/icon/mark_logo.svg";
import { Link } from "react-router-dom";

function Home() {

  function hide() {
    document.querySelector('.hides').classList.add('hidden');
  }

  return (
    <>
      <div className="h-screen  mx-[25px] grid items-center box-border">
        <div className="w-[100%] mx-auto">
          <img className="mx-auto  mb-[70px]" src={logo} alt="ロゴアイコン" />
          <h1 className="mb-[24px] text-[24px] font-main font-bold text-center">
            Link&&Gardenへようこそ！
          </h1>
          <p className="h-[71px] mb-[46px] text-[16px] text-center font-main font-bold">
            動物たちの幸せを園内で集めてきたアイ
            <br />
            テムや環境を通して学ぶことができます。
          </p>
          <Link
            to="/Bluetooth"
            className="text-[20px] text-white w-[100%] mb-[12px] block mx-auto text-center py-[13px] bg-accent font-main font-bold rounded"
            onClick={() => hide()}
          >
            イベントで遊ぶ
          </Link>
          <Link
            to="/House"
            className="text-[20px] text-white w-[100%] mb-[26px] block mx-auto text-center py-[13px] bg-accent font-main font-bold rounded"
            onClick={() => hide()}
          >
            おうちで学ぶ
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
