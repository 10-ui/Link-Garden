import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
import Flakomaru from '../../assets/icon/animal_komarufulamingo.svg';
import Flazannen from '../../assets/icon/animal_zannenflamingo.svg';
import Flamirror from '../../assets/icon/animal_mirror.svg';
import Comment from '../../assets/icon/animal_comment.svg';

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );

function UIs() {

  const [num, setNum] = useState(null);
  const [name, setName] = useState(null);
  let Beacon_num = 21 ;
  // let choose = 1;
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

    for(let i = 0; i < imgs.length; i++){
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

  function resets(){
    const imgs = Array.from(document.querySelectorAll('.items'));
    for(let i = 0; i < imgs.length; i++){
      imgs[i].classList.remove('scale-125');
      imgs[i].classList.remove('scale-90');
      imgs[i].classList.remove('opacity-90');
    };
  }

  async function Check() {
    // const animalnum = pro;
    // alert(animalnum);
    const normal = document.getElementById('animals');
    const animal = document.querySelector(".check");
    const fun = document.querySelector(".fanimal");
    const sad = document.querySelector(".sanimal");
    const koma = document.querySelector('.koma');
    const komaru = document.querySelector('.komaru');
    const cardcomment = document.querySelector('.cardboard')
    const funs = [...document.querySelectorAll(".fananimal")];
    const sads = document.querySelector(".sadanimal");
    const mirror = document.querySelector('.mirror');
    const holder = document.querySelector('.itemholder');
    const comment = document.querySelector('.comment');
    const mizube = document.querySelector('.mizube');
    const sabanna = document.querySelector('.sabanna');
    const doukutsu = document.querySelector('.doukutsu');
    const mori = document.querySelector('.mori');
    animal.classList.add("hidden");

    //どっちもあってる
    if((name==="かがみ") && (now_env==="水辺")){
      holder.classList.add('hidden');
      mirror.classList.remove('hidden');
      comment.classList.remove('hidden');
      fun.classList.remove("hidden");
      setName(null);
      for (let i = 0; i < funs.length; i++) {
        funs[i].classList.remove('hidden');
        funs[i].classList.add('animate-yurayura');
        await sleep(2000);
        if(i == 2){
          document.querySelector('.seemore').classList.remove('hidden');
          document.querySelector('.seemore').classList.add('block');
        } else funs[i].classList.add('hidden');
        funs[i].classList.remove('animate-yurayura');
      }
    }
    //道具違うとき
    else if(now_env==="水辺" && name === "ダンボール"){
      holder.classList.add('hidden');
      komaru.classList.remove("hidden");
      cardcomment.classList.remove('hidden');
      koma.classList.add('animate-sayu');
      await sleep(5000);
      koma.classList.remove('animate-sayu');
      komaru.classList.add('hidden');
      cardcomment.classList.add('hidden');
      holder.classList.remove('hidden');
      normal.classList.remove('hidden');
      resets();
    }
    //みずべのとき
    else if(now_env === "水辺" ){
      holder.classList.add('hidden');
      fun.classList.remove("hidden");
      mizube.classList.remove('hidden');
      funs[0].classList.remove('hidden');
      funs[0].classList.add('animate-yurayura');
      await sleep(5000); 
      funs[0].classList.remove('animate-yurayura');
      funs[0].classList.add('hidden');
      fun.classList.add('hidden');
      mizube.classList.add('hidden');
      holder.classList.remove('hidden');
      normal.classList.remove('hidden');
      resets();
    }
    //サバンナのとき
    else if(now_env === "サバンナ" ){
      holder.classList.add('hidden');
      sad.classList.remove("hidden");
      sabanna.classList.remove('hidden');
      sads.classList.add('animate-sayu');
      await sleep(5000);
      sads.classList.remove('animate-sayu');
      sad.classList.add('hidden');
      sabanna.classList.add('hidden');
      holder.classList.remove('hidden');
      normal.classList.remove('hidden');
      resets();
    }
    //森のとき
    else if(now_env === "森" ){
      holder.classList.add('hidden');
      sad.classList.remove("hidden");
      mori.classList.remove('hidden');
      sads.classList.add('animate-sayu');
      await sleep(5000);
      sads.classList.remove('animate-sayu');
      sad.classList.add('hidden');
      mori.classList.add('hidden');
      holder.classList.remove('hidden');
      normal.classList.remove('hidden');
      resets();
    }
    //洞窟のとき
    else if(now_env === "洞窟" ){
      holder.classList.add('hidden');
      sad.classList.remove("hidden");
      doukutsu.classList.remove('hidden');
      sads.classList.add('animate-sayu');
      await sleep(5000);
      sads.classList.remove('animate-sayu');
      sad.classList.add('hidden');
      doukutsu.classList.add('hidden');
      holder.classList.remove('hidden');
      normal.classList.remove('hidden');
      resets();
    }
    //どっちも違う
    else {
      sad.classList.remove("hidden");
      sads.classList.add('animate-sayu');
      await sleep(3000);
      sads.classList.remove('animate-sayu');
    }
  }
  
  async function Timer(device) {
    device.watchAdvertisements()
    const num = document.getElementById('num');
    let percent = null
    await sleep(1500);
    for(let i = 0; i < 101; i++){
      await sleep(100);
      percent = `${i}%`;
      num.innerHTML = percent;
    }
  }
  

      // ビーコンの名前
      const name02 = 'FSC_BP103_2';
      const name03 = 'FSC_BP103_3';

      const beacon_array = [
        { name: name02, rssi: 0, count: 0 },
        { name: name03, rssi: 0, count: 0 },
        
      ]
      
      // 初期値設定
      let beacon_check = beacon_array[0];
      let beacon = beacon_array[0];
      
      // beacon_distance よりも値が小さい（ビーコンとの距離が近い）時が beacon_count 回あったときに判定させる
      const beacon_count = 5;

      // ビーコンの数
      const beacon_num = 2;

      // beacon_distance よりも値が小さい時に判定させる
      const beacon_distance = -67;

      let beacon_select;
      
      
    function onWatchAdvertisementsButtonClick() {

      
      console.log('Requesting any Bluetooth device...');
      navigator.bluetooth.requestDevice({
      filters: [
      {
        name: 'FSC_BP103_2'
      },
      {
        name: 'FSC_BP103_3'
      }],  //< - Prefer filters to save energy & show relevant devices.
      
      })
      .then(device => {
      console.log('> Requested ' + device.name);
      
      console.log('検知したよ！！');
      
  
      device.gatt.connect()
    
  
      device.addEventListener("advertisementreceived", (event) => {

      // ビーコンの名前で条件判定　（ビーコンの名前が 2番だったら2番の配列の電波強度を更新）
      if (event.device.name == name02) {
        beacon_array[0].rssi = event.rssi;
        
      } else if (event.device.name == name03) {
        beacon_array[1].rssi = event.rssi;
        
      }
      
      // どのビーコンが一番近いか判定して beacon_selectにいれる
      beacon_select = beacon_array[0];
      for (let i = 1; i < 2; i++) {
        if (beacon_select.rssi < beacon_array[i].rssi) {
          beacon_select = beacon_array[i];
        }
      }
      
      // ビーコンの値が -67よりも小さいときにカウントアップ
      if (beacon_select.rssi > beacon_distance) {
        beacon_select.count++;
      }
      
      // 一番近いビーコン　かつ　ビーコンの電波強度が -67よりも小さい時が beacon_count(今は5回)よりも多いとき
      if (beacon_select.name == beacon_check.name && beacon_select.count > beacon_count ) {
        console.log("選ばれたのは君だ！！" + beacon_select.name);
        beacon = beacon_select;
        
        // すべてのビーコンの中にある count を 0 にリセット
        for (let i = 0; i < beacon_num; i++) {
          beacon_array[i].count = 0;
        }
        
      }
      
      beacon_check = beacon_select;

      
      console.log(beacon_array[0]);
      console.log(beacon_array[1]);
      console.log(beacon_select);

      // elm02.textContent = beacon_array[0].name + beacon_array[0].rssi + beacon_array[0].count + beacon.name;                                    
      // elm03.textContent = beacon_array[1].name + beacon_array[1].rssi + beacon_array[1].count;                                

      event.manufacturerData.forEach((valueDataView, key) => {
      logDataView('Manufacturer', key, valueDataView);
      });
      event.serviceData.forEach((valueDataView, key) => {
      logDataView('Service', key, valueDataView);
      });
      
      
      var elm = document.getElementById('test_line');
        elm.textContent = event.device.name;
      });
      
      
      //device.onavailabilitychanged = (event) => {
      //  console.log('Advertisement received.');
      //    console.log('  Device Name: ' + event.device.name);
      //    console.log('  Device ID: ' + event.device.id);
      //    console.log('  RSSI: ' + event.rssi);
      //    console.log('  TX Power: ' + event.txPower);
      //    console.log('  UUIDs: ' + event.uuids);
      //    event.manufacturerData.forEach((valueDataView, key) => {
      //        logDataView('Manufacturer', key, valueDataView);
      //    });
      //    event.serviceData.forEach((valueDataView, key) => {
      //        logDataView('Service', key, valueDataView);
      //    });
      //};
      
      
      console.log(device.id);
      console.log('Watching advertisements from "' + device.name + '"...');
      return  Timer(device);
      })
      
      .catch(error => {
        console.log('Argh! ' + error);
        alert(error);
      });
      }
      
      /* Utils */
      
      const logDataView = (labelOfDataSource, key, valueDataView) => {
      const hexString = [...new Uint8Array(valueDataView.buffer)].map(b => {
      return b.toString(16).padStart(2, '0');
      }).join(' ');
      const textDecoder = new TextDecoder('ascii');
      const asciiString = textDecoder.decode(valueDataView.buffer);
      console.log(`  ${labelOfDataSource} Data: ` + key +
      '\n    (Hex) ' + hexString +
      '\n    (ASCII) ' + asciiString);
      };


      function Found(){
        const nice = document.querySelector('.nice');
        const comments = document.querySelector('.comment');
        const mirrors = document.querySelector('.mirror');
        const lotfun = document.querySelector('.lotfun')
        nice.classList.remove('hidden');
        nice.classList.add('grid');
        lotfun.classList.add('hidden');
        mirrors.classList.add('hidden');
        comments.classList.add('hidden');
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
        <div className="comment w-screen h-[190px] fixed left-1/2 top-[60%] translate-x-[-50%] hidden">
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[33%] translate-x-[-50%] translate-y-[-33%]'>
            わたしはたくさんの<ruby>友達<rp>(</rp><rt>ともだち</rt><rp>)</rp> </ruby>といるのが
            <ruby>好<rp>(</rp><rt>す</rt><rp>)</rp> </ruby>きな
          </p>
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[55%] translate-x-[-50%] translate-y-[-55%]'>
            の。<ruby>自分<rp>(</rp><rt>じぶん</rt><rp>)</rp> </ruby>の<ruby>姿<rp>(</rp><rt>すがた</rt><rp>)</rp> </ruby>が
            <ruby>写<rp>(</rp><rt>うつ</rt><rp>)</rp> </ruby>っていると
            <ruby>友達<rp>(</rp><rt>ともだち</rt><rp>)</rp> </ruby>がいるよう
          </p>
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[75%] translate-x-[-50%] translate-y-[-75%]'>
            で<ruby>安心<rp>(</rp><rt>あんしん</rt><rp>)</rp> </ruby>する！
            あなたも<ruby>友達<rp>(</rp><rt>ともだち</rt><rp>)</rp> </ruby>になってくれる？
          </p>
          <p className='text-accent seemore z-[50] w-[25%] fixed right-[10%] top-[95%] translate-x-[-10%] translate-y-[-95%] hidden'
              onClick={() => Found()}>
            もっと見る
          </p>
          <img className='z-[49] w-[95%] fixed left-1/2 top-[40%] translate-x-[-50%] translate-y-[-40%]' src={Comment} alt="喜んでるときの吹き出し" />
        </div>
        <div className="cardboard w-screen h-[190px] fixed left-1/2 top-[60%] translate-x-[-50%] hidden">
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[33%] translate-x-[-50%] translate-y-[-33%]'>
          わたしはたくさんの<ruby>友達<rp>(</rp><rt>ともだち</rt><rp>)</rp></ruby>といるのが<ruby>好<rp>(</rp><rt>す</rt><rp>)</rp></ruby>きな
          </p>
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[55%] translate-x-[-50%] translate-y-[-55%]'>
          の。こんなものがあっても<ruby>足<rp>(</rp><rt>あし</rt><rp>)</rp></ruby>をケガするだけ
          </p>
          <p className='block text-left z-[50] w-[95%] fixed left-1/2 top-[75%] translate-x-[-50%] translate-y-[-75%]'>
          &nbsp;&nbsp;&thinsp;だわ。<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うものが<ruby>欲<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>しいわ。
          </p>
          <img className='z-[49] w-[95%] fixed left-1/2 top-[40%] translate-x-[-50%] translate-y-[-40%]' src={Comment} alt="困ってるときの吹き出し" />
        </div>
        <div className="mizube w-screen h-[190px] fixed left-1/2 top-[60%] translate-x-[-50%] hidden">
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[33%] translate-x-[-50%] translate-y-[-33%]'>
          わたしは、きれい<ruby>好<rp>(</rp><rt>す</rt><rp>)</rp></ruby>きなの！<ruby>羽<rp>(</rp><rt>はね</rt><rp>)</rp></ruby>を<ruby>綺麗<rp>(</rp><rt>きれい</rt><rp>)</rp></ruby>にする
          </p>
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[55%] translate-x-[-50%] translate-y-[-55%]'>
          ためによく<ruby>水浴<rp>(</rp><rt>みずあ</rt><rp>)</rp></ruby>びをするの。<span className='text-blue'><ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby></span>のある<ruby>場所<rp>(</rp><rt>ばしょ</rt><rp>)</rp></ruby>に
          </p>
          <p className='block text-left z-[50] w-[95%] fixed left-1/2 top-[75%] translate-x-[-50%] translate-y-[-75%]'>
          &nbsp;&nbsp;&thinsp;<ruby>連<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>れてきてくれてありがとう！
          </p>
          <img className='z-[49] w-[95%] fixed left-1/2 top-[40%] translate-x-[-50%] translate-y-[-40%]' src={Comment} alt="嬉しいときの吹き出し" />
        </div>
        <div className="sabanna w-screen h-[190px] fixed left-1/2 top-[60%] translate-x-[-50%] hidden">
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[33%] translate-x-[-50%] translate-y-[-33%]'>
          わたしは、<span className='text-blue'><ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby></span>が<ruby>好<rp>(</rp><rt>す</rt><rp>)</rp></ruby>きなの。カラカラとした<ruby>場<rp>(</rp><rt>ば</rt><rp>)</rp></ruby>
          </p>
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[55%] translate-x-[-50%] translate-y-[-55%]'>
          <ruby>所<rp>(</rp><rt>しょ</rt><rp>)</rp></ruby>はわたしには<ruby>合<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>わないわ！もっと<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うとこ
          </p>
          <p className='block text-left z-[50] w-[95%] fixed left-1/2 top-[75%] translate-x-[-50%] translate-y-[-75%]'>
          &nbsp;&nbsp;&thinsp;ろにも<ruby>連<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>れて<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>ってちょうだい！
          </p>
          <img className='z-[49] w-[95%] fixed left-1/2 top-[40%] translate-x-[-50%] translate-y-[-40%]' src={Comment} alt="嫌がってるときの吹き出し" />
        </div>
        <div className="doukutsu w-screen h-[190px] fixed left-1/2 top-[60%] translate-x-[-50%] hidden">
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[33%] translate-x-[-50%] translate-y-[-33%]'>
          わたしは、<span className='text-blue'><ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby></span>が<ruby>好<rp>(</rp><rt>す</rt><rp>)</rp></ruby>きなの。ここだと<ruby>天敵<rp>(</rp><rt>てんてき</rt><rp>)</rp></ruby>が<ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>
          </p>
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[55%] translate-x-[-50%] translate-y-[-55%]'>
          すぎて<ruby>安心<rp>(</rp><rt>あんしん</rt><rp>)</rp></ruby>してご<ruby>飯<rp>(</rp><rt>はん</rt><rp>)</rp></ruby>も<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べられないわ。もっ
          </p>
          <p className='block text-left z-[50] w-[95%] fixed left-1/2 top-[75%] translate-x-[-50%] translate-y-[-75%]'>
          &nbsp;&nbsp;&thinsp;と<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うところにも<ruby>連<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>れて<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>ってちょうだい！
          </p>
          <img className='z-[49] w-[95%] fixed left-1/2 top-[40%] translate-x-[-50%] translate-y-[-40%]' src={Comment} alt="嫌がってるときの吹き出し" />
        </div>
        <div className="mori w-screen h-[190px] fixed left-1/2 top-[60%] translate-x-[-50%] hidden">
        <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[33%] translate-x-[-50%] translate-y-[-33%]'>
        わたしは、<span className='text-blue'><ruby>柔<rp>(</rp><rt>やわ</rt><rp>)</rp></ruby>らかい<ruby>地面<rp>(</rp><rt>地面</rt><rp>)</rp></ruby></span>が<ruby>好<rp>(</rp><rt>す</rt><rp>)</rp></ruby>きなの。<ruby>硬<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>すぎ
          </p>
          <p className='block text-center z-[50] w-[95%] fixed left-1/2 top-[55%] translate-x-[-50%] translate-y-[-55%]'>
          ると<ruby>足<rp>(</rp><rt>あし</rt><rp>)</rp></ruby>をケガしてしまうわ。もっと<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うとこ
          </p>
          <p className='block text-left z-[50] w-[95%] fixed left-1/2 top-[75%] translate-x-[-50%] translate-y-[-75%]'>
          &nbsp;&nbsp;&thinsp;ろにも<ruby>連<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>れて<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>ってちょうだい！
          </p>
          <img className='z-[49] w-[95%] fixed left-1/2 top-[40%] translate-x-[-50%] translate-y-[-40%]' src={Comment} alt="嫌がってるときの吹き出し" />
        </div>
        <div className='animalbox hidden fixed z-[40] h-screen w-auto items-center'>
          <div className="happy fanimal hidden fixed left-[40%] top-[20%] translate-x-[-45%] translate-y-[-20%]">
            <img className='fananimal hidden' src={Flafav1} alt="喜ぶフラミンゴ" />
            <img className='fananimal hidden' src={Flafav2} alt="喜ぶフラミンゴ" />
            <img className='fananimal hidden lotfun' src={Flafav3} alt="喜ぶフラミンゴ" />
          </div>
          <div className="sad sanimal hidden fixed left-1/2 top-[35%] translate-x-[-50%] translate-y-[-35%]">
            <img className='sadanimal' src={Flazannen} alt="悲しむフラミンゴ" />
          </div>
          <div className="komaru hidden w-[65%] fixed top-[40%] left-1/2 translate-x-[-50%] translate-y-[-40%]">
            <img className='koma' src={Flakomaru} alt="困るフラミンゴ" />
          </div>
        </div>
        {/* <input type="button" value="/接続/" onClick={() => onWatchAdvertisementsButtonClick() }/>
        <p id="num">0%</p>
        <p id="test_name">接続するデバイスの名前</p>
        <p id="test_line02">02デバイス</p>        
        <p id="test_line03">03デバイス</p> */}
        <div className="itemholder h-[90px] w-[100%] rounded-t-[20px] fixed z-30 bottom-0 left-0 bg-main">
            <div className="flex justify-between mt-[-35px] w-[100%]">
              <img onClick={() => render(0,"えだ")} src={branch} alt="えだ" className='items mt-[-20px] w-[17%] h-[115px]' />
              <img onClick={() => render(1,"ロープ")} src={rope} alt="ロープ" className='items mt-[-8px] ml-[-5%] w-[20%] h-[105px]' />
              <img onClick={() => render(2,"ダンボール")} src={cardboard} className='items w-[21%] mt-[-5px]' alt="ダンボール" />
              <img onClick={() => render(3,"ふくろ")} src={bag} alt="ふくろ" className='items mt-[-11px] w-[21%] h-[100px]' />
              <img onClick={() => render(4,"かがみ")} src={mirror} alt="かがみ" className='items mt-[-18px] w-[16%] h-[110px]' />
            </div>
          </div>
      </div>
    </>
  )
}

export default UIs