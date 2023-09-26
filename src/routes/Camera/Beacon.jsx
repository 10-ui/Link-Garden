function Beacon() {


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
    i++;
    console.log(i);
    console.log('Advertisement received.');
    console.log('  Device Name: ' + event.device.name);
    console.log('  Device ID: ' + event.device.id);
    console.log('  RSSI: ' + event.rssi);
    console.log('  TX Power: ' + event.txPower);
    console.log('  UUIDs: ' + event.uuids);
    if (event.rssi > -57) {
    console.log('近いよ！！');
    text_yellow.style.background = 'green';
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
    return device.watchAdvertisements();
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
      <input type="button" value="ボタン" onClick={() => onWatchAdvertisementsButtonClick() }/>
    </>
  )
}

export default Beacon