function Decide() {
  // img タグに入れる
  function photo_view() {
    const der = Array.from(document.querySelectorAll('.der'));
      der[0].classList.add("hidden");
      der[1].classList.add("hidden");
    
    const UI = document.querySelector(".UI");
    const canvas = document.getElementById("canvas");
    //描画用オブジェクトを取得
    const ctx = canvas.getContext("2d");
    // JPGにする場合 (第2引数は品質)
    let dataURI = canvas.toDataURL("image/jpeg", 0.75);
    console.log(dataURI)
    
    // img タグの生成
    const img_area = document.getElementById("content_area");
    const img_element = document.createElement("img")
    
    img_area.appendChild(img_element)
    
    // データURIは直接img要素のsrc属性に指定できる
    img_element.src = dataURI;
    img_element.classList.add("absolute");
    img_element.classList.add("z-[95]")
    img_element.classList.add("w-[50%]");
    img_element.classList.add("h-[40%]");
    img_element.classList.toggle('left-1/2');
    img_element.classList.toggle('top-1/2');
    img_element.classList.toggle('translate-x-[-50%]');
    img_element.classList.toggle('translate-y-[-50%]');
    
    // canvas の削除
    ctx.clearRect(0, 0, 600, 600);
    canvas.classList.add("hidden");
    // const video = document.getElementById("camera");
    // video.classList.add("hidden");
    UI.classList.remove("hidden");
  }
  
  return (
    <>
      <input type="button" value="imgタグにいれる" onClick={() => photo_view() }/>
    </>
  )
}