import link from '../assets/icon/mark_link.svg';
import pn from '../assets/icon/pagenation_2.svg';
import { Link } from 'react-router-dom';

function Items() {
  //   /**
  //  * @fileoverview Leafony Bluetoothリーフクラス
  //  */

  // /**
  //  * Leafonyクラス
  //  * @param none
  //  */
  // function Leafony() {

  //   const SERVICE_UUID = "442f1570-8a00-9a28-cbe1-e1d4212d53eb";
  //   const CHARACTERISTIC_READ_UUID = "442f1571-8a00-9a28-cbe1-e1d4212d53eb";
  //   const CHARACTERISTIC_WRITE_UUID = "442f1572-8a00-9a28-cbe1-e1d4212d53eb";

  //   let state = {};
  //   let char = {};

  //   let device;
  //   let server;

  //   let deviceName;
  //   let uniqueName;

  //   let enSleep = false;

  //   // Check OS
  //   const os = navigator.platform;
  //   var isApple = os.match(/iPhone|iPad|iPod|Mac/);

  //   /**
  //    * Bluetoothリーフと接続する関数
  //    * @param none
  //    * @return none
  //    */
  //   async function connect() {

  //       try {
  //           device = await navigator.bluetooth.requestDevice({
  //               acceptAllDevices: true,
  //               optionalServices: ['generic_access', SERVICE_UUID],
  //           });

  //           console.log('> Unique Name: ' + device.name);
  //           console.log('> ID: ' + device.id);
  //           console.log('> Connected: ' + device.gatt.connected);
  //           uniqueName = String(device.name);

  //           device.addEventListener('gattserverdisconnected', onDisconnected);

  //           server = await device.gatt.connect();

  //           connectService(server);
  //       } catch (error) {
  //           console.log(error);
  //       }

  //   }

  //   /**
  //    * Bluetooth GATT接続後serviceとcharacteristicに接続する関数
  //    * @param {*} server
  //    */
  //   async function connectService(server) {

  //       // デバイス名を取得 (Apple製品は未対応)
  //       if (!isApple) {
  //           await getDeviceName(server);
  //       }

  //       let service = await server.getPrimaryService(SERVICE_UUID);
  //       char.read = await service.getCharacteristic(CHARACTERISTIC_READ_UUID);
  //       char.write = await service.getCharacteristic(CHARACTERISTIC_WRITE_UUID);

  //       await char.read.startNotifications();
  //       //データを受信した時に呼び出される関数を指定
  //       char.read.addEventListener('characteristicvaluechanged', handleData);

  //       setInterval(sendCommand, 1000, 'SND');
  //   }

  //   /**
  //    * Characteristicの値が変化した時に呼び出される関数
  //    * @param {*} event
  //    */
  //   function handleData(event) {
  //       // 受信したデータの文字コードを変換して、カンマでデータを分けている
  //       // このサンプルではLeafonyは
  //       // 温度,湿度,傾き,電池の電圧
  //       // のようにカンマ区切りのテキストを送信している。
  //       let data = event.target.value;
  //       let decoder = new TextDecoder('utf-8');
  //       data = decoder.decode(data);
  //       data = data.replace(/\r?\n/g, '');
  //       data = data.split(',');

  //       state.devn = deviceName;
  //       state.unin = uniqueName;
  //       // state.temp = data[0];
  //       // state.humd = data[1];
  //       // state.illm = data[2];
  //       // state.tilt = data[3];
  //       // state.batt = data[4];
  //       // state.dice = data[5];
  //       state.item11 = data[0];
  //       state.item12 = data[1];
  //       state.item13 = data[2];
  //       state.item14 = data[3];
  //       state.item15 = data[4];
  //       // ここで updateTable() が実行されている
  //       onStateChangeCallback(state);

  //       console.log(data);
  //       if (enSleep) {
  //           sendCommand('STP');
  //           disconnect();
  //       }
  //   }

  //   /**
  //    * characteristicの値が変化した時に呼び出されるユーザ任意処理
  //    */
  //   function onStateChangeCallback() { }

  //   /**
  //    * Bluetoothと切断する関数
  //    */
  //   function disconnect() {

  //       if (!device) {
  //           return;
  //       }
  //       console.log('Disconnecting from Bluetooth Device...');
  //       if (device.gatt.connected) {
  //           device.gatt.disconnect();
  //       } else {
  //           console.log('> Bluetooth Device is already disconnected');
  //       }

  //   }

  //   /**
  //    * Bluetoothと切断された時に呼び出される関数
  //    * @param {*} event
  //    */
  //   function onDisconnected(event) {

  //       console.log('> Bluetooth Device disconnected');

  //       onDisconnectedCallback(event);

  //       if (enSleep) {
  //           setTimeout(reconnect, 8000);
  //       }
  //   }

  //   /**
  //    * Bluetoothと切断された時に実行されるユーザ処理
  //    */
  //   function onDisconnectedCallback() { }

  //   /**
  //    * Sleep有効時、Bluetoothと再接続する関数
  //    */
  //   function reconnect() {

  //       if (!device) {
  //           return;
  //       }

  //       backoff(100 /* max retries */, 1 /* seconds delay */,
  //           function toTry() {
  //               console.log('Reconnecting to Bluetooth Devicve...');
  //               return device.gatt.connect();
  //           },
  //           function success(server) {
  //               console.log('> Bluetooth Device reconnected.');
  //               connectService(server);
  //           },
  //           function fail() {
  //               console.log('Failed to reconnect.');
  //               device = null;
  //               disconnect();
  //           });
  //   }

  //   /**
  //    * 再接続処理記述を簡単にするための再帰関数
  //    * @param {*} max
  //    * @param {*} delay
  //    * @param {*} toTry
  //    * @param {*} success
  //    * @param {*} fail
  //    */
  //   function backoff(max, delay, toTry, success, fail) {

  //       toTry().then(result => success(result))
  //           .catch(error => {
  //               if (max === 0) {
  //                   return fail(error);
  //               }
  //               console.log('Retrying in ' + delay + 's...(' + max + ' tries left)');
  //               setTimeout(function () {
  //                   backoff(--max, delay, toTry, success, fail);
  //               }, delay * 1000);
  //           });

  //   }

  //   /**
  //    * デバイス名を取得する関数
  //    * @param {*} server
  //    */
  //   async function getDeviceName(server) {

  //       let generic = await server.getPrimaryService('generic_access');
  //       let char = await generic.getCharacteristic('gap.device_name');
  //       let value = await char.readValue();
  //       deviceName = new TextDecoder().decode(value);
  //       console.log('> Device Name: ' + deviceName);

  //   }

  //   /**
  //    * Bluetoothにコマンドを送信する関数
  //    * @param {*} cmd
  //    */
  //   async function sendCommand(cmd) {

  //       if (char.write) {
  //           let ArrayBuffer = new TextEncoder().encode(cmd);
  //           await char.write.writeValue(ArrayBuffer);
  //       }

  //   }

  //   return {
  //       connect: connect,
  //       onStateChange: function (callback) {
  //           onStateChangeCallback = callback;
  //       },
  //       sendCommand: sendCommand,
  //       disconnect: function () {
  //           disconnect();
  //           device = null;
  //       },
  //       onDisconnected: function (callback) {
  //           onDisconnectedCallback = callback;
  //       },
  //       enableSleep: function () {
  //           enSleep = true;
  //       },
  //       disableSleep: function () {
  //           enSleep = false;
  //       }
  //   }
  // }

  //   // const buttonConnect = document.getElementById('ble-connect-button');

  //   let leafony;
  //   // array of received data
  //   let savedData = [];
  //   // length of savedData
  //   const CSV_BUFF_LEN = 1024;
  //   // window.onload = function () {
  //   //  clearTable();
  //   // };
  //   let item11;
  //   let item12;
  //   let item13;
  //   let item14;
  //   let item15;

  //   function Connect() { //leafonyと接続
  //     // leafony = new Leafony();
  //     // leafony.onStateChange(function (state) {
  //     //   updateTable(state);
  //     // });
  //     // leafony.connect();
  //     // buttonConnect.style.display = 'none';
  //     // buttonDisconnect.style.display = '';
  //     navigator.bluetooth.requestDevice({
  //       filters: [
  //         {
  //           name: 'Deafony_AC02'
  //         }],  //< - Prefer filters to save energy & show relevant devices.
  //     })
  //     .then (device => {
  //       device.gatt.connect()
  //     })
  //   };
  //   function updateTable(state) {
  //     item11 = state.item11;
  //     item12 = state.item12;
  //     item13 = state.item13;
  //     item14 = state.item14;
  //     item15 = state.item15;
  //     // Create array of reveived data and sensors data
  //     let darray = new Array(
  //       state.item11,
  //       state.item12,
  //       state.item13,
  //       state.item14,
  //       state.item15
  //     );
  //     // stack reveived data up to CSV_BUFF_LEN
  //     if (savedData.length >= CSV_BUFF_LEN) {
  //       savedData.shift();
  //     }
  //     savedData.push(darray);
  //   }

  return (
    <>
      <div className="h-screen w-auto mx-[20px] grid items-center">
        <Link to="/">
          <img
            className="fixed w-32 left-1/2 top-8 translate-x-[-50%]"
            src="./src/assets/icon/mark_logo.svg"
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
