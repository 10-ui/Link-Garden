
function Retry() {


    const canvas = document.getElementById("canvas");
    //描画用オブジェクトを取得
    const ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, 600, 600);
    canvas.classList.add("hidden");
      canvas.classList.toggle('fixed');
      canvas.classList.toggle('z-[90]');
      canvas.classList.toggle('left-1/2');
      canvas.classList.toggle('top-1/2');
      canvas.classList.toggle('translate-x-[-50%]');
      canvas.classList.toggle('translate-y-[-50%]');

  return (
    <>
      <input type="button" value="やりなおし" onClick={() => retry()}/>
    </>
  )
}

export default Retry