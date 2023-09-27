function Pickup() {
  

  // カメラ映像の大きさ
  const cameraWidth = 390;
  const cameraHeight = 840;

  // canvas に描画する
  function canvas_input() {
  //video要素
  const video = document.getElementById("camera");
  //canvas要素
  const canvas = document.getElementById("canvas");
  canvas.classList.remove("hidden");
  //canvas要素の大きさを変更
  canvas.width = cameraWidth;
  canvas.height = cameraHeight;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 600, 600);
  canvas.classList.add("hidden");
  canvas.classList.add('fixed');
  canvas.classList.add('z-[90]');
  canvas.classList.add('left-1/2');
  canvas.classList.add('top-1/2');
  canvas.classList.add('translate-x-[-50%]');
  canvas.classList.add('translate-y-[-50%]');
  //描画用オブジェクトを取得


  canvas.style.display = 'block'
  const der = document.querySelectorAll('.der');
  der[0].classList.remove("hidden");
  der[1].classList.remove("hidden");

  ctx.fillStyle = 'rgb(200, 200, 200)'

  // 左上だけ切り取る
  //描画する
  ctx.drawImage(
  video,          // データソース 
  10,              // 描画開始x座標  
  10,              // 描画開始y座標
  cameraWidth,    // 描画横サイズ
  cameraHeight,    // 描画縦サイズ
  330,              // 描画開始x座標  
  510,              // 描画開始y座標
  cameraWidth,    // 描画横サイズ
  cameraHeight    // 描画縦サイズ
  );
  canvas.classList.add("hidden");


  let count = 0;

  // 茶色の範囲
  const brown_minColor = { r: 102, g: 51, b: 0 };
  const brown_maxColor = { r: 255, g: 178, b: 102 };
  let brown = 0;

  // 青色の範囲
  const blue_minColor = { r: 0, g: 0, b: 153 };
  const blue_maxColor = { r: 51, g: 153, b: 255 };
  let blue = 0;

  // 赤色の範囲
  const red_minColor = { r: 255, g: 0, b: 0 };
  const red_maxColor = { r: 255, g: 102, b: 102 };
  let red = 0;

  // 緑色の範囲
  const green_minColor = { r: 0, g: 153, b: 0 };
  const green_maxColor = { r: 153, g: 255, b: 153 };
  let green = 0;

  // 黄色の範囲
  const yellow_minColor = { r: 204, g: 204, b: 0 };
  const yellow_maxColor = { r: 255, g: 255, b: 153 };
  let yellow = 0;

  _changePixelColor();

  function _changePixelColor() {
  // コンテキストからデータ取得
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data; // rgba、1バイト×4のデータ

  // ここに現在のピクセル情報を入れていく
  const currentColor = {};

  const text_brown = document.getElementById("text_brown");
  const text_blue = document.getElementById("text_blue");

  // 1ピクセルずつ確認していく
  for (let i = 0, len = data.length; i < len; i += 4) {
  currentColor.r = data[i];
  currentColor.g = data[i + 1];
  currentColor.b = data[i + 2];

  // 指定したrgb内であれば以下の処理をする
  if (_checkTargetColor(currentColor, brown_minColor, brown_maxColor)) {
  brown += 1;
  //茶色
  }

  // 指定したrgb内であれば以下の処理をする
  if (_checkTargetColor(currentColor, blue_minColor, blue_maxColor)) {
  blue += 1;
  //青色
  }

  // 指定したrgb内であれば以下の処理をする
  if (_checkTargetColor(currentColor, red_minColor, red_maxColor)) {
  red += 1;
  //赤色
  }

  // 指定したrgb内であれば以下の処理をする
  if (_checkTargetColor(currentColor, green_minColor, green_maxColor)) {
  green += 1;
  //緑色
  }

  // 指定したrgb内であれば以下の処理をする
  if (_checkTargetColor(currentColor, yellow_minColor, yellow_maxColor)) {
  yellow += 1;
  //黄色
  }
  }
  };

  var choose = null;
  if (brown > blue && brown > red && brown > green && brown > yellow) {
  // 茶色が一番多い
  text_brown.style.background = 'brown';
  console.log('茶色が一番多い');
  } else if (blue > red && blue > green && blue > yellow) {
  // 青色が一番多い
  text_blue.style.background = 'blue';
  console.log('青色が一番多い');
  } else if (red > green && red > yellow) {
  // 赤色が一番多い
  text_red.style.background = 'red';
  console.log('赤色が一番多い');
  } else if (green > yellow) {
  // 緑色が一番多い
  text_green.style.background = 'green';
  console.log('緑色が一番多い');
  } else if (yellow > green) {
  // 黄色が一番多い
  text_yellow.style.background = 'yellow';
  console.log('黄色が一番多い');
  } else {
  console.log('色が検出されませんでした');
  }

  console.log('茶色 ' + brown);
  console.log('青色 ' + blue);
  console.log('赤色 ' + red);
  console.log('緑色 ' + green);
  console.log('黄色 ' + yellow);
  console.log(' ');

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
  370 - 100,  //横
  550 - 110, //縦
  0, //x 実際に表示するやつ
  0, //y
  cameraWidth, //横
  cameraHeight //縦
  )
  }


  return (
    <>
      <input type="button" value="/撮影/" onClick={() => canvas_input() }/>
    </>
  )
}

export default Pickup