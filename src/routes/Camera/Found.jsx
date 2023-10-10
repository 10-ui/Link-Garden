import close from '../../assets/icon/mark_close.svg';
import flamingo from '../../assets/icon/animal_funflamingo3.svg';
import { Link } from "react-router-dom";

function Found(){


  function Choosenext() {
    const nice = document.querySelector('.nice');
    nice.classList.add('hidden');
    const whatNextDo = document.querySelector('.whatNextDo');
    whatNextDo.classList.remove('hidden');
    whatNextDo.classList.add('grid');
  }

  

  function retries(){
    const imgs = Array.from(document.querySelectorAll('.items'));
    for(let i = 0; i < imgs.length; i++){
      imgs[i].classList.remove('scale-125');
      imgs[i].classList.remove('scale-90');
      imgs[i].classList.remove('opacity-90');
    };
  }

  function playSameAnimal(){
    const whatNextDo = document.querySelector('.whatNextDo');
    const holder = document.querySelector('.itemholder');
    const normal = document.getElementById('animals');
    whatNextDo.classList.remove('grid');
    whatNextDo.classList.add('hidden');
    holder.classList.remove('hidden');
    normal.classList.remove('hidden');
    document.querySelector('.seemore').classList.add('hidden');
    retries();
  }


  return (
    <>
      <div className='bg-screen nice relative items-center h-screen w-screen z-[0] hidden mt-[-20px]'>
        <div className="mx-[20px] pt-[30px]">
          <h1 className="text-btntext text-[24px] text-left">フラミンゴと<ruby>鏡<rp>(</rp><rt>かがみ</rt><rp>)</rp></ruby></h1>
          <p className="text-btntext pt-[30px] mb-[20px] leading-[32px] text-[16px]"><ruby>自然界<rp>(</rp><rt>しぜんかい</rt><rp>)</rp></ruby>にいるフラミンゴは<ruby>数百<rp>(</rp><rt>すうひゃく</rt><rp>)</rp> </ruby>～<ruby>数千羽<rp>(</rp><rt>すうせんわ</rt><rp>)</rp></ruby>
            の<ruby>群<rp>(</rp><rt>む</rt><rp>)</rp></ruby>れをつくり、
            <ruby>湖<rp>(</rp><rt>みずうみ</rt><rp>)</rp> </ruby>や<ruby>干潟<rp>(</rp><rt>ひがた</rt><rp>)</rp></ruby>に<ruby>生息<rp>(</rp><rt>せいそく</rt><rp>)</rp> </ruby>していま
            す。そのため<ruby>動物園<rp>(</rp><rt>どうぶつえん</rt><rp>)</rp></ruby>で
            <ruby>飼育<rp>(</rp><rt>しいく</rt><rp>)</rp></ruby>されているフラ
            ミンゴには<ruby>仲間<rp>(</rp><rt>なかま</rt><rp>)</rp> </ruby>が
            <ruby>少<rp>(</rp><rt>すく</rt><rp>)</rp></ruby>なくても<ruby>安心<rp>(</rp><rt>あんしん</rt><rp>)</rp></ruby>
            できるように、<ruby>壁<rp>(</rp><rt>かべ</rt><rp>)</rp></ruby>に<ruby>鏡<rp>(</rp><rt>かがみ</rt><rp>)</rp></ruby>を
            <ruby>貼<rp>(</rp><rt>は</rt><rp>)</rp></ruby>り<ruby>付<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>け、
            <ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>く<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>せる
            <ruby>工夫<rp>(</rp><rt>くふう</rt><rp>)</rp></ruby>をしています。<br className='leading-[32px]'/>
            では、<ruby>実際<rp>(</rp><rt>じっさい</rt><rp>)</rp></ruby>に
            <ruby>鏡<rp>(</rp><rt>かがみ</rt><rp>)</rp></ruby>のある<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby>で
            <ruby>過<rp>(</rp><rt>す</rt><rp>)</rp></ruby>ごしているフラミンゴの<ruby>様子<rp>(</rp><rt>ようす</rt><rp>)</rp></ruby>を
            <ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>てみましょう！
          </p>
          <iframe 
            className="w-[98%] h-auto block mx-auto" 
            src="https://www.youtube.com/embed/u2TRshJ51jg?si=DmwS5jLo-m2vlyZ8" 
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
          <img className='block mx-auto pt-[20px]' src={close} alt="閉じるボタン" onClick={() => Choosenext()}/>
        </div>
      </div>
      <div className='whatNextDo h-screen hidden items-center mx-[calc(100%-97%)] mt-[-20px]'>
        <div>
          <h1 className='text-btntext  font-bold font-main text-[24px] mb-[24px]'>フラミンゴの一番好きな場所と<br/>アイテムを見つけられたよ！</h1>
          <img className='w-[50%] block ml-[calc(100%-80%)] mr-auto mb-[34px]' src={flamingo} alt="喜んでるフラミンゴ" />
          <p className='text-btntext block mx-auto text-center w-fit font-bold font-main text-[24px] mb-[23px]'>次は何をする？</p>
          <a className='text-btntext border-main block mx-auto rounded text-center border-2 w-[90%] py-[10px] font-bold font-main text-[24px] mb-[10px]' onClick={() => playSameAnimal()}>同じ動物で続ける！</a>
          <Link to="/Cushion" className='text-btntext border-main block mx-auto rounded text-center border-2 w-[90%] py-[10px] font-bold font-main text-[24px] mb-[10px]'>違う動物を見てみる！</Link>
          <a className='text-btntext block mx-auto border-main rounded text-center border-2 w-[90%] py-[10px] font-bold font-main text-[24px] mb-[10px]'>おわる</a>
        </div>
      </div>
    </>
  )
}

export default Found