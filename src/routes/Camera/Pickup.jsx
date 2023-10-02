import shatter from '../../assets/icon/mark_shatter.svg';


//結果に応じてbodyに data-animalを作って getAttributeで行き先を選ばせる？かな


function Pickup() {
  

  // カメラ映像の大きさ
  const cameraWidth = 390;
  const cameraHeight = 840;

  // canvas に描画する
  function canvas_input() {

  const retry = document.querySelector('.retry');
  retry.classList.remove('hidden');

  const decide = document.querySelector('.decide');
  decide.classList.remove('hidden');

  const shoot = document.querySelector('.shoot');
  shoot.classList.add('hidden');

  const screen = document.querySelector('.backscreen');
  screen.classList.remove('hidden');

  const img_area = document.getElementById("content_area");
  img_area.classList.add('hidden');

  //video要素
  const video = document.getElementById("camera");
  //canvas要素
  const canvas = document.getElementById("canvas");
  canvas.classList.remove("hidden");
  //canvas要素の大きさを変更
  canvas.width = cameraWidth;
  canvas.height = cameraHeight;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1000, 1000);
  canvas.classList.add('fixed');
  canvas.classList.add('z-[210]');
  canvas.classList.add('left-1/2');
  canvas.classList.add('top-1/2');
  canvas.classList.add('translate-x-[-50%]');
  canvas.classList.add('translate-y-[-50%]');
  canvas.classList.add('w-[50%]');
  canvas.classList.add('h-[50%]');
  canvas.style.display = 'block';
  //描画用オブジェクトを取得

  const borders = [...document.querySelectorAll('.borders')];
  for(let i = 0; i < borders.length; i++){
    borders[i].classList.add("hidden");
  }

  ctx.fillStyle = 'rgb(200, 200, 200)'

  // 左上だけ切り取る
  //描画する
  ctx.drawImage(
  video,          // データソース 
  0,              // 描画開始x座標  
  0,              // 描画開始y座標
  cameraWidth,    // 描画横サイズ
  cameraHeight,    // 描画縦サイズ
  330,              // 描画開始x座標  
  510,              // 描画開始y座標
  cameraWidth,    // 描画横サイズ
  cameraHeight    // 描画縦サイズ
  );


  // let count = 0;

// 色情報の配列作成
  const color_array = [
    { name: 'brown', count: 0 },
    { name: 'blue', count: 0 },
    { name: 'red', count: 0 },
    { name: 'green', count: 0 },
    { name: 'yellow', count: 0 },
  ]

  // 茶色の範囲
  const brown_minColor = { r: 102, g: 51, b: 0 };
  const brown_maxColor = { r: 255, g: 178, b: 102 };
  // let brown = 0;

  // 青色の範囲
  const blue_minColor = { r: 0, g: 0, b: 153 };
  const blue_maxColor = { r: 51, g: 153, b: 255 };
  // let blue = 0;

  // 赤色の範囲
  const red_minColor = { r: 255, g: 0, b: 0 };
  const red_maxColor = { r: 255, g: 102, b: 102 };
  // let red = 0;

  // 緑色の範囲
  const green_minColor = { r: 0, g: 153, b: 0 };
  const green_maxColor = { r: 153, g: 255, b: 153 };
  // let green = 0;

  // 黄色の範囲
  const yellow_minColor = { r: 204, g: 204, b: 0 };
  const yellow_maxColor = { r: 255, g: 255, b: 153 };
  // let yellow = 0;

  _changePixelColor();

  function _changePixelColor() {
  // コンテキストからデータ取得
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data; // rgba、1バイト×4のデータ

  // ここに現在のピクセル情報を入れていく
  const currentColor = {};

  // const text_brown = document.getElementById("text_brown");
  // const text_blue = document.getElementById("text_blue");

  // 1ピクセルずつ確認していく
  for (let i = 0, len = data.length; i < len; i += 4) {
    currentColor.r = data[i];
    currentColor.g = data[i + 1];
    currentColor.b = data[i + 2];

    // 指定したrgb内であれば以下の処理をする
    if (_checkTargetColor(currentColor, brown_minColor, brown_maxColor)) {
        // brown += 1;
      color_array[0].count++; 
        //茶色
    }

    // 指定したrgb内であれば以下の処理をする
    if (_checkTargetColor(currentColor, blue_minColor, blue_maxColor)) {
        // blue += 1;
      color_array[1].count++; 
        //青色
    }

    // 指定したrgb内であれば以下の処理をする
    if (_checkTargetColor(currentColor, red_minColor, red_maxColor)) {
        // red += 1;
      color_array[2].count++; 
        //赤色
    }

    // 指定したrgb内であれば以下の処理をする
    if (_checkTargetColor(currentColor, green_minColor, green_maxColor)) {
        // green += 1;
      color_array[3].count++; 
        //緑色
    }

    // 指定したrgb内であれば以下の処理をする
    if (_checkTargetColor(currentColor, yellow_minColor, yellow_maxColor)) {
        // yellow += 1;
      color_array[4].count++; 
        //黄色
    }
  }
  };

  let color_select = color_array[0];
          
  for (let i = 1; i < color_array.length; i++) {
    if (color_select.count < color_array[i].count) {
      color_select = color_array[i];
    }
  }
  for (let i = 0; i < color_array.length; i++) {
    if(color_select.name === color_array[i].name)
    console.log(`Most color is ${color_array[i].name}`);
    else console.log('++++++');
  }
  
  console.log ('color_select =' + color_select.name);
  console.log(color_array); 

  // if (brown > blue && brown > red && brown > green && brown > yellow) {
  // // 茶色が一番多い
  // // text_brown.style.background = 'brown';
  // console.log('茶色が一番多い');
  // } else if (blue > red && blue > green && blue > yellow) {
  // // 青色が一番多い
  // // text_blue.style.background = 'blue';
  // console.log('青色が一番多い');
  // } else if (red > green && red > yellow) {
  // // 赤色が一番多い
  // // text_red.style.background = 'red';
  // console.log('赤色が一番多い');
  // } else if (green > yellow) {
  // // 緑色が一番多い
  // // text_green.style.background = 'green';
  // console.log('緑色が一番多い');
  // } else if (yellow > green) {
  // // 黄色が一番多い
  // // text_yellow.style.background = 'yellow';
  // console.log('黄色が一番多い');
  // } else {
  // console.log('色が検出されませんでした');
  // }

  // console.log('茶色 ' + brown);
  // console.log('青色 ' + blue);
  // console.log('赤色 ' + red);
  // console.log('緑色 ' + green);
  // console.log('黄色 ' + yellow);
  // console.log(' ');

  function _checkTargetColor(current, min, max) {
  if (min.r > current.r || current.r > max.r) return;
  if (min.g > current.g || current.g > max.g) return;
  if (min.b > current.b || current.b > max.b) return;
  return true;
  };

  // この下のやつが範囲指定！！
  ctx.drawImage(
  video, //描画する映像
  50, //x こっから描画する対象
  60, //y
  270,  //横
  450, //縦
  0, //x 実際に表示するやつ
  0, //y
  cameraWidth, //横
  cameraHeight //縦
  )
  }


  return (
    <>
      <div className='bg-screen relative backscreen h-screen w-screen z-[0] hidden'></div>
      <img  className='hidden shoot w-[70px] h-[70px] fixed left-1/2 top-[89%] translate-x-[-50%]' src={shatter} alt="撮影ボタン" onClick={() => canvas_input() }/>
    </>
  )
}

export default Pickup