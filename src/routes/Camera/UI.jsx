import React, { useState } from 'react';
import cardboard from '../../assets/icon/tool_cardboard.svg';
import rope from '../../assets/icon/tool_rope.svg';
import mirror from '../../assets/icon/tool_mirror.svg';
import branch from '../../assets/icon/tool_branch.svg';
import bag from '../../assets/icon/tool_bag.svg';
import Fla from '../../assets/icon/animal_normalflamingo.svg'
import Flafav1 from '../../assets/icon/animal_funflamingo1.svg';
import Flafav2 from '../../assets/icon/animal_funflamingo2.svg';
import Flafav3 from '../../assets/icon/animal_funflamingo3.svg';
import Flasick from '../../assets/icon/animal_sadflamingo.svg';
import Flamirror from '../../assets/icon/animal_mirror.svg';
import Comment from '../../assets/icon/animal_comment.svg';

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );

function UI() {

  const [num, setNum] = useState(null);
  const [name, setName] = useState(null);
  let Beacon_num = 21;
  let area = {
    name:"初期値",
    num:999
  };
  switch(Beacon_num){
    case 21:
      area.name = "水辺";
      area.num = Beacon_num;
      break;
    case 22:
      area.name = "洞窟";
      area.num = Beacon_num;
      break;
    case 23:
      area.name = "サバンナ";
      area.num = Beacon_num;
      break;
    case 24:
      area.name = "森";
      area.num = Beacon_num;
      break;
    default:
      alert('error');
  };

  let now_env = area.name; //environment

  function render(props,name) {
    Clicked(props)
    setNum(props)
    setName(name)
  }

  function Clicked(props) {

    let imgs = Array.from(document.querySelectorAll('.items'));
    let fun = document.querySelector(".fanimal");
    let sad = document.querySelector(".sanimal");
    let animal = document.querySelector(".check");
    console.log(animal);

    fun.classList.add("hidden");
    sad.classList.add("hidden");
    animal.classList.remove("hidden");

    for(let i = 0; i <=4; i++){
      imgs[i].classList.remove('scale-125');
      imgs[i].classList.remove('scale-90');
      imgs[i].classList.remove('opacity-90');
    };
  
    imgs[props].classList.add('scale-125');
  
    imgs.splice(props,1)
  
    for(let i = 0; i <=3; i++){
      imgs[i].classList.add('scale-90');
      imgs[i].classList.add('opacity-90');
    };
  };

  async function Check() {
    // const animalnum = pro;
    // alert(animalnum);
    let animal = document.querySelector(".check");
    let fun = document.querySelector(".fanimal");
    let sad = document.querySelector(".sanimal");
    let funs = [...document.querySelectorAll(".fananimal")];
    let sads = document.querySelector(".sadanimal");
    let mirror = document.querySelector('.mirror');
    let holder = document.querySelector('.itemholder');
    let comment = document.querySelector('.comment');
    animal.classList.add("hidden");

    if((name==="かがみ") && (now_env==="水辺")){
      holder.classList.add('hidden');
      mirror.classList.remove('hidden');
      comment.classList.remove('hidden');
      fun.classList.remove("hidden");
      for (let i = 0; i < funs.length; i++) {
        funs[i].classList.remove('hidden');
        funs[i].classList.add('animate-yurayura');
        await sleep(2000);
        funs[i].classList.add('hidden');
        funs[i].classList.remove('animate-yurayura');
      }
      mirror.classList.add('hidden');
      comment.classList.add('hidden');
    }
    else if(name==="かがみ"){
      sad.classList.remove("hidden");
      sads.classList.add('animate-sayu');
      await sleep(3000);
      sads.classList.remove('animate-sayu');
    }
    else if(now_env==="水辺"){
      sad.classList.remove("hidden");
    }
    else {
      sad.classList.remove("hidden");
      sads.classList.add('animate-sayu');
      await sleep(3000);
      sads.classList.remove('animate-sayu');
    }
  }

  return (
    <>

      {/* <p className='fixed top-0 left-0 current'>現在の環境：{now_env} , 環境番号：{area.num} ,<br/>選ばれてるアイテム：{name} , アイテム番号：{num}</p> */}
      
      {/* <p 
      className='bg-main w-fit rounded-lg px-4 py-2 relative 
      after:block after:w-3 after:y-3 after:rotate-45 after:absolute after:bottom-[-20px] after:bg-main after:left-[50%] after:translate-x-[-50%]'
      >動物をタップ！</p> */}
      <div className="hidden UI">
        <img onClick={() => Check()} id='animals' src={Fla} className='w-1/2 h-1/2 check fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]' alt="普通のフラミンゴ"  />
        <img className='mirror w-screen fixed left-1/2 top-[20%] translate-x-[-50%] hidden' src={Flamirror} alt="フラミンゴがたくさん映る鏡" />
        <img className='comment w-4/5 fixed left-1/2 top-[70%] translate-x-[-50%] hidden' src={Comment} alt="喜んでるときの吹き出し" />
        <div className='animalbox hidden fixed z-[40] h-screen w-auto items-center'>
          <div className="happy fanimal hidden fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <img className='fananimal hidden' src={Flafav1} alt="喜ぶフラミンゴ" />
            <img className='fananimal hidden' src={Flafav2} alt="喜ぶフラミンゴ" />
            <img className='fananimal hidden' src={Flafav3} alt="喜ぶフラミンゴ" />
            
          </div>
          <div className="sad sanimal hidden fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <img className='sadanimal' src={Flasick} alt="悲しむフラミンゴ" />
          </div>
        </div>
        <div className="itemholder h-[90px] w-[100%] rounded-t-[20px] fixed z-30 bottom-0 left-0 bg-main">
            <div className="flex justify-between mt-[-35px]">
              <img onClick={() => render(0,"えだ")} src={branch} alt="えだ" className='items mt-[-18px] w-[55px] h-[115px] object-cover' />
              <img onClick={() => render(1,"ロープ")} src={rope} alt="ロープ" className='items mt-[-10px] w-[90px]  h-[105px] object-right-bottom object-cover' />
              <img onClick={() => render(2,"ダンボール")} src={cardboard} className='items' alt="ダンボール" />
              <img onClick={() => render(3,"ふくろ")} src={bag} alt="ふくろ" className='items mt-[-6px] w-[95px] h-[100px] object-left-bottom object-cover' />
              <img onClick={() => render(4,"かがみ")} src={mirror} alt="かがみ" className='items mt-[-10px] w-[60px] h-[110px]' />
            </div>
          </div>
      </div>
    </>
  )
}

export default UI