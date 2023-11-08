import link from '../assets/icon/mark_link.svg';
import pn from '../assets/icon/pagenation_2.svg';
import logo from '../assets/icon/mark_logo.svg';
import { Link } from 'react-router-dom';

function Items() {
  let leafony;
  let leafonyMode = 'search_item'; // leafony のモード。search_item, send_item, discover の3つ。
  function leaf() {
    //leafonyと接続
    if (!leafony) {
      leafony = new Leafony();
      leafony.onStateChange(function (state) {
        getData(state);
      });
      leafonyMode = 'send_item';
      leafony.connect('SND');
    } else {
      console.log('Leafonyは既に接続済みです。mode:' + leafonyMode);
    }
  }
  /**
   * Leafonyからデータを取得するメソッド
   * @param {*} state
   */
  function getData(state) {
    item11 = state.item11;
    item12 = state.item12;
    item13 = state.item13;
    item14 = state.item14;
    item15 = state.item15;
    // Create array of reveived data and sensors data
    let darray = new Array(
      state.item11,
      state.item12,
      state.item13,
      state.item14,
      state.item15
    );
    console.log(darray[0]);
    console.log(darray[1]);
    console.log(darray[2]);
    console.log(darray[3]);
    console.log(darray[4]);
  }

  return (
    <>
      <div className="h-[100dvh] w-auto mx-[20px] grid items-center">
        <Link to="/">
          <img
            className="fixed w-[31dvw] left-1/2 top-[2dvh] translate-x-[-50%]"
            src={logo}
            alt="ロゴアイコン"
          />
        </Link>
        <div className="w-[100%] mx-auto">
          <img
            className="w-[97%] mx-auto mb-[58px]"
            src={link}
            alt="アイテム送受信"
          />
          <h1 className="text-[24px] font-bold text-center font-main mb-[24px]">
            集めてきたアイテムを
            <br />
            スマートフォンに移そう！
          </h1>
          <p className="h-[69px] font-bold text-[16px] text-center mb-[56px] font-main">
            スタンプをスマートフォンの近くに置き、
            <br />
            アイテムの取得開始ボタンを押してください
          </p>
          <img className="block mx-auto mb-[24px]" src={pn} alt="pagenation" />
          <Link
            to="/Result"
            className="text-[20px] w-[97%] block mx-auto text-center py-[13px] bg-accent font-main font-bold rounded"
            // onClick={() => leaf()}
          >
            アイテムの取得開始
          </Link>
          {/* onClick={()=> Connect()} */}
        </div>
      </div>
    </>
  );
}

export default Items;
