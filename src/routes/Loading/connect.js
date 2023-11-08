const buttonSnd = document.querySelector('#ble-snd-button');
let leafony;
let leafonyMode = 'search_item'; // leafony のモード。search_item, send_item, discover の3つ。
buttonSnd.addEventListener('click', function leaf() {
  //leafonyと接続
  if (!leafony) {
    leafony = new Leafony();
    leafony.onStateChange(function (state) {
      getData(state);
    });
    leafonyMode = 'send_item';
    leafony.connect('SND');
  } else {
    console.log('Leafonyは既に接続済みです。mode:' + leafonyMode);
  }
});
/**
 * Leafonyからデータを取得するメソッド
 * @param {*} state
 */
function getData(state) {
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
}