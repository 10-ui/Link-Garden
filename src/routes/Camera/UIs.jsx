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
import Flamirror from '../../assets/icon/animal_mirror.svg';
import Comment from '../../assets/icon/animal_comment.svg';

const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );

function UIs() {

  const [num, setNum] = useState(null);
  const [name, setName] = useState(null);
  let Beacon_num = 21;
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
        if(i === 2){
          console.log('成功')
        } else funs[i].classList.add('hidden');
        funs[i].classList.remove('animate-yurayura');
      }
      // mirror.classList.add('hidden');
      // comment.classList.add('hidden');
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
  
      let i = 0;
      
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
        // ビーコンの情報をHTMLで表示するためのやつ
        var elm02 = document.getElementById('test_line02');
        var elm03 = document.getElementById('test_line03');
  
        // // 名前で条件分岐
        // if (event.device.name == name02) {
  
        // // 2番のRSSI取得
        // RSSI02 = event.rssi;
        // elm02.textContent = event.device.name + ' ' + RSSI02 + ' 近いよカウント= ' +  count02;
        // }
  
        // if (event.device.name == name03) {
  
        // // 3番のRSSI取得
        // RSSI03 = event.rssi;
        // elm03.textContent = event.device.name + ' '  + RSSI03 + ' 近いよカウント= ' + count03;
        // }
  
  
        // // RSSI の比較 条件式ここに書く～～～～～～～～～～～～～～～～～～～～～～
        // if ( RSSI02 > RSSI03) {
        // // 2番の距離のほうが近い
  
        //   elm02.style.background = 'yellow';
        //   elm03.style.background = 'white';
        //   count02 += 1;
  
        // } else {
        // // 3番の距離のほうが近い
  
        //   elm03.style.background = 'yellow';
        //   elm02.style.background = 'white';
        //   count03 += 1;
  
        // }

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

      elm02.textContent = beacon_array[0].name + beacon_array[0].rssi + beacon_array[0].count + beacon.name;                                    
elm03.textContent = beacon_array[1].name + beacon_array[1].rssi + beacon_array[1].count;                                

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
          <p className='text-accent block z-[50] w-[25%] fixed right-[10%] top-[95%] translate-x-[-10%] translate-y-[-95%]'>
            <Link to='/Found'>もっと見る</Link>
            </p>
          <img className='z-[49] w-[95%] fixed left-1/2 top-[40%] translate-x-[-50%] translate-y-[-40%]' src={Comment} alt="喜んでるときの吹き出し" />
        </div>
        <div className='animalbox hidden fixed z-[40] h-screen w-auto items-center'>
          <div className="happy fanimal hidden fixed left-[45%] top-[20%] translate-x-[-45%] translate-y-[-20%]">
            <img className='fananimal hidden' src={Flafav1} alt="喜ぶフラミンゴ" />
            <img className='fananimal hidden' src={Flafav2} alt="喜ぶフラミンゴ" />
            <img className='fananimal hidden' src={Flafav3} alt="喜ぶフラミンゴ" />
          </div>
          <div className="sad sanimal hidden fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <img className='sadanimal' src={Flasick} alt="悲しむフラミンゴ" />
          </div>
        </div>
        <input type="button" value="/接続/" onClick={() => onWatchAdvertisementsButtonClick() }/>
        <p id="num">0%</p>
        <p id="test_name">接続するデバイスの名前</p>
        <p id="test_line02">02デバイス</p>        
        <p id="test_line03">03デバイス</p>
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

export default UIs