import link from '../assets/icon/mark_link.svg';
import pn from '../assets/icon/pagenation_2.svg';
import { Link } from "react-router-dom";

function Items() {


  return (
    <>
      <div className='h-screen w-auto mx-[20px] grid items-center'>
        <div className='w-[100%] mx-auto'>
          <img className='w-[97%] mx-auto mb-[58px]' src={link} alt="アイテム送受信" />
          <h1 className='text-[24px] font-bold text-center font-main mb-[24px]'>集めてきたアイテムを<br/>スマートフォンに移そう！</h1>
          <p className='h-[69px] font-bold text-[16px] text-center mb-[56px] font-main'>スタンプをスマートフォンの近くに置き、<br/>アイテムの取得開始ボタンを押してください</p>
          <img className='block mx-auto mb-[24px]' src={pn} alt="pagenation" />
          <Link to='/Result' className='text-[20px] w-[97%] block mx-auto text-center py-[13px] bg-accent font-main font-bold rounded'>アイテムの取得開始</Link>
        </div>
      </div>
    </>
  )
}

export default Items