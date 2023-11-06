import close from '../assets/icon/mark_close.svg';
import logo from '../assets/icon/mark_logo.svg';
import { Link } from 'react-router-dom';

function Found() {
  return (
    <>
      <div className="bg-housescreen nice relative items-center h-[100dvh] w-[100dvw] z-[0]">
        <Link to="/">
          <img
            class="fixed w-28 right-7 top-2 z-[12]"
            src={logo}
            alt="ロゴアイコン"
          />
        </Link>
        <div className="mx-[20px] pt-[30px]">
          <h1 className="text-btntext text-[24px] text-left">
            フラミンゴと
            <ruby>
              鏡<rp>(</rp>
              <rt>かがみ</rt>
              <rp>)</rp>
            </ruby>
          </h1>
          <p className="text-btntext pt-[30px] mb-[40px] leading-[50px] text-[16px]">
            <ruby>
              自然界<rp>(</rp>
              <rt>しぜんかい</rt>
              <rp>)</rp>
            </ruby>
            にいるフラミンゴは
            <ruby>
              数百<rp>(</rp>
              <rt>すうひゃく</rt>
              <rp>)</rp>{' '}
            </ruby>
            ～
            <ruby>
              数千羽<rp>(</rp>
              <rt>すうせんわ</rt>
              <rp>)</rp>
            </ruby>
            の
            <ruby>
              群<rp>(</rp>
              <rt>む</rt>
              <rp>)</rp>
            </ruby>
            れをつくり、
            <ruby>
              湖<rp>(</rp>
              <rt>みずうみ</rt>
              <rp>)</rp>{' '}
            </ruby>
            や
            <ruby>
              干潟<rp>(</rp>
              <rt>ひがた</rt>
              <rp>)</rp>
            </ruby>
            に
            <ruby>
              生息<rp>(</rp>
              <rt>せいそく</rt>
              <rp>)</rp>{' '}
            </ruby>
            していま す。そのため
            <ruby>
              動物園<rp>(</rp>
              <rt>どうぶつえん</rt>
              <rp>)</rp>
            </ruby>
            で
            <ruby>
              飼育<rp>(</rp>
              <rt>しいく</rt>
              <rp>)</rp>
            </ruby>
            されているフラ ミンゴには
            <ruby>
              仲間<rp>(</rp>
              <rt>なかま</rt>
              <rp>)</rp>{' '}
            </ruby>
            が
            <ruby>
              少<rp>(</rp>
              <rt>すく</rt>
              <rp>)</rp>
            </ruby>
            なくても
            <ruby>
              安心<rp>(</rp>
              <rt>あんしん</rt>
              <rp>)</rp>
            </ruby>
            できるように、
            <ruby>
              壁<rp>(</rp>
              <rt>かべ</rt>
              <rp>)</rp>
            </ruby>
            に
            <ruby>
              鏡<rp>(</rp>
              <rt>かがみ</rt>
              <rp>)</rp>
            </ruby>
            を
            <ruby>
              貼<rp>(</rp>
              <rt>は</rt>
              <rp>)</rp>
            </ruby>
            り
            <ruby>
              付<rp>(</rp>
              <rt>つ</rt>
              <rp>)</rp>
            </ruby>
            け、
            <ruby>
              多<rp>(</rp>
              <rt>おお</rt>
              <rp>)</rp>
            </ruby>
            く
            <ruby>
              見<rp>(</rp>
              <rt>み</rt>
              <rp>)</rp>
            </ruby>
            せる
            <ruby>
              工夫<rp>(</rp>
              <rt>くふう</rt>
              <rp>)</rp>
            </ruby>
            をしています。
            <br className="leading-[32px]" />
            では、
            <ruby>
              実際<rp>(</rp>
              <rt>じっさい</rt>
              <rp>)</rp>
            </ruby>
            に
            <ruby>
              鏡<rp>(</rp>
              <rt>かがみ</rt>
              <rp>)</rp>
            </ruby>
            のある
            <ruby>
              環境<rp>(</rp>
              <rt>かんきょう</rt>
              <rp>)</rp>
            </ruby>
            で
            <ruby>
              過<rp>(</rp>
              <rt>す</rt>
              <rp>)</rp>
            </ruby>
            ごしているフラミンゴの
            <ruby>
              様子<rp>(</rp>
              <rt>ようす</rt>
              <rp>)</rp>
            </ruby>
            を
            <ruby>
              見<rp>(</rp>
              <rt>み</rt>
              <rp>)</rp>
            </ruby>
            てみましょう！
          </p>
          <iframe
            className="block mx-auto"
            src="https://www.youtube.com/embed/u2TRshJ51jg?si=DmwS5jLo-m2vlyZ8"
            title="YouTube video player"
            width="340"
            height="190"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <Link to="/">
            <img
              className="block mx-auto pt-[30px] scale-90"
              src={close}
              alt="閉じるボタン"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Found;
