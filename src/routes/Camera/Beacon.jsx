function Beacon() {

  const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );

  let choose = 1;

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
        
                // ビーコンのRSSI
                let RSSI02 = 0;
                let RSSI03 = 0;
                
                // 近いカウント
                let count02 = 0;
                let count03 = 0;

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

      // 名前で条件分岐
      if (event.device.name == name02) {

      // 2番のRSSI取得
      RSSI02 = event.rssi;
      elm02.textContent = event.device.name + ' ' + RSSI02 + ' 近いよカウント= ' +  count02;
      }

      if (event.device.name == name03) {

      // 3番のRSSI取得
      RSSI03 = event.rssi;
      elm03.textContent = event.device.name + ' '  + RSSI03 + ' 近いよカウント= ' + count03;
      }


      // RSSI の比較 条件式ここに書く～～～～～～～～～～～～～～～～～～～～～～
      if ( RSSI02 > RSSI03) {
      // 2番の距離のほうが近い

        elm02.style.background = 'yellow';
        elm03.style.background = 'white';
        count02 += 1;

      } else {
      // 3番の距離のほうが近い

        elm03.style.background = 'yellow';
        elm02.style.background = 'white';
        count03 += 1;

      }
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
      {/* <input type="button" value="/接続/" onClick={() => onWatchAdvertisementsButtonClick() }/>
      <p id="num">0%</p> */}

      {/* <p id="test_name">接続するデバイスの名前</p>
      <p id="test_line02">02デバイスの名前とrssi</p>        
      <p id="test_line03">03デバイスの名前とrssi</p> */}
    </>
  )
}

export default Beacon