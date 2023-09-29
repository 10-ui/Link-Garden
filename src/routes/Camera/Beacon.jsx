
//         // カメラ映像の大きさ
//         const cameraWidth = 370;
//         const cameraHeight = 550;

//         const cameraInitSmartphoneSupport = () => {

//             const video = document.getElementById("camera");

//             //スマホからの閲覧か　ここら辺は気にしなくていいと思う（パソコンとスマホだとどっちが幅でどっちが高さかが違うみたい　知りたかったら聞いてくれ）
//             const isMobile = navigator.userAgent.match(/iPhone|Android/);

//             // カメラ映像関連
//             const cameraSetting = {
//                 audio: false
//                 video: {
//                     //スマホの場合は縦横を逆に設定する
//                     width: isMobile ? cameraHeight : cameraWidth,
//                     height: isMobile ? cameraWidth : cameraHeight,
//                     facingMode: "environment",
//                 }
//             }
            
//             navigator.mediaDevices.getUserMedia(cameraSetting)
//                 .then((mediaStream) => {
//                     video.srcObject = mediaStream;
//                 })
//                 .catch((err) => {
//                     console.log(err.toString());
//                 });
//         }

//         // canvas に描画する
//         const canvas_input = () => {
          
//             //video要素
//             const video = document.getElementById("camera");
          
//             //canvas要素
//             const canvas = document.getElementById("canvas");
          
//             //canvas要素の大きさを変更
//             canvas.width = cameraWidth;
//             canvas.height = cameraHeight;
          
//             //描画用オブジェクトを取得
//             const ctx = canvas.getContext("2d");

//             canvas.style.display = 'block'
//             border.style.display = 'none';
//             border_marker.style.display = 'none';

//             ctx.fillStyle = 'rgb(200, 200, 200)'

//           // 左上だけ切り取る
//             //描画する
//             ctx.drawImage(
//                 video,          // データソース 
//                 10,              // 描画開始x座標  
//                 10,              // 描画開始y座標
//                 cameraWidth,    // 描画横サイズ
//                 cameraHeight,    // 描画縦サイズ
//                 330,              // 描画開始x座標  
//                 510,              // 描画開始y座標
//                 cameraWidth,    // 描画横サイズ
//                 cameraHeight    // 描画縦サイズ
//             );

//             let count = 0;
        
//         // ------------------------------------------------------------------------------------------------
          
//             // 色情報の配列作成
//             const color_array = [
//               { name: 'brown', count: 0 },
//               { name: 'blue', count: 0 },
//               { name: 'red', count: 0 },
//               { name: 'green', count: 0 },
//               { name: 'yellow', count: 0 },
//             ]
            
//         // ----------------------------　新しく追記　0927-18:09　-----------------------------------------------


//             // 茶色の範囲
//             const brown_minColor = { r: 102, g: 51, b: 0 };
//             const brown_maxColor = { r: 255, g: 178, b: 102 };
//             // let brown = 0;

//             // 青色の範囲
//             const blue_minColor = { r: 0, g: 0, b: 153 };
//             const blue_maxColor = { r: 51, g: 153, b: 255 };
//             // let blue = 0;

//             // 赤色の範囲
//             const red_minColor = { r: 255, g: 0, b: 0 };
//             const red_maxColor = { r: 255, g: 102, b: 102 };
//             // let red = 0;

//             // 緑色の範囲
//             const green_minColor = { r: 0, g: 153, b: 0 };
//             const green_maxColor = { r: 153, g: 255, b: 153 };
//             // let green = 0;

//             // 黄色の範囲
//             const yellow_minColor = { r: 204, g: 204, b: 0 };
//             const yellow_maxColor = { r: 255, g: 255, b: 153 };
//             // let yellow = 0;

//             _changePixelColor();

//             function _changePixelColor() {
//                 // コンテキストからデータ取得
//                 const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//                 const data = imageData.data; // rgba、1バイト×4のデータ

//                 // ここに現在のピクセル情報を入れていく
//                 const currentColor = {};

//                 const text_brown = document.getElementById("text_brown");
//                 const text_blue = document.getElementById("text_blue");

//                 // 1ピクセルずつ確認していく
//                 for (let i = 0, len = data.length; i < len; i += 4) {
//                     currentColor.r = data[i];
//                     currentColor.g = data[i + 1];
//                     currentColor.b = data[i + 2];

//                     // 指定したrgb内であれば以下の処理をする
//                     if (_checkTargetColor(currentColor, brown_minColor, brown_maxColor)) {
//                         // brown += 1;
//                       color_array[0].count++; 
//                         //茶色
//                     }

//                     // 指定したrgb内であれば以下の処理をする
//                     if (_checkTargetColor(currentColor, blue_minColor, blue_maxColor)) {
//                         // blue += 1;
//                       color_array[1].count++; 
//                         //青色
//                     }

//                     // 指定したrgb内であれば以下の処理をする
//                     if (_checkTargetColor(currentColor, red_minColor, red_maxColor)) {
//                         // red += 1;
//                       color_array[2].count++; 
//                         //赤色
//                     }

//                     // 指定したrgb内であれば以下の処理をする
//                     if (_checkTargetColor(currentColor, green_minColor, green_maxColor)) {
//                         // green += 1;
//                       color_array[3].count++; 
//                         //緑色
//                     }

//                     // 指定したrgb内であれば以下の処理をする
//                     if (_checkTargetColor(currentColor, yellow_minColor, yellow_maxColor)) {
//                         // yellow += 1;
//                       color_array[4].count++; 
//                         //黄色
//                     }
//                 }
//             };
          
          
//           // ------------------------------------------------------------------------------------------------
          
//             let color_select = color_array[0];
          
//             for (let i = 1; i < 5; i++) {
//               if (color_select.count < color_array[i].count) {
//                 color_select = color_array[i];
//               }
//             }
//             console.log ('color_select =' + color_select.name);
//           console.log(color_array);
          
//             function _checkTargetColor(current, min, max) {
//                 if (min.r > current.r || current.r > max.r) return;
//                 if (min.g > current.g || current.g > max.g) return;
//                 if (min.b > current.b || current.b > max.b) return;
//                 return true;
//             };
          
//             // この下のやつが範囲指定！！
//             ctx.drawImage(
//                 video, //描画する映像
//                 50, //x こっから描画する対象
//                 60, //y
//                 cameraWidth - 100,  //横
//                 cameraHeight - 110, //縦
//                 0, //x 実際に表示するやつ
//                 0, //y
//                 cameraWidth, //横
//                 cameraHeight //縦
//             );
//         }
//         // beacon 取得 -------------------------------------------------------------------------------

//               // ビーコンの名前
//               const name02 = 'FSC_BP103_2';
//               const name03 = 'FSC_BP103_3';

//         // -------------------------------------------------------------------------------------------
            
//             const beacon_array = [
//               { name: name02, rssi: 0, count: 0 },
//               { name: name03, rssi: 0, count: 0 },
              
//             ]
            
//             // 初期値設定
//             let beacon_check = beacon_array[0];
//             let beacon = beacon_array[0];
            
//             // beacon_distance よりも値が小さい（ビーコンとの距離が近い）時が beacon_count 回あったときに判定させる
//             const beacon_count = 5;
      
//             // ビーコンの数
//             const beacon_num = 2;
      
//             // beacon_distance よりも値が小さい時に判定させる
//             const beacon_distance = -67;
            

//       // ---------------------　新しく追記　0927-18:06　-------------------------------------------------------------------
  

              
//               function onWatchAdvertisementsButtonClick() {
                                
//               console.log('Requesting any Bluetooth device...');
//               navigator.bluetooth.requestDevice({
//                   filters: [
//                       {
//                           name: name02
//                       },
//                       {
//                           name: name03
//                       }],  //< - Prefer filters to save energy & show relevant devices.

//               })
//                 .then(device => {
//                     console.log('> Requested ' + device.name);
//                     var elm = document.getElementById('test_name');
//    　　　　　　       elm.textContent = device.name;
                
//                     device.gatt.connect()

//                     device.addEventListener("advertisementreceived", (event) => {
                      
//                         // ビーコンの情報をHTMLで表示するためのやつ
//                         var elm02 = document.getElementById('test_line02');
//                         var elm03 = document.getElementById('test_line03');
                      
                      
                      
                      
// // -----------------------------------------------------------------------------------------------------------------------
                      
//                       // ビーコンの名前で条件判定　（ビーコンの名前が 2番だったら2番の配列の電波強度を更新）
//                       if (event.device.name == name02) {
//                         beacon_array[0].rssi = event.rssi;
                        
//                       } else if (event.device.name == name03) {
//                         beacon_array[1].rssi = event.rssi;
                        
//                       }
                      
//                       // どのビーコンが一番近いか判定して beacon_selectにいれる
//                       beacon_select = beacon_array[0];
//                       for (let i = 1; i < 2; i++) {
//                         if (beacon_select.rssi < beacon_array[i].rssi) {
//                           beacon_select = beacon_array[i];
//                         }
//                       }
                      
//                       // ビーコンの値が -67よりも小さいときにカウントアップ
//                       if (beacon_select.rssi > beacon_distance) {
//                         beacon_select.count++;
//                       }
                      
//                       // 一番近いビーコン　かつ　ビーコンの電波強度が -67よりも小さい時が beacon_count(今は5回)よりも多いとき
//                       if (beacon_select.name == beacon_check.name && beacon_select.count > beacon_count ) {
//                         console.log("選ばれたのは君だ！！" + beacon_select.name);
//                         beacon = beacon_select;
                        
//                         // すべてのビーコンの中にある count を 0 にリセット
//                         for (let i = 0; i < beacon_num; i++) {
//                           beacon_array[i].count = 0;
//                         }
                        
//                       }
                      
//                       beacon_check = beacon_select;

                      
//                       console.log(beacon_array[0]);
//                       console.log(beacon_array[1]);
//                       console.log(beacon_select);

//                       elm02.textContent = beacon_array[0].name + beacon_array[0].rssi + beacon_array[0].count + beacon.name;                                    
//             elm03.textContent = beacon_array[1].name + beacon_array[1].rssi + beacon_array[1].count;                                

//                         event.manufacturerData.forEach((valueDataView, key) => {
//                             logDataView('Manufacturer', key, valueDataView);
//                         });
//                         event.serviceData.forEach((valueDataView, key) => {
//                             logDataView('Service', key, valueDataView);
//                         });
                      
                    
//                     });

//                     console.log(device.id);
//                     console.log('Watching advertisements from "' + device.name + '"...');
//                     return device.watchAdvertisements();
//                 })
//                 .catch(error => {
//                     console.log('Argh! ' + error);
//                     alert(error);
//                 });
                
//         }

//         /* Utils */

//         const logDataView = (labelOfDataSource, key, valueDataView) => {
//             const hexString = [...new Uint8Array(valueDataView.buffer)].map(b => {
//                 return b.toString(16).padStart(2, '0');
//             }).join(' ');
//             const textDecoder = new TextDecoder('ascii');
//             const asciiString = textDecoder.decode(valueDataView.buffer);
//             console.log(`  ${labelOfDataSource} Data: ` + key +
//                 '\n    (Hex) ' + hexString +
//                 '\n    (ASCII) ' + asciiString);
//         };
      
//       // ---------------------------------------------------------------------------------------------
      

//     {/* <div class="camera_img">
//         <video id="camera" autoplay muted playsinline></video>
//         <canvas id="canvas" wcrossorigin="anonymous"></canvas>
//     </div>

//     <!-- この中にimgがはいる -->
//     <article id="content_area"></article>
//     <div id="border"></div>
//     <div id="border_marker"></div>

  

//     <ul>
//         <li><p id="text_brown">茶色</p></li>
//         <li><p id="text_blue">水色</p></li>
//         <li><p id="text_red">赤色</p></li>
//         <li><p id="text_green">緑色</p></li>
//         <li><p id="text_yellow">黄色</p></li>
//     </ul>
  
//     <div class="btns">
//         <input type="button" value="カメラ起動" onclick="cameraInitSmartphoneSupport()">
//         <input type="button" value="真ん中切り取り" onclick="canvas_input()">
//         <input type="button" value="imgタグにいれる" onclick="photo_view()">
//         <input type="button" value="img削除" onclick="img_remove()">
//         <input type="button" value="ボタン" onclick="onWatchAdvertisementsButtonClick()">
      
//         <p id="test_name">接続するデバイスの名前</p>
//         <p id="test_line02">02デバイス</p>        
//         <p id="test_line03">03デバイス</p>
//     </div> */}
