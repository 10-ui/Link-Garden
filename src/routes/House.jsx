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
      <div className="w-auto">
        <Link to="/">
          <img
            className="fixed w-40 left-1/2 top-10 translate-x-[-50%]"
            src={logo}
            alt="ロゴアイコン"
          />
        </Link>
        <div className="h-screen w-auto  mx-[20px] grid items-center">
          <div className="w-[100%] mx-auto">
            <h1 className=" text-white font-main font-bold text-3xl text-center mb-[48px]">
              アイテムを選んでね！
            </h1>
            <p className="text-[18px] text-center font-main font-bold mb-[45px]">
              アイテムで幸せになれる動物がいるよ！
            </p>
            <div className="scale-[1.15] wrapper grid grid-cols-3 items-center justify-center w-fit gap-4 mx-auto mb-[55px]">
              <img src={rope} alt="縄" />
              <img src={cardboard} alt="ダンボール" />
              <Link to="/Flamingo">
                <img src={mirror} alt="鏡" />
              </Link>
              <img src={branch} alt="木の枝" />
              <img src={bag} alt="袋" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
