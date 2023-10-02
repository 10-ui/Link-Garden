const buttonConnect = document.getElementById('ble-connect-button');

let leafony;
// array of received data
let savedData = [];
// length of savedData
const CSV_BUFF_LEN = 1024;
// window.onload = function () {
//  clearTable();
// };
buttonConnect.addEventListener('click', function () { //leafonyと接続
  leafony = new Leafony();
  leafony.onStateChange(function (state) {
    updateTable(state);
  });
  leafony.connect();
  // buttonConnect.style.display = 'none';
  // buttonDisconnect.style.display = '';
  // navigator.bluetooth.requestDevice({
  //   filters: [
  //     {
  //       name: 'Deafony_AC02'
  //     }],  //< - Prefer filters to save energy & show relevant devices.
  // })
});
function updateTable(state) {
  item11 = state.item11;
  item12 = state.item12;
  item13 = state.item13;
  item14 = state.item14;
  item15 = state.item15;
  // Create array of reveived data and sensors data
  let darray = new Array(
    state.item11,
    state.item12,
    state.item13,
    state.item14,
    state.item15
  );
  // stack reveived data up to CSV_BUFF_LEN
  if (savedData.length >= CSV_BUFF_LEN) {
    savedData.shift();
  }
  savedData.push(darray);
}