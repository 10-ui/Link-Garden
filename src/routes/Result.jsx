import rope from '../assets/icon/item_rope.svg';
import cardboard from '../assets/icon/item_cardboard.svg';
import mirror from '../assets/icon/item_mirror.svg';
import branch from '../assets/icon/item_branch.svg';
import bag from '../assets/icon/item_bag.svg';
import no_rope from '../assets/icon/item_no_rope.svg';
import no_cardboard from '../assets/icon/item_no_cardboard.svg';
import no_mirror from '../assets/icon/item_no_mirror.svg';
import no_branch from '../assets/icon/item_no_branch.svg';
import no_bag from '../assets/icon/item_no_bag.svg';
import pn from '../assets/icon/pagenation_3.svg';
import logo from '../assets/icon/mark_logo.svg';
import { Link } from 'react-router-dom';

function Result() {
  function no_use() {
    {
      no_bag;
    }
    {
      no_branch;
    }
    {
      no_cardboard;
    }
    {
      no_mirror;
    }
    {
      no_rope;
    }
  }

  let num = 5;

  return (
    <>
      <div className="h-[100dvh] w-auto  mx-[20px] grid items-center">
        <div className="w-[100%] mx-auto">
        <Link to="/">
          <img
            className="fixed w-[24dvw] left-1/2 top-[2dvh] translate-x-[-50%]"
            src={logo}
            alt="ロゴアイコン"
          />
        </Link>
          <p className=" text-white font-main font-bold text-[20px] text-center mb-[48px]">
            {num}つのアイテムを取得しました！
          </p>
          <div className="wrapper grid grid-cols-3 items-center justify-center w-fit gap-4 mx-auto mb-[55px]">
            <img src={rope} alt="縄" />
            <img src={cardboard} alt="ダンボール" />
            <img src={mirror} alt="鏡" />
            <img src={branch} alt="木の枝" />
            <img src={bag} alt="袋" />
          </div>
          <p className="text-[18px] font-main font-bold mb-[55px]">
            さっそくアイテムを使ってどうぶつが
            <br />
            好きなアイテムを見つけに行こう！
          </p>
          <img className="block mx-auto mb-[24px]" src={pn} alt="ページ３" />
          <Link
            to="/Nuriecamera"
            className="text-[20px] w-[100%] mx-auto block bg-accent text-center py-[13px] font-main font-bold rounded"
          >
            Link&&Gardenの世界に入る
          </Link>
        </div>
      </div>
    </>
  );
}

export default Result;
